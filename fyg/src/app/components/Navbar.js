'use client';

import styles from "../css/navbar.module.css";
import Link from "next/link";
import {FaArrowRightFromBracket} from "react-icons/fa6";
import {useRouter} from "next/navigation";
import {FaUserCircle} from "react-icons/fa";


const Navbar = () => {
    //get the current user from local storage
    const currentUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('currentUser')) : null;
    const router = useRouter();

    //function to logout the user and refresh the page
    const logout = () => {
        localStorage.removeItem('currentUser');
        router.push('/');
        router.refresh();
    }

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
        {currentUser ? (
            <div className={styles.side}>
                <div className={styles.profileLink}>
                    <FaUserCircle size={20} color={"#fff"}/>
                    <Link href="/profile" className={styles.login}>
                        {currentUser.username}
                    </Link>
                </div>
                <Link href="/" className={styles.login} onClick={logout} >
                    <FaArrowRightFromBracket size={20} color={"#fff"}/>
                </Link>
            </div>
        ) : (
            <div>
                <Link href="/login" className={styles.login}>
                  Login |
                </Link>
                <Link href="/register" className={styles.login}>
                  Register
                </Link>
            </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
