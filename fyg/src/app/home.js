import Footer from "./Footer";
import styles from "./home.module.css";
import Navbar from "./Navbar";
const Home1 = () => {
  return (
    <div className={styles.container}>
      <Navbar />
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
      <Footer />
    </div>

    // <div className={styles.desktop11}>
    //   <div className={styles.navbar}>
    //     <div className={styles.ellipseParent}>
    //       <img
    //         className={styles.blackAndWhiteCollection191}
    //         alt=""
    //         src="Black and White Collection 19.svg"
    //       />
    //       <div className={styles.fYG1}>F Y G</div>
    //     </div>
    //     <div className={styles.loginParent}>
    //       <a href="#" className={styles.login}>
    //         login
    //       </a>
    //       <a href="#" className={styles.register}>
    //         Register
    //       </a>
    //       <div className={styles.frameChild} />
    //     </div>
    //   </div>
    //    <div className={styles.bg}>

    //     <img className={styles.icon1} alt="" src="1108069.png" />
    //     <div className={styles.headerTxt}>
    //       <div className={styles.discoverAndFind1}>
    //         Discover and find your future game
    //       </div>
    //       <input className={styles.bgChild2} />
    //       <img className={styles.searchIcon1} alt="" src="Search.png" />
    //     </div>
    //     <div className={styles.below}>
    //       <div className={styles.div5}>
    //         <div className={styles.lineParent}>
    //           <div className={styles.frameItem} />
    //           <div className={styles.newGames}>New Games</div>
    //         </div>
    //         <div className={styles.cardSpace}>
    //           <div className={styles.child} />
    //           <div className={styles.arrowMore}>
    //             <img src="arrow.gif" alt="" className={styles.item} />
    //             <div className={styles.txt}>More</div>
    //           </div>
    //           <div className={styles.inner} />
    //           <div className={styles.child6} />
    //         </div>
    //       </div>
    //       <div className={styles.div}>
    //         <div className={styles.lineParent}>
    //           <div className={styles.frameItem} />
    //           <div className={styles.newGames}>Popular Games</div>
    //         </div>
    //         <div className={styles.cardSpace}>
    //           <div className={styles.child} />
    //           <div className={styles.arrowMore}>
    //             <img src="arrow.gif" alt="" className={styles.item} />
    //             <div className={styles.txt}>More</div>
    //           </div>
    //           <div className={styles.inner} />
    //           <div className={styles.child6} />
    //         </div>
    //       </div>
    //       <div className={styles.div4}>
    //         <div className={styles.newGamesWrapper}>
    //           <div className={styles.frameItem} />
    //           <div className={styles.newGames}>Find Your Genre</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.div1}>
    //     <div className={styles.privacyPolicy}>Privacy Policy</div>
    //     <div className={styles.termConditions1}>{`Term & Conditions`}</div>
    //   </div>
    //   <div className={styles.div2}>
    //     <div className={styles.child2} />
    //     <div className={styles.div3}>
    //       <div className={styles.inner1}>
    //         <div className={styles.vectorParent}>
    //           <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
    //           <div className={styles.steam}>Steam</div>
    //         </div>
    //       </div>
    //       <div className={styles.vectorGroup}>
    //         <img className={styles.vectorIcon5} alt="" src="Ubisoft.svg" />
    //         <div className={styles.steam}>Ubisoft</div>
    //       </div>
    //       <div className={styles.fluentgiftCard20FilledParent}>
    //         <img
    //           className={styles.fluentgiftCard20FilledIcon1}
    //           alt=""
    //           src="cib_xbox.svg"
    //         />
    //         <div className={styles.steam}>XBOX</div>
    //       </div>
    //       <div className={styles.cibepicGamesParent}>
    //         <img
    //           className={styles.cibepicGamesIcon1}
    //           alt=""
    //           src="cib_epic-games.svg"
    //         />
    //         <div className={styles.steam}>Epic Games</div>
    //       </div>
    //       <div className={styles.vectorContainer}>
    //         <img className={styles.vectorIcon6} alt="" src="PlayStation.svg" />
    //         <div className={styles.steam}>PlayStation</div>
    //       </div>
    //       <div className={styles.vectorParent1}>
    //         <img className={styles.vectorIcon7} alt="" src="Origin.svg" />
    //         <div className={styles.steam}>Origin</div>
    //       </div>
    //       <div className={styles.vectorParent2}>
    //         <img className={styles.vectorIcon8} alt="" src="Apple_Logo.png" />
    //         <div className={styles.steam}>iOS</div>
    //       </div>
    //     </div>
    //     <div className={styles.androidParent}>
    //       <div className={styles.android}>Android</div>
    //       <img className={styles.androidOsIcon} alt="" src="Android OS.png" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home1;
