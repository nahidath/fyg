"use client";
import styles from "../css/filters.module.css";
import HorizontalDivider from "@/app/components/HorizontalDivider";
import { useEffect, useState } from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import genresList from "@/app/data/genresList";

const FiltersSideBar = ({
  searchQuery,
  setSearchResults,
  resultsFromSearchPage,
  setNoResults,
  refreshSearchResults,
}) => {
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const [sort, setSort] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
    getGamesBySortBy(sort);
  };

  const handlePlatformChange = (e) => {
    //push the value to the array
    if (e.target.checked) {
      setPlatforms([...platforms, e.target.value]);
    } else {
      //remove the value from the array
      setPlatforms(platforms.filter((item) => item !== e.target.value));
    }
    getGamesByPlatform(platforms);
  };

  const handleGenreChange = (e) => {
    //push the value to the array
    //let selectedG = [];
    const selectedG = e.target.value;
    let updatedGenres;
    // if (e.target.checked) {
    //   setGenres([...genres, e.target.value]);
    //   selectedG.push(e.target.value);
    // } else {
    //   //remove the value from the array
    //   setGenres(genres.filter((item) => item !== e.target.value));
    //   selectedG.filter((item) => item !== e.target.value);
    // }
    if (e.target.checked) {
        updatedGenres = [...genres, selectedG];
    } else {
        updatedGenres = genres.filter((genre) => genre !== selectedG);
    }

    setGenres(updatedGenres)

    // Call getGameByGenre if only one genre is selected
    if (updatedGenres.length >= 1) {
        console.log("genre selected")
      getGamesByGenre(updatedGenres);
    }

    // Call refreshSearchResults if all genres are unselected
    if (updatedGenres.length === 0) {
        console.log("genres unselected")
      refreshSearchResults();
    }

    // setGenres((prevState) => {
    //   if (e.target.checked) {
    //     return [...prevState, selectedG];
    //   } else {
    //     return prevState.filter((genre) => genre !== selectedG);
    //   }
    // });
    // setGenres((prevState) => {
    //     if (e.target.checked) {
    //         if (prevState.length === 1) {
    //             console.log("genre selected")
    //             getGamesByGenre(selectedG);
    //           }
    //       return [...prevState, selectedG];
    //     } else {
    //         if (prevState.length === 0) {
    //             console.log("genre unselected")
    //             refreshSearchResults();
    //           }
    //       return prevState.filter((genre) => genre !== selectedG);
    //     }
    //   })

    // // Call the function here to update the filtered games
    // if (genres.length === 0) {
    //   // If only one genre was unselected, fetch all games
    //   console.log("unselected genre");
    //   refreshSearchResults();
    // } else {
    //   // Fetch games based on the remaining selected genres
    //   console.log("games selected");
    //   getGamesByGenre(genres);
    // }
  };

  const getGamesByGenre = (genres) => {
    console.log("genres", genres);
    let getData = [];
    // if(genres.length > 0){
    console.log("inside if");
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/filter`, {
        params: {
          //genre separated by point
          tag: genres.length === 1 ? genres[0] : genres.join("."),
          //add platform parameter if there is any
          platform: platforms.length === 1 ? platforms[0] : "all",
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => {
        //store the results in getData array to be able to filter them with the resuls from search page
        getData = res.data;
        //if there is any results from search page
        if (resultsFromSearchPage.length > 0) {
          //filter the results from search page with the results from the filters
          setSearchResults(
            resultsFromSearchPage.filter((game) =>
              getData.some((item) => item.id === game.id)
            )
          );
        } else if (res.data.length === 0) {
          setNoResults("No results found for the selected filters");
        }
      })
      .catch((err) => {
        setSearchResults(resultsFromSearchPage);
        console.log("poic");
        console.log(err);
      });
    // }else{
    //     setSearchResults(resultsFromSearchPage);
    // }
  };

  const getGamesBySortBy = (sort) => {
    let getData = [];
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        params: {
          "sort-by": sort,
          platform: platforms.length === 1 ? platforms[0] : "all",
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then(
        (res) => {
          //store the results in getData array to be able to filter them with the resuls from search page
          getData = res.data;
          //if there is any results from search page
          if (resultsFromSearchPage.length > 0) {
            //filter the results from search page with the results from the filters
            setSearchResults(
              resultsFromSearchPage.filter((game) =>
                getData.some((item) => item.id === game.id)
              )
            );
          } else if (res.data.length === 0) {
            setNoResults("No results found for the selected filters");
          }
        },
        (error) => {
          setSearchResults(resultsFromSearchPage);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const getGamesByPlatform = (platforms) => {
    console.log(resultsFromSearchPage);
    // console.log(platforms)
    let getData = [];
    axios
      .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        params: {
          platform: platforms.length === 1 ? platforms[0] : "all",
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then(
        (res) => {
          //store the results in getData array to be able to filter them with the resuls from search page
          getData = res.data;
          //if there is any results from search page
          if (resultsFromSearchPage.length > 0) {
            //filter the results from search page with the results from the filters
            setSearchResults(
              resultsFromSearchPage.filter((game) =>
                getData.some((item) => item.id === game.id)
              )
            );
          } else if (res.data.length === 0) {
            setNoResults("No results found for the selected filters");
          }
        },
        (error) => {
          setSearchResults(resultsFromSearchPage);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    getGamesByGenre();
  };

  const handleClearFilters = (e) => {
    //e.preventDefault();
    //clear all the filters
    setSort("");
    setPlatforms([]);
    setGenres([]);
    //get the games that match like the query
    setSearchResults(resultsFromSearchPage);
  };

  // useEffect(() => {
  //     getGamesByGenre();
  // }, [genres]);

  // useEffect(() => {
  //     getGamesBySortBy();
  // }, [sort]);

  // useEffect(() => {
  //     getGamesByPlatform();
  // }, [platforms]);

  return (
    <div className={styles.filters}>
      <div className={styles.filtersHeader}>
        <h2 className={styles.filtersHeaderTitle}>Filters</h2>
        <div className={styles.filtersHeaderButtons}>
          <button onClick={handleClearFilters}>Clear</button>
        </div>
      </div>
      <HorizontalDivider marginTop={0} />
      <div className={styles.filtersBody}>
        <div className={styles.filtersBodyBlock}>
          <h3 className={styles.filtersBlockTitle}>Sort by</h3>
          <div className={styles.filtersBlockContent}>
            <div className={styles.filtersBlockContentItem}>
              <input
                type="radio"
                id="release-date"
                name="release-date"
                value="release-date"
                onChange={handleSortChange}
                checked={sort === "release-date"}
              />
              <label htmlFor="release-date">Release date</label>
            </div>
            <div className={styles.filtersBlockContentItem}>
              <input
                type="radio"
                id="popularity"
                name="popularity"
                value="popularity"
                onChange={handleSortChange}
                checked={sort === "popularity"}
              />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div className={styles.filtersBlockContentItem}>
              <input
                type="radio"
                id="alphabetical"
                name="alphabetical"
                value="alphabetical"
                onChange={handleSortChange}
                checked={sort === "alphabetical"}
              />
              <label htmlFor="alphabetical">Alphabetical</label>
            </div>
            <div className={styles.filtersBlockContentItem}>
              <input
                type="radio"
                id="relevance"
                name="relevance"
                value="relevance"
                onChange={handleSortChange}
                checked={sort === "relevance"}
              />
              <label htmlFor="relevance">Relevance</label>
            </div>
          </div>
        </div>
        <div className={styles.filtersBodyBlock}>
          <h3 className={styles.filtersBlockTitle}>Platform</h3>
          <div className={styles.filtersBlockContent}>
            <div className={styles.filtersBlockContentItem}>
              <input
                type="checkbox"
                id="pc"
                name="pc"
                value="pc"
                onChange={handlePlatformChange}
                checked={platforms.includes("pc")}
              />
              <label for="pc">PC</label>
            </div>
            <div className={styles.filtersBlockContentItem}>
              <input
                type="checkbox"
                id="browser"
                name="browser"
                value="browser"
                onChange={handlePlatformChange}
                checked={platforms.includes("browser")}
              />
              <label for="browser">Browser</label>
            </div>
          </div>
        </div>
        <div className={styles.filtersBodyBlock}>
          <h3 className={styles.filtersBlockTitle}>Genre</h3>
          <div className={`${styles.filtersBlockContent} ${styles.spec}`}>
            {genresList.map((genre, index) => (
              <div className={styles.filtersBlockContentItem}>
                <input
                  type="checkbox"
                  id={genre.tagName}
                  name={genre.tagName}
                  value={genre.tagName}
                  onChange={handleGenreChange}
                  checked={genres.includes(genre.tagName)}
                />
                <label htmlFor={genre.tagName}>{genre.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSideBar;
