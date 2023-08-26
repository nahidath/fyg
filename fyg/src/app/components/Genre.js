import styles from '../css/genre.module.css';
import {usePathname, useRouter} from "next/navigation";



const Genre = ({id, name, image_url, tagName }) => {
    const router = useRouter();

    //function to go to the search page with the genre as the query
    const goToGenre = () => {
        router.push('/search?genre=' + tagName);
    }

    return (
        <div className={styles.genre} key={id} onClick={goToGenre} >
            <img className={styles.imgGenre} src={image_url} alt={tagName}/>
            <div className={styles.genreName}>{name}</div>
        </div>
    )
}

export default Genre;