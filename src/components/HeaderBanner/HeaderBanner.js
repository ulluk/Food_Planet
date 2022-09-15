import React from 'react';
import burger from "./../../assets/бургер.png"
import s from "./HeaderBanner.module.css"

const HeaderBanner = () => {
    return (
        <div className={s.banner}>
            <div className={s.desc}>
                <h1 className={s.title}>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                <div className={s.title_desc}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</div>
                <button>Перейти в меню</button>
            </div>
            <img src={burger} alt="Бургер"/>
        </div>
    );
};

export default HeaderBanner;