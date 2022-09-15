import React from 'react';
import s from "./PrductForm.module.css"
import burger_1 from "../../assets/Tofu-Burger-PNG-Image 2.png";


const ProductForm = () => {
    return (
        <div className={s.productform}>
            <h1>Оформление заказа</h1>
            <div>
                <div className={s.person}>
                    <div className={s.person_info}>
                        <h3>Ваши контактные данные</h3>
                        <div className={s.person_data}>
                            <input type="text" placeholder="Фамилия"/>
                            <input type="text" placeholder="Имя"/>
                            <input type="text" placeholder="Мобильный телефон"/>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <h3>Ваш заказ</h3>
                        <nav>
                            <ul>
                                <li>Продукт</li>
                                <li>Количество</li>
                                <li>Цена</li>
                                <li>К оплате</li>
                            </ul>
                        </nav>
                        <div className={s.product}>
                            <img src={burger_1} alt=""/>
                            <div className={s.name}>Чизбургер</div>
                            <div className={s.count}>1</div>
                            <div className={s.cost}>200 сом</div>
                            <div className={s.price}>200 сом</div>
                        </div>
                    </div>
                    <div className={s.buy_form}>
                        <p>Промокод</p>
                        <input className={s.input} type="text" placeholder="Введите сюда промокод"/>
                        <h2>Итого:</h2>
                        <div>
                            <p>1 товар на сумму:</p>
                            <p>$1120</p>
                        </div>
                        <div>
                            <p>К оплате:</p>
                            <p>94080 сом</p>
                        </div>
                        <button>Подвердить заказ</button>
                        <p>Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
                    </div>

                </div>
                <h3 className={s.address_title}>Адрес доставки</h3>
                <div className={s.address}>
                        <label className={s.input} htmlFor="1"><input type="radio" name="address" id="1" value="1"/>Самовызов</label>
                        <label className={s.input} htmlFor="2"><input type="radio" name="address" id="2" value="2"/>Курьерская доставка</label>
                    <select className={s.input}>
                        <option value="1" >Кыргызстан</option>
                        <option value="2" >Казахстан</option>
                        <option value="3" >Россия</option>
                    </select>
                    <input className={s.input} type="text" placeholder="Введите адресс доставки"/>
                </div>
                <h3>Способы оплаты</h3>
                <div className={s.how_buy}>
                        <label className={s.input} htmlFor="1.1"><input type="radio" name="delivery" id="1.1" value="1"/>Наличными</label>
                        <label className={s.input} htmlFor="2.1"><input type="radio" name="delivery" id="2.1" value="2"/>Банковский перевод</label>
                        <label className={s.input} htmlFor="3.1"><input type="radio" name="delivery" id="3.1" value="3"/>Оплата картой</label>
                        <label className={s.input} htmlFor="4.1"><input type="radio" name="delivery" id="4.1" value="4"/>Денежный перевод</label>
                        <label className={s.input} htmlFor="5.1"><input type="radio" name="delivery" id="5.1" value="5"/>Оплата курьеру на месте</label>
                </div>
                <div className={s.comments}>
                    <h3>Коментарий к заказу</h3>
                    <input type="textarea"/>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;