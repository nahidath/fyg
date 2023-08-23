'use client';
import styles from "../css/login.module.css";
import Link from "next/link";
import {useState} from "react";


const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    //submit form that matches the username and password with the local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'));
        let user = users.find(user => user.username === username);
        if(user && user.password === password){
            localStorage.setItem('currentUser',JSON.stringify(user));
            window.location.href = '/';
        }
        else{
            alert('Wrong username or password');
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.loginTxt}>Login</div>

                <form className={styles.inputGroup} onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Username</div>
                        <input className={styles.bgChild} value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputTxt}>Password</div>
                        <input type={"password"} className={styles.bgChild} value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className={styles.btnGroup}>
                        <button className={styles.loginBtn}>Connect !</button>
                    </div>
                </form>
                <div className={styles.btnGroup}>
                    <div className={styles.txtBelow}>Don't have an account ? <Link href="/register" className={styles.registerLink}>Register</Link></div>
                </div>


            </div>
        </div>
    )
}

export default page;