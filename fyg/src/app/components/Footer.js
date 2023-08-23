import styles from "../css/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.div3}>
        <Link href={"https://store.steampowered.com"} target={"_blank"} className={styles.vectorParent}>
            <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
            <div className={styles.steam}>Steam</div>
        </Link>
        <Link className={styles.vectorParent} href={"https://www.ubisoft.com"} target={"_blank"}>
          <img className={styles.vectorIcon4} alt="" src="Ubisoft.svg" />
          <div className={styles.steam}>Ubisoft</div>
        </Link>
        <Link className={styles.vectorParent} href={"https://www.xbox.com"} target={"_blank"}>
          <img className={styles.vectorIcon4} alt="" src="cib_xbox.svg" />
          <div className={styles.steam}>XBOX</div>
        </Link>
        <Link className={styles.vectorParent} href={"https://www.epicgames.com"} target={"_blank"}>
          <img className={styles.vectorIcon4} alt="" src="cib_epic-games.svg" />
          <div className={styles.steam}>Epic Games</div>
        </Link>
        <Link className={styles.vectorParent} href={"https://www.playstation.com"} target={"_blank"}>
          <img className={styles.vectorIcon4} alt="" src="PlayStation.svg" />
          <div className={styles.steam}>PlayStation</div>
        </Link>
        <Link className={styles.vectorParent} href={"https://play.google.com"} target={"_blank"}>
          <img className={styles.vectorIcon4} alt="" src="Android_OS.png" />
          <div className={styles.steam}>Android</div>
        </Link>
        <Link className={styles.vectorParent} href={"https://www.apple.com/"} target={"_blank"}>
          <img className={styles.vectorIcon4} alt="" src="Apple_Logo.png" />
          <div className={styles.steam}>iOS</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
