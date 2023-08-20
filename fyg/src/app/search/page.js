'use client';
import stylesH from "@/app/home.module.css";
import FiltersSideBar from "@/app/components/FiltersSideBar";
import stylesSP from "../css/searchpage.module.css";
import {useRouter, usePathname,useSearchParams} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import Card from "@/app/components/Card";


const page = () => {
    let apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const [inputValue, setInputValue] = useState(query);
    const [searchResults, setSearchResults] = useState([]);

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const search = (e) => {
        e.preventDefault();
        //go to search page with the query
        router.push(pathname + '?' + createQueryString('q', inputValue));
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const getSearchResults = () => {
        axios
            .get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
                params: { "sort-by": "relevance" },
                headers: {
                    "X-RapidAPI-Key": apiKey,
                    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                },
            })
            .then((res) => {
                //get games that match like the query
                setSearchResults(res.data.filter((game) => game.title.toLowerCase().includes(query.toLowerCase())));
                //clear the input
                setInputValue('');

            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getSearchResults();
    }, [query]);


    return (
        <div className={stylesH.container}>
            <div className={stylesH.desktop11}>
                <div className={stylesH.headerimg}>
                    <div className={stylesH.linearbelow}></div>
                    <img className={stylesH.icon1} alt="" src="1108069.png" />
                </div>
                <div className={stylesH.headerTxt}>
                    <div className={stylesH.discoverAndFind1}>
                        Search for "{query}"
                    </div>
                    <div className={stylesH.searchInput}>
                        <form onSubmit={search}>
                            <img className={stylesH.searchIcon1} alt="" src="Search.png" />
                            <input value={inputValue} onChange={handleInputChange} className={stylesH.bgChild2} />
                        </form>
                    </div>
                </div>
                <div className={stylesSP.below}>
                    <FiltersSideBar />
                    <div className={stylesSP.searchResults}>
                        {searchResults.length > 0 ? searchResults.map((game, index) => (
                            <Card
                                id={game.id}
                                name={game.title}
                                image_url={game.thumbnail}
                                platforms={game.platform}
                                key={index}
                            />
                        )) : <div className={stylesSP.noResults}>No results found</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;