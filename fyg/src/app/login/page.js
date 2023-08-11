import styles from "../css/login.module.css";
import Link from "next/link";


const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.loginTxt}>Login</div>
                <div className={styles.inputGroup}>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Username</div>
                        <input className={styles.bgChild} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Password</div>
                        <input className={styles.bgChild} />
                    </div>
                    <div className={styles.btnGroup}>
                        <div className={styles.loginBtn}>Login</div>
                        <div className={styles.txtBelow}>Don't have an account ? <Link href="#" className={styles.registerLink}>Register</Link></div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default page;