"use client";

import styles from "./home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/app/components/Card";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Genre from "@/app/components/Genre";
import Modal from "./components/Modal";
import PlatformIcon from "@/app/components/PlatformIcon";
import Carousel from "@/app/components/Carousel";
import genresList from "./data/genresList";

const Home1 = () => {
  const [newGames, setNewGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [genres, setGenres] = useState([]);
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameID, setGameID] = useState(0);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getTodayDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  const getNewGamesList = () => {
    //get the date of today with format YYYY-MM-DD

    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        params: { "sort-by": "release-date" },
        headers: {
          "X-RapidAPI-Key":
            "234848f04emsh06cb063582e79d6p125333jsn4e3e95095409",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        //set only 3 games to be displayed
        setNewGames(res.data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPopularGames = () => {
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        params: { "sort-by": "popularity" },
        headers: {
          "X-RapidAPI-Key":
            "234848f04emsh06cb063582e79d6p125333jsn4e3e95095409",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        setPopularGames(res.data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGenres = () => {
    axios
      .get(`https://api.rawg.io/api/genres`, { params: { key: apiKey } })
      .then((res) => {
        setGenres(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNewGamesList();
    getPopularGames();
    getGenres();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.desktop11}>
        <div className={styles.headerimg}>
          <div className={styles.linearbelow}></div>
          <img className={styles.icon1} alt="" src="1108069.png" />
        </div>
        <div className={styles.headerTxt}>
          <div className={styles.discoverAndFind1}>
            Discover and find your future game
          </div>
          <div className={styles.searchInput}>
            <img className={styles.searchIcon1} alt="" src="Search.png" />
            <input className={styles.bgChild2} />
          </div>
        </div>
        <div className={styles.below}>
          <div className={styles.div}>
            <div className={styles.lineParent}>
              <div className={styles.newGames}>New Games</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.cardSpace}>
              {newGames.map((game, index) => (
                <>
                  <Card
                    id={game.id}
                    name={game.title}
                    image_url={game.thumbnail}
                    platforms={game.platform}
                    key={index}
                    // screenshots={game.short_screenshots}
                    // slug={game.slug}
                  />
                  {/*<Modal isOpen={isModalOpen} onClose={closeModal} screenshots={game.short_screenshots} gameID={game.id} keyIndx={index}/>*/}
                </>
              ))}
              <div className={styles.arrowMore}>
                <img src="arrow.gif" alt="" className={styles.item} />
                <div className={styles.txt}>More</div>
              </div>
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.lineParent}>
              <div className={styles.newGames}>Popular Games</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.cardSpace}>
              {popularGames.map((game, index) => (
                <Card
                  id={game.id}
                  name={game.title}
                  image_url={game.thumbnail}
                  platforms={game.platform}
                  key={index}
                />
              ))}
              <div className={styles.arrowMore}>
                <img src="arrow.gif" alt="" className={styles.item} />
                <div className={styles.txt}>More</div>
              </div>
            </div>
          </div>

          <div className={styles.div}>
            <div className={styles.lineParent}>
              <div className={styles.newGames}>Find Your Genre</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.genreWrapper}>
              {genresList.map((genre, index) => (
                <Genre
                  key={index}
                  id={genre.id}
                  name={genre.name}
                  image_url={genre.image}
                  tagName={genre.tagName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
