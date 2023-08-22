import styles from "../css/loading.module.css";


const Loading = () => {
    return (
        <div className={styles.loading}>
            {/*<div className={styles.loadingIcon}></div>*/}
            <img src="loader.gif" alt="" className={styles.loadingIcon}/>
        </div>
    )
}

export default Loading;