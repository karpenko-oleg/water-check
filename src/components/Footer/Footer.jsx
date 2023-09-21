import "./footer.scss";

// Используемые картинки
import logoImg from "../../asset/logo.png";
import telegram from "../../asset/socialImg/telegram.svg";
import vkontakte from "../../asset/socialImg/vkontakte.svg";
import whatsapp from "../../asset/socialImg/whatsapp.svg";
import gmail from "../../asset/socialImg/gmail.svg";



function Footer() {
    return (
      <footer className="footer">
        <div className="footer__top">
            <div className="footer__top__logo"><img src={logoImg} alt="" /></div>
            <div className="footer__top__schedule"><h3>Время работы: 08:00 - 20:00 пн-вс</h3><h3>Без выходных и праздников</h3></div>
            <div className="footer__top__address">
                <a href="/#">Email@email.com</a>
                <a href="/#">8800553535</a>
                <a href="/#">433540, Ульяновская область, Ульяновск</a>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="footer__bottom__info">
                <h4>Центр Аква Техник</h4>
                <h5>2014 - 2023 © Все права защищены</h5>
                <h6>Cайт носит информационный характер и не является публичной офертой</h6>
            </div>
            <div className="footer__bottom__social">
                <a href="/#"><img src={telegram} alt="" /></a>
                <a href="/#"><img src={vkontakte} alt="" /></a>
                <a href="/#"><img src={whatsapp} alt="" /></a>
                <a href="/#"><img src={gmail} alt="" /></a>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;