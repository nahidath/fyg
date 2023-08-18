import stylesH from "@/app/home.module.css";


const page = ({query}) => {
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
                <div className={stylesH.below}>
                    <div className={stylesH.filterSide}>
                        <div className={stylesH.filterTxt}>Filter</div>
                        <div className={stylesH.filterTxt}>Genre</div>
                        <div className={stylesH.filterTxt}>Platform</div>
                        <div className={stylesH.filterTxt}>Release Date</div>
                        <div className={stylesH.filterTxt}>Rating</div>
                    </div>
                    <div className={styles.searchResults}>
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