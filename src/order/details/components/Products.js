import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

// console.log('test')

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.products;
    let row = [];
    let id = 0;

    for (let i = 0; i < data.length; i++) {
      id = data[i].id;

      row.push(
        <div className="Push-Product">
          <div className="Box-Box-1">
            <h1 className="Box-Text-4">Наименование</h1>
            <select
              value={this.props.select_item}
              className="Select-Container-1"
              onChange={(e) =>
                this.props.handleChangeProduct_options(e.target.value)
              }
            >
              {this.props.product_options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="Box-Box-2">
            <div className="">
              <h1 className="Box-Text-5">Цена</h1>
              <input value={data[i].price} className="Box-Input-2" />
            </div>
            <div className="Box-Icon-3">
              <FontAwesomeIcon icon={faCancel} className="Icons-Canel" />
            </div>
            <div>
              <h1 className="Box-Text-6">Кол-во</h1>
              <div className="Add">
                <button
                  className="Box-Icon-4"
                  type="button"
                  onClick={(e) =>
                    this.props.handleProductQuantityDecrement(id, e)
                  }
                >
                  <FontAwesomeIcon icon={faMinus} className="Icons-Minus" />
                </button>
                <div className="Text-Box">
                  <h1 className="Box-Text-7">{data[i].quantity} </h1>
                </div>
                <button
                  className="Box-Icon-5"
                  type="button"
                  onClick={(e) =>
                    this.props.handleProductQuantityIncrement(id, e)
                  }
                >
                  <FontAwesomeIcon icon={faPlus} className="Icons-Plus" />
                </button>
              </div>
            </div>
            <div className="Box-Icon-6">
              <FontAwesomeIcon icon={faEquals} className="Icons-Equals" />
            </div>
            <div className="Input-Container-2">
              <h1 className="Box-Text-8">Общая стоимость</h1>
              <input value={data[i].total} className="Box-Input-3" />
            </div>
          </div>
          <div className="Box-Box-3">
            <h1 className="Box-Text-9">Описание</h1>
            <input value="Описание" className="Box-Input-4" />
          </div>
          <button
            className="Box-Icon-7"
            type="button"
            onClick={(e) => this.props.deleteProduct(id, e)}
          >
            <FontAwesomeIcon icon={faCancel} className="Icons-Canel-2" />
          </button>
        </div>
      );
    }
    let service_fee = 10000;

    if (this.props.total_money == 0) {
      service_fee = 0;
    } else {
      service_fee = 10000;
    }
    return (
      <div className="Bottom-Box-1">
        <div className="Box-1">
          <h1 className="Box-Text-1">Продукты</h1>
          <div className="Box-Container-1">
            <h1 className="Box-Text-2">История заказов</h1>
            <div className="Box-Box">
              <div className="Box-Icon-1">
                <FontAwesomeIcon icon={faArrowLeft} className="Icons-Left" />
              </div>
              <div>
                <h1 className="Box-Text-3">255024</h1>
              </div>
              <div className="Box-Icon-2">
                <FontAwesomeIcon icon={faArrowRight} className="Icons-Right" />
              </div>
            </div>
          </div>
        </div>

        <div className="Box-2">
          <div className="Box-Container-2"></div>
          <div className="Button-Container-1">
            {row}
            <button className="Box-Button-1" onClick={this.props.addProduct}>
              <FontAwesomeIcon icon={faPlus} className="Icons-Plus-2" />
              <h1 className="Button-Text-1">Добавить продукт</h1>
            </button>
          </div>
        </div>
        <div className="Box-3">
          <div className="Box-Left">
            <div className="Left-Header-1">
              <h1 className="Box-Text-10">Типы оплаты</h1>
              <button className="Left-Button-1">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus-3" />
              </button>
              <button className="Left-Button-2">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus-3" />
              </button>
              <button className="Left-Button-3">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus-3" />
              </button>
              <button className="Left-Button-4">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus-3" />
              </button>
            </div>
            <div className="Input-Container-3">
              <h1 className="Box-Text-11">Курьер</h1>
              <input value="Курьер" className="Box-Input-5" />
            </div>
            <div className="Input-Container-3">
              <h1 className="Box-Text-11">Оператор</h1>
              <input value="Оператор" className="Box-Input-5" />
            </div>
          </div>
          <div className="Left-Column"></div>
          <div className="Box-Right">
            <div className="Right-Header-1">
              <div className="Header-Right-1">
                <FontAwesomeIcon icon={faMoneyBill} className="Icons-Money" />
                <h1 className="Box-Text-12">Сумма заказа</h1>
              </div>
              <h1 className="Box-Text-13"> 12000сум</h1>
            </div>
            <div className="Middle-Right">
              <div className="Header-Right-2">
                <FontAwesomeIcon icon={faCar} className="Icons-Car" />
                <h1 className="Box-Text-14">Сумма доставки</h1>
              </div>
              <h1 className="Box-Text-13">10000 сум</h1>
            </div>
            <div className="Right-Row"></div>
            <div className="Middle-Right">
              <div className="Header-Right-2">
                <FontAwesomeIcon icon={faCar} className="Icons-Car" />
                <h1 className="Box-Text-15">Итого</h1>
              </div>
              <h1 className="Box-Text-16">10000 суm</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
