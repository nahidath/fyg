"use client";

import styles from "./home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@/app/components/Card";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Genre from "@/app/components/Genre";
import genresList from "./data/genresList";
import { useRouter } from 'next/navigation';
import newGamesMock from "@/app/data/newGamesMock";
import popularGamesMock from "@/app/data/popularGamesMock";
import {FaSearch} from "react-icons/fa";

const Home1 = () => {
  const [newGames, setNewGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');



  const getNewGamesList = () => {
    //get the date of today with format YYYY-MM-DD

    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        params: { "sort-by": "release-date" },
        headers: {
          "X-RapidAPI-Key":
            apiKey,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        //set only 3 games to be displayed
        setNewGames(res.data.slice(0, 3));
      }
      ,(error)=>{
        setNewGames(newGamesMock.slice(0, 3));
      }
      )
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
            apiKey,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        setPopularGames(res.data.slice(0, 3));
      },(error)=>{
        setPopularGames(popularGamesMock.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const search = (e) => {
    e.preventDefault();
    //go to search page with the query
    router.push('/search?q=' + inputValue);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const gotToNewsGames = () => {
    router.push('/search?sort=release-date');
  }
  const gotToPopularGames = () => {
    router.push('/search?sort=popularity');
  }


  useEffect(() => {
    getNewGamesList();
    getPopularGames();
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
            <form onSubmit={search}>
              <FaSearch className={styles.searchIcon1} color={"#ba62ff"} size={30} />
              <input value={inputValue} onChange={handleInputChange} className={styles.bgChild2} />
            </form>
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
                  />
                </>
              ))}
              <div className={styles.arrowMore} onClick={gotToNewsGames}>
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
              <div className={styles.arrowMore} onClick={gotToPopularGames}>
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
                  image_url={genre.img}
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
