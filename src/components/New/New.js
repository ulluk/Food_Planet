import React from 'react';
import style from "./New.module.css"
import plus from "./../../assets/plus.png"
import minus from "./../../assets/minus.png"
import arr from "./../../constants/products"



const New = () => {
    const elems = arr.map((item,index)=>{
        return(
            <div key={index} className={style.card}>
                <div className={style.bg}>
                    <img className={style.food} src={item.img} />
                    <h3>{item.name}</h3>
                    <div className={style.desc}>
                        {item.desc}
                    </div>
                    <div className={style.cost}>{item.cost}</div>
                    <div className={style.counter}>
                        <img src={minus}/>
                        <div>1</div>
                        <img src={plus}/>
                    </div>
                    <button>В корзину</button>
                </div>
            </div>
        )
    })
    return (
        <div className={style.New}>
            <div className={style.NavBar}>
                <div className={style.title}>Новинки</div>
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
            <div className={style.cards}>
                {elems}
            </div>
        </div>
    );
};

export default New;