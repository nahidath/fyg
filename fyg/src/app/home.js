import styles from "./home.module.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {REACT_APP_API_KEY} from "@env";
import Card from "@/app/components/Card";

const Home1 = () => {
  const [newGames, setNewGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [genres, setGenres] = useState([]);
  let apiKey = REACT_APP_API_KEY;


  const getNewGamesList = () => {
    //get the date of today with format YYYY-MM-DD
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
    axios.get(`https://api.rawg.io/api/games`, {params:{apiKey: apiKey, ordering: "-relased", dates: "2023-01-01,"+today, page_size:3}})
        .then((res) => {
            setNewGames(res.data.results);
            console.log(res.data.results);
        }
    );
  }

  const getPopularGames = () => {
    axios.get(`https://api.rawg.io/api/games`, {params:{apiKey: apiKey, ordering: "-rating", dates: "2023-01-01,"+today, page_size:3}})
        .then((res) => {
            setPopularGames(res.data.results);
            console.log(res.data.results);
        }
    );
  }

  const getGenres = () => {
    axios.get(`https://api.rawg.io/api/genres`, {params:{apiKey: apiKey}})
        .then((res) => {
            setGenres(res.data.results);
            console.log(res.data.results);
        }
    );
  }

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
              <div className={styles.frameItem} />
              <div className={styles.newGames}>New Games</div>
            </div>
            <div className={styles.cardSpace}>
              <div className={styles.child} />
              <div className={styles.arrowMore}>
                <img src="arrow.gif" alt="" className={styles.item} />
                <div className={styles.txt}>More</div>
              </div>
              <div className={styles.inner} />
              {/*{newGames.map((game) => (*/}
              {/*  <Card id={game.id} name={game.name} image_url={game.background_image} platforms={game.platforms} />*/}
              {/*))}*/}
              {/*call card here*/}
              <div className={styles.child6} />
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.newGames}>Popular Games</div>
            </div>
            <div className={styles.cardSpace}>
              <div className={styles.child} />
              <div className={styles.arrowMore}>
                <img src="arrow.gif" alt="" className={styles.item} />
                <div className={styles.txt}>More</div>
              </div>
              <div className={styles.inner} />
              {/*{popularGames.map((game) => (*/}
              {/*    <Card id={game.id} name={game.name} image_url={game.background_image} platforms={game.platforms} />*/}
              {/*))}*/}
              <div className={styles.child6} />
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.newGamesWrapper}>
              <div className={styles.frameItem} />
              <div className={styles.newGames}>Find Your Genre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
