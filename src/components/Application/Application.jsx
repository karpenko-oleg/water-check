
import "./application.scss";

// Картинки
import userApplication from "../../asset/application/user.svg";
import phoneApplication from "../../asset/application/phone.svg";
import counterApplication from "../../asset/application/counterWater.svg";

function Application() {
    return (
      <div className="application">
        <h2 className="body__title">Оставьте онлайн заявку</h2>
        <form action="">
            <div className="application__form"><img src={userApplication} alt="userApplication" /><input type="text" name="name" placeholder="Введите ваше имя"/></div>
            <div className="application__form"><img src={phoneApplication} alt="phoneApplication" /><input type="text" name="tel" placeholder="Введите ваш телефон"/></div>
            <div className="application__form"><img src={counterApplication} alt="counterApplication" />
                <select name="" id="">
                    <option disabled="" selected="">Количество счетчиков</option>
                    <option value="1">1 счетчик</option>
                    <option value="2">2 счетчик</option>
                    <option value="3">3 счетчик</option>
                    <option value="4">4 счетчик</option>
                    <option value="5">5 счетчик</option>
                    <option value="6">6 счетчик</option>
                    <option value="7">7 счетчик</option>
                    <option value="8">8 и более (скидка 20%)</option>
                </select>
            </div>
            <div className="application__submit"><input type="submit" /></div>
        </form>
      </div>
    );
  }
  
  export default Application;