"use client";

import styles from "../css/modal.module.css";
import {FaCheck, FaFeather, FaStar} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Carousel from "@/app/components/Carousel";
import PlatformIcon from "@/app/components/PlatformIcon";
import axios from "axios";
import { useEffect, useState } from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Requirements from "@/app/components/Requirements";
import {useRouter} from "next/navigation";

const Modal = ({ isOpen, onClose, gameID }) => {
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const [game, setGame] = useState([]);
  const [platformName, setPlatformName] = useState([]);
  const [gp, setgp] = useState("");
  const [gameRequirement, setGameRequirement] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const currentUser = typeof window !== 'undefined'? JSON.parse(localStorage.getItem('currentUser')) : null;
  let favUser = currentUser ? currentUser.favourites : null;


  const getGameDescription = () => {
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, {
        params: { id: gameID.toString() },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        setGame(res.data);
        setgp(res.data.platform);
        setGameRequirement(res.data.minimum_system_requirements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function that add the game to the user's favorite list
    const addToFavorite = () => {
        //get the current user from local storage

        //if there is no current user, redirect to login page
        if(!currentUser){
            alert("You need to login first");
            return
        }


        if(!favUser){
            return;
        }
        //add the game to the user's favorite list
        currentUser.favourites.push(gameID);
        //update the user's data in local storage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        setIsFavorite(true)
    }

  useEffect(() => {
    getGameDescription();
    //get the user's favorite list
    //if the game is already in the user's favorite list, return

    let pNames = [];
    let gamePlatform = gp;

    if (gamePlatform.includes(",")) {
      pNames = gamePlatform.split(",").map((item) => item.trim());
      setPlatformName(pNames);
    } else {
      pNames = [gamePlatform];
      setPlatformName(pNames);
    }
  }, [isOpen]);

    useEffect(() => {
        if(!favUser){
            return;
        }
        if(favUser.includes(gameID)){
            setIsFavorite(true);
        }
    }, [favUser]);

  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <IoClose
          className={styles.closeButton}
          onClick={onClose}
          color={"#fff"}
          size={30}
        />
        <div className={styles.gameName}>{game.title}</div>
        <div className={styles.divider}></div>
        <div className={styles.gameBelow}>
          <div className={styles.screenShoots}>
            <Carousel images={game.screenshots} />
          </div>
        </div>
        <div className={styles.gameDescription}>
          <div className={styles.gameInfo}>
            <div className={styles.gameInfoTitle}>About</div>
            <div className={styles.gameInfoContent}>
              {game.description == null
                ? "No description available"
                : game.description}
            </div>
            <Requirements requirements={gameRequirement} />
          </div>
          <div className={styles.verticalDivider}></div>
          <div className={styles.gameAdditionalInfo}>
            {isFavorite ? <div className={styles.addedToFavorite}><FaCheck color={"#fff"} size={20} /> Added to favorites</div> : <div className={styles.addToFavorite} onClick={addToFavorite}>
              <FaStar color={"#FFD700"} size={25} /> Add to favorites
            </div>}
            <div className={styles.platforms}>
              <div className={styles.gameInfoTitle1}>
                Platforms :
                <div className={styles.platformsList}>
                  {platformName.map((p, index) => (
                    <PlatformIcon
                      platform={p}
                      size={20}
                      style={{ marginRight: 4 }}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.platforms}>
              <div className={styles.gameInfoTitle1}>Genre : {game.genre}</div>
            </div>
            <div className={styles.platforms}>
              <div className={styles.gameInfoTitle1}>
                Release date : {game.release_date}
              </div>
            </div>
          </div>
        </div>
        {/*    </>*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default Modal;
