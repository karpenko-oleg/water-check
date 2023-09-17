
import "./price.scss";

// json
import priceObj from "../../asset/priceObj.json";

function Price() {
    return (
      <>
        <main>
            <h2 className="body__title">Цены на оказываемые услуги</h2>
            <section className="price__item">
              <table className="price__item__table">
              <tr>
                <th>Наименование услуги</th><th>Цена</th>
              </tr>
              {priceObj?.map((item) =>
              <tr><td>{item.title}</td><td>{item.cost}</td></tr>
              )}
              </table>
              
            </section>
        </main>
      </>
    );
  }
  
  export default Price;
  