import React from 'react';
import s from "./Reviews.module.css";
import img from "../../assets/Ellipse 12.png";
import icon_1 from "../../assets/ручка.png";
import icon_2 from "../../assets/ручка2.png";

const Reviews = () => {
    return (
        <div className={s.reviews}>
            <h2>Почему выбирают нас:</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <img className={s.icon} src={icon_2}/>
                    <img src={img}/>
                    <div className={s.name}>Сергей <img src={icon_1}/></div>
                    <div className={s.desc}>
                        Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему
                        коллективу понравилась! День Рождения прошел отлично! :)
                    </div>
                    <div className={s.date}>02.07.2020</div>
                </div>
                <div className={s.card}>
                    <img className={s.icon} src={icon_2}/>
                    <img src={img}/>
                    <div className={s.name}>Сергей <img src={icon_1}/></div>
                    <div className={s.desc}>
                        Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными
                        клиентами! Спасибо!
                    </div>
                    <div className={s.date}>02.07.2020</div>
                </div>
                <div className={s.card}>
                    <img className={s.icon} src={icon_2}/>
                    <img src={img}/>
                    <div className={s.name}>Сергей <img src={icon_1}/></div>
                    <div className={s.desc}>
                        Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена
                        тоже довольна!
                    </div>
                    <div className={s.date}>02.07.2020</div>
                </div>
                <div className={s.card}>
                    <img className={s.icon} src={icon_2}/>
                    <img src={img}/>
                    <div className={s.name}>Сергей <img src={icon_1}/></div>
                    <div className={s.desc}>
                        Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена
                        тоже довольна!
                    </div>
                    <div className={s.date}>02.07.2020</div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;