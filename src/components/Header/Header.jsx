// Шапка сайта
import '../../components/Header/header.scss';

import { NavLink } from 'react-router-dom';



function Header() {
    return (
      <header className='header'>
        <div className="heder__top">
            <div className="heder__top__logo"><img src="./img/logo.png" alt="" /></div>
            <div className="heder__top__info">
                <div className="heder__top__info__item item__call">
                    <div className="item__call__img"><img src="./img/header/phone_call.svg" alt="" /></div>
                    <div className="item__call__text">
                        <h2>Позвони нам</h2>
                        <a href="tel:">8800553535</a>
                    </div>
                </div>
                <div className="heder__top__info__item item__call">
                    <div className="item__call__img"><img src="./img/header/time_work.svg" alt="" /></div>
                    <div className="item__call__text">
                        <h2>Наши часы работы</h2>
                        <a href="tel:">8:00-19:00</a>
                    </div>
                </div>
                <div className="heder__top__info__item item__call">
                    <div className="item__call__img"><img src="./img/header/location_pin.svg" alt="" /></div>
                    <div className="item__call__text">
                        <h2>Регион</h2>
                        <a href="tel:">Ульяновская обл.</a>
                    </div>
                </div>
            </div>
        </div>
        <HeaderScroll/>
      </header>
    );
  };
  
  function HeaderScroll() {
    return (
        <div className="header__bottom">
            <nav>
                <ul>
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/amenities">Услуги</NavLink></li>
                    <li><NavLink to="/compani">Компания</NavLink></li>
                    <li><NavLink to="/contact">Контакты</NavLink></li>
                    <li><NavLink to="/price">Цены</NavLink></li>
                </ul>
            </nav>
            <button><a href="tel:">Заказать звонок</a></button>
        </div>
    )
  };


  export default Header;