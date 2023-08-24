"use client";
import styles from "../css/filters.module.css";
import HorizontalDivider from "@/app/components/HorizontalDivider";
import { useEffect, useState } from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import genresList from "@/app/data/genresList";
import { useSearchParams } from "next/navigation";

const FiltersSideBar = ({
  setSearchResults,
  setNoResults,
  refreshSearchResults,
  setLoading,
    sortSearchResults
}) => {
  let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const genreQuery = searchParams.get("genre");
  const sortQuery = searchParams.get("sort");
  const [genres, setGenres] = genreQuery
    ? useState([genreQuery])
    : useState([]);
  const [sort, setSort] = sortQuery
    ? useState(sortQuery)
    : useState("relevance");
  const [platforms, setPlatforms] = useState([]);
  console.log("sort",sort)
  console.log("sortQuery",sortQuery)
  console.log("sortSearchResults",sortSearchResults)

  useEffect(() => {
    setGenres([]);
  }, [genreQuery == null]);
  useEffect(() => {
    if(sortQuery===null) setSort("relevance")
  }, [sortQuery]);


  const handleSortChange = (e) => {
    console.log("handleSortChange")
    const selectedS = e.target.value;
    let updatedSort;
    if (e.target.checked) {
      updatedSort = selectedS;
    } else {
      updatedSort = "";
    }
    setSort(updatedSort);

    // Call getGamesBySortBy if only one sort is selected
    if (updatedSort !== "") {
      console.log("gamesBySortBy called with " + updatedSort)
      getGamesBySortBy(updatedSort);
    } else {
      refreshSearchResults();
    }
    // getGamesBySortBy(sort);
  };

  const handlePlatformChange = (e) => {
    const selectedP = e.target.value;
    let updatedPlatforms;
    //push the value to the array
    if (e.target.checked) {
      updatedPlatforms = [...platforms, selectedP];
    } else {
      //remove the value from the array
      updatedPlatforms = platforms.filter((item) => item !== selectedP);
    }

    setPlatforms(updatedPlatforms);

    // Call getGamesByPlatform if only one platform is selected
    if (updatedPlatforms.length >= 1) {
      getGamesByPlatform(updatedPlatforms);
    }

    // Call getGamesByPlatform if one platform is unselected
    if (updatedPlatforms.length <= 1) {
      getGamesByPlatform(updatedPlatforms);
    }

    // Call refreshSearchResults if all platforms are unselected
    if (updatedPlatforms.length === 0) {
      refreshSearchResults();
    }
  };

  const handleGenreChange = (e) => {
    //push the value to the array
    const selectedG = e.target.value;
    let updatedGenres;
    if (e.target.checked) {
      updatedGenres = [...genres, selectedG];
    } else {
      updatedGenres = genres.filter((genre) => genre !== selectedG);
    }
    setGenres(updatedGenres);

    // Call getGameByGenre if only one genre is selected
    if (updatedGenres.length >= 1) {
      getGamesByGenre(updatedGenres);
    }

    // Call getGameByGenre if one genre is unselected
    if (updatedGenres.length <= 1) {
      console.log("<=1");
      console.log(updatedGenres);
      getGamesByGenre(updatedGenres);
    }

    // Call refreshSearchResults if all genres are unselected
    if (updatedGenres.length === 0) {
      console.log("==0");
      refreshSearchResults();
    }
  };

  const getGamesByGenre = (genres) => {
    let getData = [];
    let resultsBefore = [];
    if (genres.length > 0) {
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
          //store the results in getData array to be able to filter them with the results from search page
          getData = res.data;

          //match getData with sortSearchResults
          resultsBefore = sortQuery !=null ? getData.filter((game) => sortSearchResults.includes(game.id))
          : getData.filter((game) =>
            game.title.toLowerCase().includes(query.toLowerCase())
          );

          //if there is no results from filters
          if (resultsBefore.length === 0) {
            setLoading(false);
            setNoResults("No results found for the selected filters");
          } else {
            setLoading(false);
            setSearchResults(resultsBefore);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      refreshSearchResults();
      setLoading(false);
    }
  };

  const getGamesBySortBy = (sort) => {
    console.log("getGamesBySortBy inside called with " + sort)
    let getData = [];
    let resultsBefore = [];
    if (sort !== "") {
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
        .then((res) => {
          //store the results in getData array to be able to filter them with the resuls from search page
          getData = res.data;
          //filter the results from filters that include the query and match the sort or match the genreQuery
          resultsBefore = query != null
            ? getData.filter((game) =>
                game.title.toLowerCase().includes(query.toLowerCase())
              )
              : getData.filter(
                (game) => game.genre.toLowerCase() === genreQuery.toLowerCase()
              );

          //if there is no results from filters
          if (resultsBefore.length === 0) {
            setLoading(false);
            setNoResults("No results found for the selected filters");
          } else {
            setLoading(false);
            setSearchResults(resultsBefore);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      refreshSearchResults();
      setLoading(false);
    }
  };

  const getGamesByPlatform = (platforms) => {
    console.log("getGamesByPlatform inside called with " + platforms)
    let resultsBefore = [];
    let getData = [];
    if (platforms.length > 0) {
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
        .then((res) => {
          //store the results in getData array to be able to filter them with the resuls from search page
          getData = res.data;
          //filter the results from filters that include the query and match the platforms
          resultsBefore = query
            ? getData.filter((game) =>
                game.title.toLowerCase().includes(query.toLowerCase())
              )
            : sortQuery ? getData.map((game) => sortSearchResults.find((id) => id === game.id)) :
                  getData.filter(
                (game) => game.genre.toLowerCase() === genreQuery.toLowerCase()
              );

          console.log("resultsBefore",resultsBefore)

          //if there is no results from filters
          if (resultsBefore.length === 0) {
            setLoading(false);
            setNoResults("No results found for the selected filters");
          } else {
            setLoading(false);
            setSearchResults(resultsBefore);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      refreshSearchResults();
      setLoading(false);
    }
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
    refreshSearchResults();
    setLoading(false);
  };

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
              <label htmlFor="pc">PC</label>
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
              <label htmlFor="browser">Browser</label>
            </div>
          </div>
        </div>
        {!genreQuery && (
          <div className={styles.filtersBodyBlock}>
            <h3 className={styles.filtersBlockTitle}>Genre</h3>
            <div className={`${styles.filtersBlockContent} ${styles.spec}`}>
              {genresList.map((genre, index) => (
                <div className={styles.filtersBlockContentItem} key={index}>
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
        )}
      </div>
    </div>
  );
};

export default FiltersSideBar;
