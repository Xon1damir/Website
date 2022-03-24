import React from "react";
import Bottom from "./bottom";
import Left from "./left";
import Right from "./right";
import "./rightbottom.css";

class RightBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Арина",
      surname: "Соколова",
      phone: "+998(94)-570-20-56",
      description: "+998(94)-570-20-56",
      address: "Адрес или обьект",
      branch: "Сергильский-7 район",
      home: "20-Дом",
      apartment: "18-Квартира",
      floor: "3-Этаж",
      number: 1,
      money: 26000,
      total_money: 26000,
      select_item: "клaб сендвич ",
      select_client: "мужской",
      options: [
        {
          label: "Клаб сендвич",
          value: "клaб сендвич",
        },
        {
          label: "Бургер",
          value: "бургер",
        },
        {
          label: "Хотдог",
          value: "хотдог",
        },
        {
          label: "Лаваш",
          value: "лаваш",
        },
      ],
      clients: [
        {
          label: "Mужской",
          value: "мужской",
        },
        {
          label: "Женский",
          value: "женский",
        },
      ],
      select_delivery: "доставкa",
      delivery_type: [
        {
          label: "Доставка",
          value: "доставкa",
        },
        {
          label: "Самовывоз",
          value: "cамовывоз",
        },
      ],
      select_branch: "Тариф 1",
      branch_type: [
        {
          label: "Тариф 1",
          value: "Тариф 1 ",
        },
        {
          label: "Тариф 2",
          value: "Тариф 2 ",
        },
        {
          label: "Тариф 3",
          value: "Тариф 3 ",
        },
      ],
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeHome = this.handleChangeHome.bind(this);
    this.handleChangeApartment = this.handleChangeApartment.bind(this);
    this.handleChangeFloor = this.handleChangeFloor.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangeSelect_Client = this.handleChangeSelect_Client.bind(this);
    this.handleChangeSelect_Delivery =
      this.handleChangeSelect_Delivery.bind(this);
    this.handleChangeSelect_Branch = this.handleChangeSelect_Branch.bind(this);
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeSurname(event) {
    this.setState({ surname: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleChangeHome(event) {
    this.setState({ home: event.target.value });
  }

  handleChangeApartment(event) {
    this.setState({ apartment: event.target.value });
  }

  handleChangeFloor(event) {
    this.setState({ floor: event.target.value });
  }

  // set burgers to state item
  // change money depending on selected burger type

  handleChangeItem(value) {
    let type = value;
    let money = this.state.money;

    switch (type) {
      case "клaб сендвич":
        money = 26000;
        break;
      case "бургер":
        money = 18000;
        break;
      case "хотдог":
        money = 15000;
        break;
      case "лаваш":
        money = 22000;
        break;

      default:
    }
    this.setState({
      money: money,
      select_item: value,
      total_money: money,
      number: 1,
    });
  }

  handleChangeSelect_Client(value) {
    this.setState({
      select_client: value,
    });
  }
  handleChangeSelect_Delivery(value) {
    this.setState({
      select_delivery: value,
    });
  }
  handleChangeSelect_Branch(value) {
    this.setState({
      select_branch: value,
    });
  }
  increment() {
    this.setState({
      number: this.state.number + 1,
      total_money: this.state.total_money + this.state.money,
    });
  }

  decrement() {
    let number = this.state.number;
    if (number > 0) {
    } else {
      return;
    }
    this.setState({
      number: this.state.number - 1,
      total_money: this.state.total_money - this.state.money,
    });
  }

  render() {
    return (
      <div className="Container">
        <div className="Container-Top">
          <Left
            clients={this.state.clients}
            select_value={this.state.select_value}
            name={this.state.name}
            surname={this.state.surname}
            phone={this.state.phone}
            description={this.state.description}
            handleChangeName={this.handleChangeName}
            handleChangeSurname={this.handleChangeSurname}
            handleChangePhone={this.handleChangePhone}
            handleChangeDescription={this.handleChangeDescription}
            handleChangeSelect_Client={this.handleChangeSelect_Client}
          />
          <Right
            address={this.state.address}
            branch={this.state.branch}
            delivery_type={this.state.delivery_type}
            branch_type={this.state.branch_type}
            select_branch={this.state.select_branch}
            select_delivery={this.state.select_delivery}
            home={this.state.home}
            apartment={this.state.apartment}
            floor={this.state.floor}
            handleChangeSelect_Delivery={this.handleChangeSelect_Delivery}
            handleChangeSelect_Branch={this.handleChangeSelect_Branch}
            handleChangeAddress={this.handleChangeAddress}
            handleChangeHome={this.handleChangeHome}
            handleChangeApartment={this.handleChangeApartment}
            handleChangeFloor={this.handleChangeFloor}
          />
        </div>
        <Bottom
          number={this.state.number}
          money={this.state.money}
          item={this.state.select_item}
          options={this.state.options}
          total_money={this.state.total_money}
          increment={this.increment}
          decrement={this.decrement}
          handleChangeItem={this.handleChangeItem}
        />
      </div>
    );
  }
}

export default RightBottom;
