'use client';
import stylesH from "@/app/home.module.css";
import FiltersSideBar from "@/app/components/FiltersSideBar";
import stylesSP from "../css/searchpage.module.css";
import {useRouter, usePathname,useSearchParams} from "next/navigation";


const page = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    return (
        <div className={stylesH.container}>
            <div className={stylesH.desktop11}>
                <div className={stylesH.headerimg}>
                    <div className={stylesH.linearbelow}></div>
                    <img className={stylesH.icon1} alt="" src="1108069.png" />
                </div>
                <div className={stylesH.headerTxt}>
                    <div className={stylesH.discoverAndFind1}>
                        Results for {query}
                    </div>
                    <div className={stylesH.searchInput}>
                        <img className={stylesH.searchIcon1} alt="" src="Search.png" />
                        <input className={stylesH.bgChild2} />
                    </div>
                </div>
                <div className={stylesSP.below}>
                    <FiltersSideBar />
                    <div className={stylesSP.searchResults}>
                        {/* {searchResults.map((game, index) => (*/}
                        {/*//     <Card*/}
                        {/*//         id={game.id}*/}
                        {/*//         name={game.title}*/}
                        {/*//         image_url={game.thumbnail}*/}
                        {/*//         platforms={game.platform}*/}
                        {/*//         key={index}*/}
                        {/*//     />*/}
                        {/*// ))}*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;