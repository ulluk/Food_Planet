import React from 'react';
import arr from "./../../constants/admin_panel"
import s from "./AdminPanel.module.css"
import logo from "./../../assets/admin/logo_admin.png"
import logo2 from "./../../assets/admin/FOOD PLANET.png"
import icon1 from "./../../assets/admin/1. overview.png"
import icon2 from "./../../assets/admin/2. tickets.png"
import icon3 from "./../../assets/admin/3. ideas.png"
import icon4 from "./../../assets/admin/4. contacts.png"
import icon5 from "./../../assets/admin/5. agents.png"
import icon6 from "./../../assets/admin/6. articles.png"
import icon7 from "./../../assets/admin/search.png"
import icon8 from "./../../assets/admin/bell.png"
import photo from "./../../assets/admin/photo.png"


const AdminPanel = () => {
    const active = (e) => {
        e.target.classList.toggle(s.card_active)
    }
    const panels = arr.map((item, index) => {
        return (
            <div onClick={active} key={index} className={s.card}>
                <div>{item.name}</div>
                <div>{item.count}</div>
            </div>
        )
    })
    return (
        <div className={s.main}>
            <div className={s.nav_bar}>
                <div className={s.logo}>
                    <img src={logo}/>
                    <img src={logo2}/>
                </div>
                <div className={s.buttons}>
                    <button><img src={icon1}/>Главная</button>
                    <button><img src={icon2}/>Заказы</button>
                    <button><img src={icon3}/>Меню</button>
                    <button><img src={icon4}/>Контакты</button>
                    <button><img src={icon5}/>Отзывы</button>
                    <button><img src={icon6}/>Сотрудники</button>
                </div>
            </div>
            <div className={s.panel}>
                <div className={s.header}>
                    <div>
                        <h4>Главная</h4>
                        <div>
                            <button><img src={icon7}/></button>
                            <button><img src={icon8}/></button>
                        </div>
                    </div>
                    <div className={s.account}>
                        <div>
                            <span>Jones Ferdinand</span>
                            <img src={photo}/>
                        </div>
                    </div>
                </div>
                <div className={s.bar}>
                    {panels}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;