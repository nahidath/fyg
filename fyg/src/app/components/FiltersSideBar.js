'use client';
import styles from '../css/filters.module.css';
import HorizontalDivider from "@/app/components/HorizontalDivider";
import {useEffect, useState} from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import genresList from "@/app/data/genresList";

const FiltersSideBar = ({searchQuery, setSearchResults, resultsFromSearchPage, setNoResults}) => {
    let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
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

    const getGamesByGenre = () => {
        let getData = [];
        axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/filter`, {
            params: {
                //genre separated by point
                tag:  genres.length === 1 ? genres[0] : genres.join('.') ,
               //add platform parameter if there is any
                platform: platforms.length === 1 ? platforms[0] : "all",
            },
            headers: {
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            }
        }).then((res) => {
            //store the results in getData array to be able to filter them with the resuls from search page
            getData = res.data;
            //if there is any results from search page
            if (resultsFromSearchPage.length > 0) {
                //filter the results from search page with the results from the filters
                setSearchResults(resultsFromSearchPage.filter((game) => getData.some((item) => item.id === game.id)));
            } else {
                setNoResults("No results found for the selected filters");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const getGamesBySortBy = () => {
        let getData = [];
        axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
            params: {
                'sort-by': sort,
                platform: platforms.length === 1 ? platforms[0] : "all",
            },
            headers: {
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            }
        }
        ).then((res) => {
            //store the results in getData array to be able to filter them with the resuls from search page
            getData = res.data;
            //if there is any results from search page
            if (resultsFromSearchPage.length > 0) {
                //filter the results from search page with the results from the filters
                setSearchResults(resultsFromSearchPage.filter((game) => getData.some((item) => item.id === game.id)));
            } else {
                setNoResults("No results found for the selected filters");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const getGamesByPlatform = () => {
        let getData = [];
        axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
            params: {
                platform: platforms.length === 1 ? platforms[0] : "all",
            },
            headers: {
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            }
        }
        ).then((res) => {
            //store the results in getData array to be able to filter them with the resuls from search page
            getData = res.data;
            //if there is any results from search page
            if (resultsFromSearchPage.length > 0) {
                //filter the results from search page with the results from the filters
                setSearchResults(resultsFromSearchPage.filter((game) => getData.some((item) => item.id === game.id)));
            } else {
                setNoResults("No results found for the selected filters");
            }
        }).catch((err) => {
            console.log(err);
        })
    }



    const handleApplyFilters = (e) => {
        e.preventDefault();
        getGamesByGenre();
    }

    const handleClearFilters = (e) => {
        e.preventDefault();
        //clear all the filters
        setSort("");
        setPlatforms([]);
        setGenres([]);
        //get the games that match like the query
        getGamesByPlatform();
    }



    useEffect(() => {
        getGamesByGenre();
    }, [genres]);

    useEffect(() => {
        getGamesBySortBy();
    }, [sort]);

    useEffect(() => {
        getGamesByPlatform();
    }, [platforms]);


    return (
        <div className={styles.filters}>
            <div className={styles.filtersHeader}>
                <h2 className={styles.filtersHeaderTitle}>Filters</h2>
                <div className={styles.filtersHeaderButtons}>
                    <button  onClick={handleClearFilters}>Clear</button>
                </div>
            </div>
            <HorizontalDivider marginTop={0}/>
            <div className={styles.filtersBody}>
                <div className={styles.filtersBodyBlock}>
                    <h3 className={styles.filtersBlockTitle}>Sort by</h3>
                    <div className={styles.filtersBlockContent}>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="release-date" name="release-date" value="release-date" onChange={handleSortChange} checked={sort==='release-date'} />
                            <label htmlFor="release-date">Release date</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="popularity" name="popularity" value="popularity" onChange={handleSortChange} checked={sort==='popularity'} />
                            <label htmlFor="popularity">Popularity</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="alphabetical" name="alphabetical" value="alphabetical" onChange={handleSortChange} checked={sort==='alphabetical'} />
                            <label htmlFor="alphabetical">Alphabetical</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="radio" id="relevance" name="relevance" value="relevance" onChange={handleSortChange} checked={sort==='relevance'} />
                            <label htmlFor="relevance">Relevance</label>
                        </div>
                    </div>
                </div>
                <div className={styles.filtersBodyBlock}>
                    <h3 className={styles.filtersBlockTitle}>Platform</h3>
                    <div className={styles.filtersBlockContent}>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="pc" name="pc" value="pc" onChange={handlePlatformChange} checked={platforms.includes('pc')} />
                            <label for="pc">PC</label>
                        </div>
                        <div className={styles.filtersBlockContentItem}>
                            <input type="checkbox" id="browser" name="browser" value="browser" onChange={handlePlatformChange} checked={platforms.includes("browser")}/>
                            <label for="browser">Browser</label>
                        </div>
                    </div>
                </div>
                <div className={styles.filtersBodyBlock}>
                    <h3 className={styles.filtersBlockTitle}>Genre</h3>
                    <div className={`${styles.filtersBlockContent} ${styles.spec}`}>
                        {genresList.map((genre, index) => (
                            <div className={styles.filtersBlockContentItem}>
                                <input type="checkbox" id={genre.tagName} name={genre.tagName} value={genre.tagName} onChange={handleGenreChange} checked={genres.includes(genre.tagName)}/>
                                <label htmlFor={genre.tagName}>{genre.name}</label>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )

}

export default FiltersSideBar;