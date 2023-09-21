
import "./permission.scss";
// Используемы картинки
import imgTitle from "../../asset/permission/img-title.png"
import imgDoc_1 from "../../asset/permission/permitting-doc-1.jpg"

function Permission() {
    return (
      <div className="permission">
        <h2 className="body__title">Разрешительные документы</h2>
        <p>Согласно ФЗ № 102 от 26.06.2008 г. поверку счетчиков воды имеют право проводить только аккредитованные на проведение поверки средств измерений юридические лица и индивидуальные предприниматели. Наша компания является аккредитованной компанией (регистрационный номер записи в реестре RA.RU.312665) на территории всей Российской Федерации. Ниже Вы найдете разрешительные документы и копию аккредитации:</p>
        <section className="permission__content">
            <div className="permission__content__text">
                <div className="permission__content__text__item">
                    <div className="permission__content__text__img"><img src={imgDoc_1} alt="imgDoc_1" /></div>
                    <div className="permission__content__text__title">
                        <h4>Карточка аккредитованного лица</h4>
                        <a className="permission__link" href={imgDoc_1}>Посмотреть</a>
                    </div>
                </div>
                <div className="permission__content__text__item">
                    <div className="permission__content__text__img"><img src={imgDoc_1} alt="imgDoc_1" /></div>
                    <div className="permission__content__text__title">
                        <h4>Область аккредитации</h4>
                        <a className="permission__link" href={imgDoc_1}>Посмотреть</a>
                    </div>
                </div>
                <div className="permission__content__text__item">
                    <div className="permission__content__text__img"><img src={imgDoc_1} alt="imgDoc_1" /></div>
                    <div className="permission__content__text__title">
                        <h4>Приказ Росаккредитации</h4>
                        <a className="permission__link" href={imgDoc_1}>Посмотреть</a>
                    </div>
                </div>
                <div className="permission__content__text__item">
                    <div className="permission__content__text__img"><img src={imgDoc_1} alt="imgDoc_1" /></div>
                    <div className="permission__content__text__title">
                        <h4>Аттестат аккредитации</h4>
                        <a className="permission__link" href={imgDoc_1}>Посмотреть</a>
                    </div>
                </div>
                
            </div>
            <div className="permission__content__images"><img src={imgTitle} alt="imgTitle" /></div>
        </section>
      
      </div>
    );
  }
  
  export default Permission;