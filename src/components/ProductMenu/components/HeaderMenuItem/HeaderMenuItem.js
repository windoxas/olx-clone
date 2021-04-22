import React from 'react'
import './headerProduct.css'


function HeaderMenuItem ({img, name, location, data, price,currency}) {
    return(

                    <div className="header_item">
                        <div className="item_img">
                            <img src={img} alt="Car"/>
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
                            <i style={{color: '#002e33'}} className="far fa-heart"/>
                        </div>
                    </div>

    )
}

export default HeaderMenuItem