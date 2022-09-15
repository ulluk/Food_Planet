import React from 'react';
import s from "./Information.module.css"
import icon_1 from "./../../assets/info/Group 25.png"
import icon_2 from "./../../assets/info/Group 26.png"
import icon_3 from "./../../assets/info/Group 27.png"
import icon_4 from "./../../assets/info/Group 29.png"

const Information = () => {
    return (
        <div className={s.information}>
            <h2>Почему выбирают нас:</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src={icon_1} alt=""/>
                    <h4>Мгновенная доставка</h4>
                    <div>
                        Доставим заказанную вами еду за 30 минут + напиток в подарок
                    </div>
                </div>
                <div className={s.card}>
                    <img src={icon_2} alt=""/>
                    <h4>Свежие продукты</h4>
                    <div>
                        Вся продукция хранится в хороших условиях тем самым продливая срок хранения
                    </div>
                </div>
                <div className={s.card}>
                    <img src={icon_3} alt=""/>
                    <h4>Уникальное меню</h4>
                    <div>
                        Ежедневно мы обновляем наше
                        меню и том числе коктейльное
                    </div>
                </div>
                <div className={s.card}>
                    <img src={icon_4} alt=""/>
                    <h4>Доставка</h4>
                    <div>
                        Мы быстро доставляем вашу еду по указанному адресу
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;