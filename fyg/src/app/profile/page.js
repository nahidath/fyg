'use client';
import styles from "../css/login.module.css";
import stylesP from "../css/profile.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Card from "@/app/components/Card";
import HorizontalDivider from "@/app/components/HorizontalDivider";
import {FaTrash} from "react-icons/fa";


//profile page for the user
const Page = () => {
    const router = useRouter();
    const [favGames, setfavGames] = useState([]);
    let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
//get the current user from local storage
    const currentUser = typeof window !== 'undefined'? JSON.parse(localStorage.getItem('currentUser')) : null;
    const username = currentUser ? currentUser.username : "";
    const email = currentUser ? currentUser.email : "";
    let favUser = currentUser ? currentUser.favourites : null;

    //function to pick random color and exclude all colors that are too white or too dark
    const getRandomColor = () => {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        while(color === '#ffffff' || color === '#000000'){
            color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }
        return color;
    }


    //if there is no current user, redirect to login page
    useEffect(() => {
        router.push('/login');
    }, [!currentUser]);

   //function that get all the games from the user's favorite list
    const getFavoriteGames = () => {
        let favGames = [];
        if(!favUser){
            return;
        }
        for (let i = 0; i < favUser.length; i++) {
            axios
                .get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, {
                    params: {id: favUser[i].toString()},
                    headers: {
                        "X-RapidAPI-Key": apiKey,
                        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                    },
                })
                .then((res) => {
                    favGames.push(res.data);
                    setfavGames(favGames);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }

    //function that remove the game from the user's favorite list
    const removeFromFavorite = (id) => {
        //get the user's favorite list
       let fu = [];
        if(!favUser){
            return;
        }
        //remove the game from the user's favorite list
        fu = favUser.filter(game => game !== id);
        //update the user's data in local storage with the new favorite list
        favUser = fu;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        //update the favorite games list
        setfavGames(favGames.filter(game => game.id !== id));
    }


    //get the user's favorite games when the local storage is updated
    useEffect(() => {
        router.refresh();
        getFavoriteGames();
    }, []);


   return (
         <div className={styles.container}>
                <div className={stylesP.form}>
                    <div className={styles.loginTxt}>Profile</div>
                    <div className={stylesP.profileZone}>
                        <div className={stylesP.profilePic} style={{backgroundColor:getRandomColor()}}>
                            <div className={stylesP.profileInitialName}>
                                <img src="avatar.gif" alt="user" width={60} height={60} />
                            </div>
                        </div>
                        <div className={stylesP.profileInfo}>
                            <div className={stylesP.username}>{username}</div>
                            <div className={stylesP.email}>{email}</div>
                            <HorizontalDivider marginTop={32} />
                            <div className={stylesP.gameFavorite}>
                                <div className={stylesP.gameFavoriteTxt}>Your Favorites Games</div>
                                <div className={stylesP.gameFavoriteList}>
                                    {favGames.map((game, index) => (
                                        <>
                                        <FaTrash className={stylesP.trashIcon} onClick={() => removeFromFavorite(game.id)} />
                                        <Card
                                            key={index}
                                            name={game.title}
                                            id={game.id}
                                            image_url={game.thumbnail}
                                            platforms={game.platform}
                                        />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
   )

}

export default Page;
