import React from 'react';
import sty from "./ShoppingCart.module.css"
import burger_1 from "./../../assets/Tofu-Burger-PNG-Image 2.png"

const ShoppingCart = () => {
    return (
        <div className={sty.bucket}>
            <h1>Корзина</h1>
            <div className={sty.nav}>
                <nav>
                    <ul>
                        <li>Продукт</li>
                        <li>Количество</li>
                        <li>Комменарии</li>
                        <li>Цена</li>
                        <li>К оплате</li>
                    </ul>
                </nav>
                <div className={sty.product}>
                    <img src={burger_1} alt=""/>
                    <div className={sty.name}>Чизбургер</div>
                    <div className={sty.count}><input type="number"/></div>
                    <div className={sty.comment}><input type="text"/></div>
                    <div className={sty.cost}>200 сом</div>
                    <div className={sty.price}>200 сом</div>
                    <button><img src="http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911586cross.png" alt=""/></button>
                </div>
                <div className={sty.product}>
                    <img src={burger_1} alt=""/>
                    <div className={sty.name}>Чизбургер</div>
                    <div className={sty.count}><input type="number"/></div>
                    <div className={sty.comment}><input type="text"/></div>
                    <div className={sty.cost}>200 сом</div>
                    <div className={sty.price}>200 сом</div>
                    <button><img src="http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911586cross.png" alt=""/></button>
                </div>
                <div className={sty.footer}>
                    <div className={sty.total}>
                        <div>Итого:</div>
                        <div>200 сом</div>
                    </div>
                    <div className={sty.buttons}>
                        <button>Продолжить закупку</button>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;