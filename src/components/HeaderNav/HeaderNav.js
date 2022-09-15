import React from 'react';
import tel from "./../../assets/phone 1.png"
import buy from "./../../assets/buy (1) 1.png"
import log from "../../assets/LOgo-black.png"
import s from "./HeaderNav.module.css"

const HeaderNav = () => {
    return (
        <div className={s.Nav}>
             <img  src={log}/>
         <div className={s.navigation}>
             <ul>
                 <li> Главное</li>
                 <li> Меню</li>
                 <li> Доставка</li>
                 <li> Контакты</li>
                 <img src={tel}/>
                 <li>+996500405988</li>
                 <img src={buy}/>
                 <li> 1</li>
             </ul>
         </div>
        </div>
    );
};

export default HeaderNav;