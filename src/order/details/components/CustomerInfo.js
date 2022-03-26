import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class CustomerInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Box">
        <div className="text-container">
          <h1 className="text-1">Клиент</h1>
        </div>
        <div className="input-box">
          <div className="text_input">
            <h1 className="text-2">Тип клиента</h1>
            <select
              value={this.props.select_client}
              className="input-1"
              onChange={(e) =>
                this.props.handleChangeSelect_Client(e.target.value)
              }
            >
              {this.props.client_options.map((client_) => (
                <option value={client_.value}>{client_.label}</option>
              ))}
            </select>
          </div>
          <div className="text_input">
            <h1 className="text-2">Имя</h1>
            <input
              className="input-2"
              value={this.props.customer_info.name}
              onChange={this.props.handleChangeName}
              type="text"
              placeholder="Введите имя"
            />
          </div>
          <div className="text_input">
            <h1 className="text-2">Фамилия</h1>
            <input
              className="input-3"
              value={this.props.customer_info.surname}
              onChange={this.props.handleChangeSurname}
              type="text"
              placeholder="Фамилия"
            />
          </div>
          <div className="text_input">
            <h1 className="text-2">Телефон</h1>
            <input
              className="input-4"
              value={this.props.customer_info.phone}
              onChange={this.props.handleChangePhone}
              type="text"
              placeholder="Телефон"
            />
            <div className="Icons-Box" type="button">
              <FontAwesomeIcon icon={faPlus} className="Left-Icons-Plus" />
            </div>
          </div>
          <div className="text_input">
            <h1 className="text-2">Описание</h1>
            <input
              className="input-5"
              value={this.props.customer_info.description}
              onChange={this.props.handleChangeDescription}
              type="text"
              placeholder="Телефон"
            />
            <div className="Icons-Box" type="button">
              <FontAwesomeIcon icon={faPlus} className="Left-Icons-Plus" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;
