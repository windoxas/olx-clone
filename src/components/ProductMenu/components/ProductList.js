import React, {useState, useContext} from 'react'
import {Context} from "../../context";
import './productList.css'

const ProductList = ({img, name, location, data}) => {

    const value = useContext(Context)

    const [favorite, setFavorite] = useState(false)
    const [view, setView] = useState('')

    function FavoriteProduct() {
        favorite ? setFavorite(false) : setFavorite(true)
        favorite ? value.countDown() : value.countUp()
    }

    function viewText() {
        favorite ? setView('удалить из избранных ') : setView("в избранные")
    }


    return (
        <div className={"container"}>
            <div className={"product-list"}>
                <div className="product_img">
                    <img src={img} alt=""/>
                </div>

                <div className="wrapper_info_product">
                    <div className="header_name_product">
                        <p>{name}</p>
                        <h3>Отдам даром</h3>
                    </div>
                    <div className="location_favorite_block">
                        <p style={{color: "#a8b4ae"}}>{location} - <span>{data}</span></p>
                        <div className={"product_list_text"}>
                            <span className={"favorite_text"}>{view}</span>
                            <span onMouseOver={viewText} onMouseOut={() => setView("")} onClick={FavoriteProduct}
                                  className={"product_favorite_icon"}>

                                {favorite ? <i style={{color: '#002e33'}} className="fas fa-heart"/> :
                                    <i style={{color: '#002e33'}} className="far fa-heart"/>}

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductList