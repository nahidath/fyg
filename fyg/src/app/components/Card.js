import styles from '../css/card.module.css';
import PlatformIcon from "@/app/components/PlatformIcon";


const Card = ({ name, id, image_url, platforms }) => {
    return (
        <div className={styles.card} key={id}>
            <div className={styles.cardImage} style={{backgroundImage:'url('+image_url+')'}}>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.platform}>
                    {platforms.map((platform) => (
                        <PlatformIcon platform={platform.platform.name} size={20} style={{marginRight: 4}} />
                    ))}

                </div>
                <div className={styles.cardTitle}>{name}</div>
            </div>
        </div>
    );
}

export default Card;