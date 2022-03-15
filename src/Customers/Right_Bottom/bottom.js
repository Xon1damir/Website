import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <div className="Box-Container-2">
            <div className="Box-Box-1">
              <h1 className="Box-Text-4">Наименование</h1>
              <div className="Input-Container-1">
                <input value="Клаб сендвич" className="Box-Input-1" />
                <FontAwesomeIcon icon={faArrowDown} className="Icons-Down-1" />
              </div>
            </div>
            <div className="Box-Box-2">
              <div className="">
                <h1 className="Box-Text-5">Цена</h1>
                <input value="26 000 сум" className="Box-Input-2" />
              </div>
              <div className="Box-Icon-3">
                <FontAwesomeIcon icon={faCancel} className="Icons-Canel" />
              </div>
              <div>
                <h1 className="Box-Text-6">Кол-во</h1>
                <div className="Add">
                  <div className="Box-Icon-4" type="button">
                    <FontAwesomeIcon icon={faMinus} className="Icons-Minus" />
                  </div>
                  <div className="Text-Box">
                    <h1 className="Box-Text-7">2</h1>
                  </div>
                  <div className="Box-Icon-5" type="button">
                    <FontAwesomeIcon icon={faPlus} className="Icons-Plus" />
                  </div>
                </div>
              </div>
              <div className="Box-Icon-6">
                <FontAwesomeIcon icon={faEquals} className="Icons-Equals" />
              </div>
              <div className="Input-Container-2">
                <h1 className="Box-Text-8">Общая стоимость</h1>
                <input placeholder="52 000 сум" className="Box-Input-3" />
              </div>
            </div>
            <div className="Box-Box-3">
              <h1 className="Box-Text-9">Описание</h1>
              <input value="Описание" className="Box-Input-4" />
            </div>
            <div className="Box-Icon-7" type="button">
              <FontAwesomeIcon icon={faCancel} className="Icons-Canel-2" />
            </div>
          </div>
          <div className="Button-Container-1">
            <button className="Box-Button-1">
              <FontAwesomeIcon icon={faPlus} className="Icons-Plus-2" />
              <h1 className="Button-Text-1">Добавить продукт</h1>
            </button>
          </div>
        </div>
        <div className="Box-3">
          <div className="Box-Left">
            <div className="Left-Header-1">
              <h1 className="Box-Text-10">Типы оплаты</h1>
              <buton className="Left-Button-1">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus" />
              </buton>
              <buton className="Left-Button-2">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus" />
              </buton>
              <buton className="Left-Button-3">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus" />
              </buton>
              <buton className="Left-Button-4">
                <FontAwesomeIcon icon={faPlus} className="Icons-Plus" />
              </buton>
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
              <h1 className="Box-Text-13">2 000 000 сум</h1>
            </div>
            <div className="Middle-Right">
              <div className="Header-Right-2">
                <FontAwesomeIcon icon={faCar} className="Icons-Car" />
                <h1 className="Box-Text-14">Сумма доставки</h1>
              </div>
              <h1 className="Box-Text-13">10 000 сум</h1>
            </div>
            <div className="Right-Row"></div>
            <div className="Middle-Right">
              <div className="Header-Right-2">
                <FontAwesomeIcon icon={faCar} className="Icons-Car" />
                <h1 className="Box-Text-15">Итого</h1>
              </div>
              <h1 className="Box-Text-16">2 010 000 сум</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
