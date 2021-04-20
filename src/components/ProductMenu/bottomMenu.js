import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {
    ProductEight,
    ProductFive,
    ProductFour, ProductNine,
    ProductOne,
    ProductSeven,
    ProductSix, ProductTen,
    ProductThree,
    ProductTwo
} from './components/menuItemContent'

import Kolacek from './img/koleska.png'
import Keys  from './img/keys.png'
import Car from './img/Car.png'
import Envelop from './img/evelopemnt.com.png'
import Animal from './img/Dog.png'
import Future from './img/divan.png'
import Phone from './img/Notebook.png'
import Business from './img/Business.svg'
import Moda from './img/Moda.png'
import Sport from './img/football.svg'
import Zero from './img/Zero.svg'
import Exchange from './img/Obmen.png'



const BottomMenu = () => {

    const [showOne, setShowOne] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const [showThree, setShowThree] = useState(false)
    const [showFour, setShowFour] = useState(false)
    const [showFive, setShowFive] = useState(false)
    const [showSix, setShowSix] = useState(false)
    const [showSeven, setShowSeven] = useState(false)
    const [showEight, setShowEight] = useState(false)
    const [showNine, setShowNine] = useState(false)
    const [showTen, setShowTen] = useState(false)

    function ShowMenuOne(){
        showOne ? setShowOne(false) : setShowOne(true)
    }
    function ShowMenuTwo(){
        showTwo ? setShowTwo(false) : setShowTwo(true)
    }
    function ShowMenuThree(){
        showThree ? setShowThree(false) : setShowThree(true)
    }
    function ShowMenuFour(){
        showFour ? setShowFour(false) : setShowFour(true)
    }
    function ShowMenuFive(){
        showFive ? setShowFive(false) : setShowFive(true)
    }
    function ShowMenuSix(){
        showSix ? setShowSix(false) : setShowSix(true)
    }
    function ShowMenuSeven(){
        showSeven ? setShowSeven(false) : setShowSeven(true)
    }
    function ShowMenuEight(){
        showEight ? setShowEight(false) : setShowEight(true)
    }
    function ShowMenuNine(){
        showNine ? setShowNine(false) : setShowNine(true)
    }
    function ShowMenuTen(){
        showTen ? setShowTen(false) : setShowTen(true)
    }

    return (
        <div className={"wrapper"}>
            <div className="categories_menu">
                <div className={"row "}>
                    <div style={{backgroundColor:"#ffce32"}}  onClick={ShowMenuOne} className="menu_one">
                        <img src={Kolacek} alt={"Koleska"}/>
                    </div>
                    <h3  onClick={ShowMenuOne} className={"nameProduct"}>Детские мир</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#3a77ff"}}  onClick={ShowMenuTwo} className="menu_one">
                        <img src={Keys} alt={"keys"}/>
                    </div>
                    <h3  onClick={ShowMenuTwo} className={"nameProduct"}>Недвижимость</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#23e5db"}}  onClick={ShowMenuThree} className="menu_one">
                        <img src={Car} alt={"Car"}/>
                    </div>
                    <h3  onClick={ShowMenuThree} className={"nameProduct"}>Транспорт</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#ff5636"}}  onClick={ShowMenuFour} className="menu_one">
                        <img src={Envelop} alt={"Portifool"}/>
                    </div>
                    <h3  onClick={ShowMenuFour} className={"nameProduct"}>Работа</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#fff6d9"}}  onClick={ShowMenuFive} className="menu_one">
                        <img src={Animal} alt={"Dog"}/>
                    </div>
                    <h3  onClick={ShowMenuFive} className={"nameProduct"}>Животные</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#ceddff"}}  onClick={ShowMenuSix} className="menu_one">
                        <img src={Future} alt={"Mabel"}/>
                    </div>
                    <h3  onClick={ShowMenuSix} className={"nameProduct"}>Дом и сад</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#c8f8f6"}}  onClick={ShowMenuSeven} className="menu_one">
                        <img src={Phone} alt={"Phone"}/>
                    </div>
                    <h3  onClick={ShowMenuSeven} className={"nameProduct"}> Электроника</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#ffd6c9"}}  onClick={ShowMenuEight} className="menu_one">
                        <img style={{width:"100px"}} src={Business} alt={"Business"}/>
                    </div>
                    <h3  onClick={ShowMenuEight} className={"nameProduct"}>Бизнес и услуги</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#ffce32"}}  onClick={ShowMenuNine} className="menu_one">
                        <img style={{width:"40px"}} src={Moda} alt={"Moda"}/>
                    </div>
                    <h3  onClick={ShowMenuNine} className={"nameProduct"}>Мода и стиль</h3>
                </div>
                <div className={"row "}>
                    <div style={{backgroundColor:"#ceddff"}}  onClick={ShowMenuTen} className="menu_one">
                        <img src={Sport} alt={"Sport"}/>
                    </div>
                    <h3  onClick={ShowMenuTen} className={"nameProduct"}>Хобби, отдых</h3>
                </div>
                <div className={"row "}>
                    <NavLink to={"/free-product"} >
                        <div style={{backgroundColor:"#c8f8f6"}}  className="menu_one">
                            <img src={Zero} alt={"Zero"}/>
                        </div>
                            <h3   className={"nameProduct"}>Отдам даром</h3>
                    </NavLink>
                </div>
                <div className={"row "}>
                        <NavLink to={"exchange"}>
                        <div style={{backgroundColor:"#1cddd5"}}   className="menu_one">
                            <img src={Exchange} alt={"Exchange"}/>
                        </div>
                        <h3   className={"nameProduct"}>Обмен</h3>
                    </NavLink>
                </div>

            </div>

            <div className="click_menu">
                {showOne  && (
                    <ProductOne/>
                )}
                {showTwo && (
                    <ProductTwo/>
                )}
                {showThree && (
                    <ProductThree/>
                )}
                {showFour && (
                    <ProductFour/>
                )}
                {showFive&& (
                    <ProductFive/>
                )}
                {showSix && (
                    <ProductSix/>
                )}
                {showSeven && (
                    <ProductSeven/>
                )}
                {showEight && (
                    <ProductEight/>
                )}
                {showNine && (
                    <ProductNine/>
                )}
                {showTen && (
                    <ProductTen/>
                )}
            </div>

        </div>
    )
}

export default BottomMenu





