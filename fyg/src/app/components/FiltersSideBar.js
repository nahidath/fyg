'use client';
import styles from '../css/filters.module.css';
import HorizontalDivider from "@/app/components/HorizontalDivider";
import {useState} from "react";

const FiltersSideBar = () => {
    const [sort, setSort] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);

    const handleSortChange = (e) => {
        setSort(e.target.value);
    }

    const handlePlatformChange = (e) => {
        //push the value to the array
          if (e.target.checked) {
                setPlatforms([...platforms, e.target.value]);
          } else {
                //remove the value from the array
                setPlatforms(platforms.filter((item) => item !== e.target.value));
          }
    }

    const handleGenreChange = (e) => {
        //push the value to the array
          if (e.target.checked) {
                setGenres([...genres, e.target.value]);
          } else {
                //remove the value from the array
                setGenres(genres.filter((item) => item !== e.target.value));
          }
    }


    return (
        <div className={styles.filters}>
            <div className={styles.filtersHeader}>
                <h2 className={styles.filtersHeaderTitle}>Filters</h2>
            </div>
            <HorizontalDivider marginTop={0}/>
            <div className={styles.filtersBody}>
                <div className={styles.filtersBodyBlock}>
                    <h3 className={styles.filtersBlockTitle}>Sort by</h3>
                    <div className={styles.filtersBlockContent}>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="release-date" name="release-date" value="release-date" />
                            <label htmlFor="release-date">Release date</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="popularity" name="popularity" value="popularity" />
                            <label htmlFor="popularity">Popularity</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="alphabetical" name="alphabetical" value="alphabetical" />
                            <label htmlFor="alphabetical">Alphabetical</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="relevance" name="relevance" value="relevance" />
                            <label htmlFor="relevance">Relevance</label>
                        </div>
                    </div>
                </div>
                <div className={styles.filtersBodyBlock}>
                    <h3 className={styles.filtersBlockTitle}>Platform</h3>
                    <div className={styles.filtersBlockContent}>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="pc" name="pc" value="pc" />
                            <label for="pc">PC</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="browser" name="browser" value="browser" />
                            <label for="browser">Browser</label>
                        </div>
                    </div>
                </div>
                <div className={styles.filtersBodyBlock}>
                    <h3 className={styles.filtersBlockTitle}>Genre</h3>
                    <div className={`${styles.filtersBlockContent} ${styles.spec}`}>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="action" name="action" value="action" />
                            <label for="action">Action</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="mmorpg" name="mmorpg" value="mmorpg" />
                            <label for="mmorpg">MMORPG</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="shooter" name="shooter" value="shooter" />
                            <label for="shooter">Shooter</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="strategy" name="strategy" value="strategy" />
                            <label for="strategy">Strategy</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="moba" name="moba" value="moba" />
                            <label for="moba">MOBA</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="racing" name="racing" value="racing" />
                            <label for="racing">Racing</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="sports" name="sports" value="sports" />
                            <label for="sports">Sports</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="social" name="social" value="social" />
                            <label for="social">Social</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="sandbox" name="sandbox" value="sandbox" />
                            <label for="sandbox">Sandbox</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="open-world" name="open-world" value="open-world" />
                            <label for="open-world">Open World</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="survival" name="survival" value="survival" />
                            <label for="survival">Survival</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="pvp" name="pvp" value="pvp" />
                            <label for="pvp">PvP</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="pve" name="pve" value="pve" />
                            <label for="pve">PvE</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="pixel" name="pixel" value="pixel" />
                            <label for="pixel">Pixel</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="voxel" name="voxel" value="voxel" />
                            <label for="voxel">Voxel</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="zombie" name="zombie" value="zombie" />
                            <label for="zombie">Zombie</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="turn-based" name="turn-based" value="turn-based" />
                            <label for="turn-based">Turn Based</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="first-person" name="first-person" value="first-person" />
                            <label for="first-person">First Person</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="third-Person" name="third-person" value="third-person" />
                            <label for="third-person">Third Person</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="top-down" name="top-down" value="top-down" />
                            <label for="top-down">Top Down</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="tank" name="tank" value="tank" />
                            <label for="tank">Tank</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="space" name="space" value="space" />
                            <label for="space">Space</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="sailing" name="sailing" value="sailing" />
                            <label for="sailing">Sailing</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="side-scroller" name="side-scroller" value="side-scroller" />
                            <label for="side-scroller">Side Scroller</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="superhero" name="superhero" value="superhero" />
                            <label for="superhero">Superhero</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="permadeath" name="permadeath" value="permadeath" />
                            <label for="permadeath">Permadeath</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="card" name="card" value="card" />
                            <label for="card">Card</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="battle-royale" name="battle-royale" value="battle-royale" />
                            <label for="battle-royale">Battle Royale</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="mmo" name="mmo" value="mmo" />
                            <label for="mmo">MMO</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="mmofps" name="mmofps" value="mmofps" />
                            <label for="mmofps">MMOFPS</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="mmotps" name="mmotps" value="mmotps" />
                            <label for="mmotps">MMOTPS</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="3d" name="3d" value="3d" />
                            <label for="3d">3D</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default FiltersSideBar;