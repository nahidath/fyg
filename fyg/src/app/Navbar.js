import styles from "./css/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.linkLogo} href="/">
        <div className={styles.logo}>
          <img
            className={styles.blackAndWhiteCollection191}
            alt=""
            src="Black and White Collection 19.svg"
          />

          <div className={styles.fYG1}>F Y G</div>
        </div>
      </Link>
      <div className={styles.loginParent}>
        <a href="#" className={styles.login}>
          Login |
        </a>

        <a href="#" className={styles.login}>
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
