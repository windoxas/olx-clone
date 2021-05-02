import React,{useState, useContext} from 'react'
import './headerProduct.css'
import {Context} from "../../../context";


function HeaderMenuItem ({img, name, location, data, price,currency}) {
    const value = useContext(Context)
    const [headerFavor, setHeaderFavor] = useState(false)
    const [favoriteItem ,setFavoriteItem] = useState('')
    const [style, setStyle] = useState({})
    function onShowItemFav(){
        headerFavor ? setHeaderFavor(false) : setHeaderFavor(true)
        headerFavor ? setFavoriteItem('в избранные ') : setFavoriteItem("удалить из избранных ")
        headerFavor ? value.countDown() : value.countUp()
    }
    function hoverFavoriteText (){
        headerFavor ? setStyle({width: '180px', padding:"10px"}): setStyle({width: '180px', padding:"10px"})
        headerFavor ? setFavoriteItem('удалить из избранных ') : setFavoriteItem("в избранные")

    }
    function outMouseFavText () {
        setFavoriteItem("")
       setStyle({width: "0", padding:'0'})
    }
    return(

                    <div className="header_item">
                        <div className="item_img">
                            <img src={img} alt={name}/>
                        </div>
                        <div className="item_text">
                            <p>{name}</p>
                        </div>
                        <div className="item_location">
                            <p>{location}</p>
                            <p>{data}</p>
                        </div>
                        <div className="price_favorite">
                            <p> {price}<span>{currency}</span></p>
                            <span onClick={onShowItemFav}  onMouseOver={hoverFavoriteText}
                                  onMouseOut={outMouseFavText} >
                                <span  style={style}  className={'showText'}>{favoriteItem}</span>
                                {headerFavor ? <i style={{color: '#002e33'}} className="fas fa-heart"/>:
                                <i style={{color: '#002e33'}} className="far fa-heart"/> }
                            </span>
                        </div>
                    </div>

    )
}

export default HeaderMenuItem