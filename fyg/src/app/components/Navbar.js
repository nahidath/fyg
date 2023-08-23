import styles from "../css/navbar.module.css";
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
        <Link href="/login" className={styles.login}>
          Login |
        </Link>

        <Link href="/register" className={styles.login}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
