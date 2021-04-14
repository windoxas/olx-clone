import React, {useState} from 'react'


import Kolacek from './img/koleska.png'
import Keys  from './img/keys.png'
import ShowMenuItem from "./components/MenuItem";


const BottomMenu = () => {

    const [menu, setMenu] = useState(false)
    const [show, setShow] = useState(false)

    function onShowMenu(){
        menu ? setMenu(false) : setMenu(true)
    }
    function ShowMenu(){
        show ? setShow(false) : setShow(true)
    }

    return (
        <div className={"wrapper"}>
            <div className="categories_menu">
                <div className={"row "}>
                    <div style={{backgroundColor:"#ffce32"}}  onClick={onShowMenu} className="menu_one">
                        <img src={Kolacek} alt={"Koleska"}/>

                    </div>
                    <h3  onClick={onShowMenu} className={"nameProduct"}>Детские мир</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#3a77ff"}}  onClick={ShowMenu} className="menu_one">
                        <img src={Keys} alt={"keys"}/>

                    </div>
                    <h3  onClick={ShowMenu} className={"nameProduct"}>Недвижимость</h3>

                    <showMenuItem/>
                </div>
            </div>

            <div className="click_menu">
                {menu  && (
                    <ShowMenuItem
                        categoriesName={"Детский мир"}
                        name_1={"Детская одежда"}
                        name_2={"Детская обувь"}
                        name_3={"Детские коляски"}
                        name_13={"Детские автокресло"}
                        name_5={"Детская мебель"}
                        name_6={"Игрушки"}
                        name_7={"Детский транспорт"}
                        name_8={"Кормление"}
                        name_9={"Товары для школьников"}
                        name_10={"Прочие детские товары"}

                    />
                )}
                {show && (
                    <ShowMenuItem
                        categoriesName={"Детский мир"}
                        name_1={"Детская одежда"}
                        name_2={"Детская обувь"}
                        name_3={"Детские коляски"}
                        name_13={"Детские автокресло"}
                        name_5={"Детская мебель"}
                        name_6={"Игрушки"}
                        name_7={"Детский транспорт"}
                        name_8={"Кормление"}
                        name_9={"Товары для школьников"}
                        name_11={"Прочие детские товары"}
                        name_14={"Прочие детские товары"}
                        name_16={"Прочие детские товары"}
                        name_20={"Прочие детские товары"}

                    />
                )}
            </div>

        </div>
    )
}

export default BottomMenu


