'use client';
import styles from "../css/login.module.css";
import Link from "next/link";
import {useState} from "react";



const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [email,setEmail] = useState('');

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
    //submit form that matches the username and password with the local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'));
        let user = users.find(user => user.username === username);
        if(user){
            alert('Username already exists');
        }
        else{
            if(password !== confirmPassword){
                alert('Passwords do not match');
            }
            else{
                //add user to local storage
                users.push({
                    username:username,
                    password:password,
                    email:email,
                });
                localStorage.setItem('users',JSON.stringify(users));
                window.location.href = '/login';
            }
        }
    }


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

export default page;