'use client';
import styles from "../css/login.module.css";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";



const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [email,setEmail] = useState('');
    const router = useRouter();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    //submit form that saves the user to the local storage
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            const userData = {
                username,
                email,
                password,
                favourites: []
            };
            localStorage.setItem('user', JSON.stringify(userData));
            alert('You have successfully registered! You may now log in.');
            router.push('/login'); // Redirect to login page
        } else {
            alert("Passwords don't match.");
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.loginTxt}>Register</div>

                <form className={styles.inputGroup} onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Username</div>
                        <input className={styles.bgChild} value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Email</div>
                        <input type={"email"} className={styles.bgChild} value={email} onChange={handleEmailChange} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Password</div>
                        <input type={"password"} className={styles.bgChild} value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Confirm Password</div>
                        <input type={"password"} className={styles.bgChild} value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>

                    <div className={styles.btnGroup}>
                        <button className={styles.loginBtn}>Sign up!</button>
                    </div>
                </form>
                <div className={styles.btnGroup}>
                    <div className={styles.txtBelow}>Already have an account ? <Link href="/login" className={styles.registerLink}>Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Page;