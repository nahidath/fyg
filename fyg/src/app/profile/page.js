'use client';
import styles from "../css/login.module.css";
import stylesP from "../css/profile.module.css";
import Link from "next/link";
import {useState} from "react";
import {useRouter, usePathname,useSearchParams} from "next/navigation";


//profile page for the user
const page = () => {
    const router = useRouter();
    //function to pick random color and exclude all colors that are too white or too dark
    const getRandomColor = () => {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        while(color === '#ffffff' || color === '#000000'){
            color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }
        return color;
    }

    //get the current user from local storage
    const currentUser = typeof window !== 'undefined'? JSON.parse(localStorage.getItem('currentUser')) : null;
    //if there is no current user, redirect to login page
    if(!currentUser){
        router.push('/login');
    }


   return (
         <div className={styles.container}>
                <div className={stylesP.form}>
                    <div className={styles.loginTxt}>Profile</div>
                    <div className={stylesP.profileZone}>
                        <div className={stylesP.profilePic} style={{backgroundColor:getRandomColor()}}>
                            <div className={stylesP.profileInitialName}>{currentUser.username[0]}</div>
                        </div>
                        <div className={stylesP.profileInfo}>
                            <div className={stylesP.username}>{currentUser.username}</div>
                            <div className={stylesP.email}>{currentUser.email}</div>
                            <div className={stylesP.gameFavorite}>
                                <div className={stylesP.gameFavoriteTxt}>Your Favorites Games</div>
                                <div className={stylesP.gameFavoriteList}></div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
   )

}

export default page;
