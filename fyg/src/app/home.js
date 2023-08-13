import styles from "./home.module.css";

const Home1 = () => {

  const newGamesList = () => {

  }


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
