"use client";

import styles from "../css/modal.module.css";
import { FaFeather, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Carousel from "@/app/components/Carousel";
import PlatformIcon from "@/app/components/PlatformIcon";
import axios from "axios";
import { useEffect, useState } from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Requirements from "@/app/components/Requirements";

const Modal = ({ isOpen, onClose, gameID }) => {
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const [game, setGame] = useState([]);
  const [platformName, setPlatformName] = useState([]);
  const [gp, setgp] = useState("");
  const [gameRequirement, setGameRequirement] = useState([]);
  const getGameDescription = () => {
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, {
        params: { id: gameID.toString() },
        headers: {
          "X-RapidAPI-Key":
            "234848f04emsh06cb063582e79d6p125333jsn4e3e95095409",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        setGame(res.data);
        setgp(res.data.platform);
        setGameRequirement(res.data.minimum_system_requirements);
        // console.log("gd", game.platform);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getGameDescription();
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

  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <IoClose
          className={styles.closeButton}
          onClick={onClose}
          color={"#fff"}
          size={25}
        />
        {/*{game.map((game, index) => (*/}
        {/*    <>*/}

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
            <FaStar className={styles.star} color={"#FFD700"} size={25} />
            <div className={styles.platforms}>
              <div className={styles.gameInfoTitle1}>
                Platforms :
                <div className={styles.platformsList}>
                  {platformName.map((p, index) => (
                    <PlatformIcon
                      platform={p}
                      size={20}
                      style={{ marginRight: 4 }}
                    />
                  ))}
                  <PlatformIcon size={25} platform={game.platform} />
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
