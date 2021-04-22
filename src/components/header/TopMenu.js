import React, {useContext} from 'react'
import './topMenu.css'
import  {Context} from "../context";


const TopMenu = () => {
    const {counter} = useContext(Context)
    return(
        <div className={"top-menu"}>
            <div className="container">
                <div className="logo">
                    <span className={"alph-o"}>O</span>
                    <span className={"alph-l"}>l</span>
                    <span className={"alph-x"}>x</span>
                </div>
                <div className="block-right">
                    <div className="lang-olx">
                        <span className={"lang-uz"}>O'Z</span>
                        <div>
                        </div>
                        <span className={"lang-ru"}>РУ</span>
                    </div>
                    <div className="favorite">
                        <i className="far fa-heart"/>
                        <p>{counter}</p>
                    </div>
                    <div className="profile">
                        <i className="far fa-user"/>
                        <p> Мой профиль</p>
                    </div>
                    <div className="btn-olx-top">
                        <button className="btn">Подать объявление</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TopMenu