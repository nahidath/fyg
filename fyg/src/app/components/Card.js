import styles from '../css/card.module.css';


const Card = ({ name, id, image_url, platforms }) => {
    return (
        <div className={styles.card} key={id}>
            <div className={styles.cardImage}>
                <img className={styles.img} src={image_url} alt="" />
            </div>
            <div className={styles.cardContent}>
                {/*<div className={styles.platform}>{*/}
                {/*    platforms.map((platform) => (*/}
                {/*        p.map((p1) => (*/}
                {/*            p1.name ===*/}
                {/*    ))*/}
                {/*}</div>*/}
                <div className={styles.cardTitle}>{name}</div>
            </div>
        </div>
    );
}

export default Card;