// Шапка сайта
import '../../components/Header/header.scss';
import React from 'react';

import { NavLink } from 'react-router-dom';
// Используемы картинки
import logoImg from "../../asset/logo.png";
import phoneImg from "../../asset/headerImg/phone_call.svg";
import timeWork from "../../asset/headerImg/time_work.svg";
import locationPin from "../../asset/headerImg/location_pin.svg";
import menuBurger from "../../asset/menu_burger.svg"


function Header() {
    
    return (
      <header className='header'>
        <div className="heder__top">
            <div className="heder__top__logo"><img src={logoImg} alt="" /></div>
            <div className="heder__top__info">
                <div className="heder__top__info__item item__call">
                    <div className="item__call__img"><img src={phoneImg} alt="" /></div>
                    <div className="item__call__text">
                        <h2>Позвони нам</h2>
                        <a href="/#">8800553535</a>
                    </div>
                </div>
                <div className="heder__top__info__item item__call">
                    <div className="item__call__img"><img src={timeWork} alt="" /></div>
                    <div className="item__call__text">
                        <h2>Наши часы работы</h2>
                        <a href="/#">8:00-19:00</a>
                    </div>
                </div>
                <div className="heder__top__info__item item__call">
                    <div className="item__call__img"><img src={locationPin} alt="" /></div>
                    <div className="item__call__text">
                        <h2>Регион</h2>
                        <a href="/#">Ульяновская обл.</a>
                    </div>
                </div>
            </div>
        </div>
        <HeaderScroll/>
      </header>
    );
  };
  
  function HeaderScroll() {
    const [openMenuBurger, setOpenMenuBurger] = React.useState(true);

    return (
        <div className="header__bottom">
            {openMenuBurger &&<OpenNav/>}
            <button><a href="/#">Заказать звонок</a></button>
            <div onClick={()=>setOpenMenuBurger(!openMenuBurger)} className="header__bottom__burger"><img src={menuBurger} alt="burger" /></div>
        </div>
    )
  };

 function OpenNav(){
    return(
        <nav>
        <ul>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/amenities">Услуги</NavLink></li>
            <li><NavLink to="/compani">Компания</NavLink></li>
            <li><NavLink to="/contact">Контакты</NavLink></li>
            <li><NavLink to="/price">Цены</NavLink></li>
        </ul>
    </nav>
    )
 }
  export default Header;