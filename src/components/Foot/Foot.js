import React from 'react';
import s from "./Foot.module.css"
import logo from "./../../assets/LOgo-white.png"
import tel from "../../assets/phone-white 1.png";


const Foot = () => {
    return (
        <div className={s.footer}>
            <img src={logo} />
            <div className={s.navigation}>
                <ul>
                    <li> Главное</li>
                    <li> Меню</li>
                    <li> Доставка</li>
                    <li> Контакты</li>
                    <img src={tel}/>
                    <li>+996500405988</li>
                </ul>
            </div>
        </div>
    );
};

export default Foot;