

import Permission from "../../components/Permission/Permission";
import "./compani.scss";

function Compani() {
    return (
      <>
        <main>
            <h2 className="body__title">О компании</h2>  
            <h4 className="compani__subtitle">Компания "АКВАТЕХНИК" (г.Ульяновск) рада предложить Вам услугу:  поверка счетчиков воды - без их снятия. Время поверки одного прибора занимает, в среднем порядка 30-40 минут.</h4>
            <h4 className="compani__subtitle">В случае если Ваш счетчик не прошел поверку, наши мастера быстро и качественно произведут его замену на новый.</h4>
            <h4 className="compani__subtitle">Мы работаем для Вас с 8:00 до 20:00 (понедельник-пятница), воскресенье выходной</h4>
            <h5 className="compani__title">Теперь мы предлагаем на выгодных условиях поверку и общедомовых приборов учёта воды и тепла!  Обращайтесь - всегда будем рады помочь!</h5>
            <Permission/>
        </main>
      </>
    );
  }
  
  export default Compani;