import React,{useState} from 'react';
import './searchpanel.css'

const Search = () => {
    const [showList, setShowList] = useState(false)


    const showListMenu = () => {
        showList ? setShowList(false) : setShowList(true)

    }

    return(
        <div className={"container"}>
            <div className="search-panel ">
                <div className="search-input">
                    <input className={"search-submit"} type="submit" value={" "} />
                    <input className={"search-block"} type="text" placeholder={"15040 объявлений рядом "}/>

                </div>
                <div className="select-city">
                    <input onClick={showListMenu} className={"select-city-btn"} type="submit" value={"Весь Узбекистан"}/>
                </div>

                <div className="search-btn-block">
                    <input className={"search-btn"} type="submit" value={"Поиск"}/>

                </div>

                { showList && (
                    <div className="city-list">
                        <h3>Весь Узбекистан</h3>
                        <hr/>
                            <ul>
                                <div>
                                    <li>Андижанская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Бухарская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li> Джизакская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Каракалпакстан <span><i class="fas fa-chevron-right"></i></span></li>
                                </div>
                                <div>
                                    <li>Кашкадарьинская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Навоийская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Наманганская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Самаркандская область <span><i class="fas fa-chevron-right"></i></span></li>
                                </div>
                               <div>
                                    <li>Сурхандарьинская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Сырдарьинская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Ташкентская область <span><i class="fas fa-chevron-right"></i></span></li>
                                    <li>Ферганская область <span><i class="fas fa-chevron-right"></i></span></li>
                               </div>
                                <div>
                                       <li>Хорезмская область <span><i className="fas fa-chevron-right"></i></span></li>
                                </div>

                            </ul>
                </div>
                )}
            </div>
        </div>
    )
}

export default Search










