import React from 'react'
import './productMenu.css'

import BottomMenu from "./bottomMenu";


const ProductMenu = () => {



    return(
        <div className={"background-product"}>
            <div className={"container"}>

                <div className="product-menu">
                    <h1>Главные категории</h1>
                        <div className="menu_list">
                            <BottomMenu/>
                        </div>
                </div>

            </div>
        </div>
    )
}












export default ProductMenu















