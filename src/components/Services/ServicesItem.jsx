
import "./services.scss";

function ServicesItem({servicesObj}) {
    return (
      <>
      {servicesObj?.map((item) => (
      <div className="servicesItem" key={item.id}>
        <a href="#">
          <div className="servicesItem__images">
            <img src={item.img} alt="" />
          </div>
          <h2>{item.name}</h2>
          <button><a href="">Подробнее</a></button>
        </a>
      </div>
      ))}
      </>
    );
  }
  
  export default ServicesItem;