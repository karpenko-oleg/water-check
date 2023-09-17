import "./footer.scss";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__top">
            <div className="footer__top__logo"><img src="./img/logo.png" alt="" /></div>
            <div className="footer__top__schedule"><h3>Время работы: 08:00 - 20:00 пн-вс</h3><h3>Без выходных и праздников</h3></div>
            <div className="footer__top__address">
                <a href="">Email@email.com</a>
                <a href="">8800553535</a>
                <a href="">433540, Ульяновская область, Ульяновск</a>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="footer__bottom__info">
                <h4>Центр Аква Техник</h4>
                <h5>2014 - 2023 © Все права защищены</h5>
                <h6>Cайт носит информационный характер и не является публичной офертой</h6>
            </div>
            <div className="footer__bottom__social">
                <a href=""><img src="./img/social/telegram.svg" alt="" /></a>
                <a href=""><img src="./img/social/vkontakte.svg" alt="" /></a>
                <a href=""><img src="./img/social/whatsapp.svg" alt="" /></a>
                <a href=""><img src="./img/social/gmail.svg" alt="" /></a>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;