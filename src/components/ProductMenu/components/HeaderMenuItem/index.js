import React, {useState, useEffect} from 'react'
import HeaderMenuItem from "./HeaderMenuItem";

const style = {
    "display": "flex",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
}




const HeaderMenu = () => {
    const [headerMenu, setHeaderMenu] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/HeaderMenu")
            .then(response => response.json())
            .then(data => setHeaderMenu(data))
    }, [setHeaderMenu])

    return(
        <div>
            <h1 style={{textAlign: "center"}} className={"header_text"} >Премиум объявления</h1>
        <div style={style} className={"container"}>

            {headerMenu.map(headerItem => (
                <HeaderMenuItem
                    key={headerItem.id}
                    img={headerItem.img}
                    name={headerItem.name}
                    location={headerItem.location}
                    data={headerItem.data}
                    price={headerItem.price}
                    currency={headerItem.currency}
                />
            ))}

        </div>
        </div>
    )
}

export default HeaderMenu
