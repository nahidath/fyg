import styles from "../css/loading.module.css";


const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loadingIcon}></div>
        </div>
    )
}

export default Loading;