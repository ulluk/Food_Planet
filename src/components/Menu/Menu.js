import React from 'react';
import s from "./Menu.module.css"
import pizza_1 from "./../../assets/pizza/Tofu-Burger-PNG-Image 1.png"
import pizza_2 from "./../../assets/pizza/Tofu-Burger-PNG-Image 2.png"
import pizza_3 from "./../../assets/pizza/Tofu-Burger-PNG-Image 3.png"
import pizza_4 from "./../../assets/pizza/Tofu-Burger-PNG-Image 4.png"
import pizza_5 from "./../../assets/pizza/Tofu-Burger-PNG-Image 5.png"
import pizza_6 from "./../../assets/pizza/Tofu-Burger-PNG-Image 6.png"
import pizza_7 from "./../../assets/pizza/Tofu-Burger-PNG-Image 7.png"
import pizza_8 from "./../../assets/pizza/Tofu-Burger-PNG-Image 8.png"
import plus from "./../../assets/plus.png"
import minus from "./../../assets/minus.png"

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.NavBar}>
                <div className={s.title}>Меню</div>
                <nav>
                    <ul>
                        <li> Пицца</li>
                        <li> Бургер</li>
                        <li> Суши</li>
                        <li> Роллы</li>
                        <li> Салаты</li>
                        <li> Десерты</li>
                        <li> Напитки</li>
                    </ul>
                </nav>
            </div>
            <div className={s.sorting}>

                    <div>Сортировка по:</div>
                    <select name="search">
                        <option>По умолчанию</option>
                    </select>
            </div>
            <div className={s.cards}>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_1} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_2} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_3} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_4} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_5} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_6} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_7} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.bg}>
                        <img className={s.pizza} src={pizza_8} alt=""/>
                        <h3>Мексиканская</h3>
                        <div className={s.desc}>
                            Булка, котлета,сыр, соленый огурец, лук, помидор,
                            салат айсберг,
                            соус чесночный, соус гриль,
                            кетчуп, майонез
                        </div>
                        <div className={s.cost}>200 сом</div>
                        <div className={s.counter}>
                            <img src={minus}/>
                            <div>1</div>
                            <img src={plus}/>
                        </div>
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
            <div className={s.more}>
                <button >Показать еще</button>
            </div>
        </div>
    );
};

export default Menu;