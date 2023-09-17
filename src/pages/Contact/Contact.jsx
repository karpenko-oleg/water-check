

import "./contact.scss";

function Contact() {
    return (
      <>
        <main>
            <h2 className="body__title">Контакты</h2>
            <div className="contact__information"><img src="./img/header/location_pin.svg" alt="" /><span>Адрес: 432027, Россия, Ульяновск, ул.У.Громовой,6</span></div>
            <div className="contact__information"><img src="./img/header/phone_call.svg" alt="" /><a href="">+7 (8422) 99-27-72</a><a href="">+7 (8422) 93-33-09</a></div>
            <div className="contact__information"><img src="./img/header/time_work.svg" alt="" /><span>Часы работы: с 8:00 до 20:00 (Понедельник-Суббота), воскресенье выходной</span></div>
            <div className="contact__social">
                <a href=""><img src="./img/social/telegram.svg" alt="" /></a>
                <a href=""><img src="./img/social/vkontakte.svg" alt="" /></a>
                <a href=""><img src="./img/social/whatsapp.svg" alt="" /></a>
                <a href=""><img src="./img/social/gmail.svg" alt="" /></a>
            </div>
        </main>
      </>
    );
  }

export default Contact;