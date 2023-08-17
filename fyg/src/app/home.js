"use client";

import styles from "./home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/app/components/Card";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Genre from "@/app/components/Genre";
import Modal from "./components/Modal";

const Home1 = () => {
  const [newGames, setNewGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [genres, setGenres] = useState([]);
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const [isModalOpen, setIsModalOpen] = useState(false);


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
      .get(`https://api.rawg.io/api/games`, {
        params: { key: apiKey, ordering: "-relased", page_size: 3 },
      })
      .then((res) => {
        setNewGames(res.data.results);
        console.log(res.data.results);
      });
  };

  const getPopularGames = () => {
    axios
      .get(`https://api.rawg.io/api/games`, {
        params: { key: apiKey, ordering: "-rating", page_size: 3 },
      })
      .then((res) => {
        setPopularGames(res.data.results);
        console.log(res.data.results);
      });
  };

  const getGenres = () => {
    axios
      .get(`https://api.rawg.io/api/genres`, { params: { key: apiKey } })
      .then((res) => {
        setGenres(res.data.results);
        console.log(res.data.results);
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
              {newGames.map((game) => (
                <Card
                  id={game.id}
                  name={game.name}
                  image_url={game.background_image}
                  platforms={game.platforms}
                />
              ))}
              <div className={styles.arrowMore}>
                <img src="arrow.gif" alt="" className={styles.item} />
                <div className={styles.txt}>More</div>
              </div>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={styles.gameName}>ooo</div>
                <div className={styles.screenshoots}>
                  <div className={styles.carrousel}></div>
                  </div>
                  <div className={styles.gameDesc}></div>
                  
              </Modal>
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.lineParent}>
              <div className={styles.newGames}>Popular Games</div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.cardSpace}>
              {popularGames.map((game) => (
                <Card
                  id={game.id}
                  name={game.name}
                  image_url={game.background_image}
                  platforms={game.platforms}
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
              {genres.map((genre, index) => (
                <Genre
                  key={index}
                  id={genre.id}
                  name={genre.name}
                  image_url={genre.image_background}
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
