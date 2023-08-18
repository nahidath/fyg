import styles from '../css/genre.module.css';



const Genre = ({id, name, image_url, tagName }) => {
    return (
        <div className={styles.genre} key={id} >
            <img className={styles.imgGenre} src={image_url} alt=""/>
            <div className={styles.genreName}>{name}</div>
        </div>
    )
}

export default Genre;