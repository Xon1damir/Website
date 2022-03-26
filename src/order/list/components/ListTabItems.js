import React from "react";
import "../styles/Table.css";

class ListTabItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let Items = this.props.items.map((item_) => (
      <tr key={item_.number}>
        <th>
          <input type="checkbox" className="CheckBox" />
        </th>
        <td>
          <h1 className="Number-1">{item_.number}</h1>
        </td>
        <td>
          <div className="Adress">
            <h1 className="Adress-Text">{item_.name_}</h1>
            <h1 className="Adress-Time">{item_.phone}</h1>
          </div>
        </td>
        <td>
          <h1 className="Number-1">{item_.id}</h1>
        </td>
        <td>
          <div className="Tbody-time">{item_.timing}</div>
        </td>
        <td>
          <div className="line"></div>
        </td>
        <td>
          <div className="Adress">
            <h1 className="Adress-Text">{item_.branch}</h1>
            <h1 className="Adress-Time">{item_.branch_phone}</h1>
          </div>
        </td>
        <td>
          <button className="Tbody-Buttons">
            <h1 className="Buttons-Text">{item_.button}</h1>
          </button>
        </td>
        <td>{item_.money}</td>
        <td>{item_.adrees}</td>
        <td>
          <div className="Tbody-Container">
            <h1 className="Container-Text">...</h1>
          </div>
        </td>
      </tr>
    ));

    return (
      <table className="table table-border ">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="CheckBoxTop" />
            </th>
            <th>№</th>
            <th>Клиент</th>
            <th>Ид.заказа</th>
            <th>Таймер</th>
            <th>Курьер</th>
            <th>Филиал</th>
            <th>Тип доставки</th>
            <th>Цена заказа</th>
            <th>Адресс клиента</th>
          </tr>
        </thead>
        <tbody>{Items}</tbody>
      </table>
    );
  }
}

export default ListTabItems;
