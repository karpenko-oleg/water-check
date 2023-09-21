

import "./contact.scss";

// Используемые картинки
import phoneImg from "../../asset/headerImg/phone_call.svg";
import timeWork from "../../asset/headerImg/time_work.svg";
import locationPin from "../../asset/headerImg/location_pin.svg";

import telegram from "../../asset/socialImg/telegram.svg";
import vkontakte from "../../asset/socialImg/vkontakte.svg";
import whatsapp from "../../asset/socialImg/whatsapp.svg";
import gmail from "../../asset/socialImg/gmail.svg";
import Application from "../../components/Application/Application";

function Contact() {
    return (
      <>
        <main>
            <h2 className="body__title">Контакты</h2>
            <div className="contact__information"><img src={phoneImg} alt="" /><span>Адрес: 432027, Россия, Ульяновск, ул.У.Громовой,6</span></div>
            <div className="contact__information"><img src={timeWork} alt="" /><a href="/#">+7 (8422) 99-27-72</a><a href="">+7 (8422) 93-33-09</a></div>
            <div className="contact__information"><img src={locationPin} alt="" /><span>Часы работы: с 8:00 до 20:00 (Понедельник-Суббота), воскресенье выходной</span></div>
            <div className="contact__social">
                <a href="/#"><img src={vkontakte} alt="" /></a>
                <a href="/#"><img src={telegram} alt="" /></a>
                <a href="/#"><img src={whatsapp} alt="" /></a>
                <a href="/#"><img src={gmail} alt="" /></a>
            </div>
            <Application/>
        </main>
      </>
    );
  }

export default Contact;