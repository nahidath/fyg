import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.child2} /> */}
      <div className={styles.div3}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
          <div className={styles.steam}>Steam</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="Ubisoft.svg" />
          <div className={styles.steam}>Ubisoft</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="cib_xbox.svg" />
          <div className={styles.steam}>XBOX</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="cib_epic-games.svg" />
          <div className={styles.steam}>Epic Games</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="PlayStation.svg" />
          <div className={styles.steam}>PlayStation</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="Origin.svg" />
          <div className={styles.steam}>Origin</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon4} alt="" src="Apple_Logo.png" />
          <div className={styles.steam}>iOS</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
