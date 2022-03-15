import React from "react";
import Bottom from "./bottom";
import Left from "./left";
import Right from "./right";
import "./rightbottom.css";

class RightBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "Тип клиента",
      name: "Введите имя",
      surname: "Фамилия",
      phone: "Телефон",
      description: "Телефон",
      delivery: "Тип доставки",
      rating: "Тариф",
      address: "Адрес или обьект",
      branch: "Филиал",
      home: "Дом",
      apartment: "Квартира",
      floor: "Этаж",
    };
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeDelivery = this.handleChangeDelivery.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeBranch = this.handleChangeBranch.bind(this);
    this.handleChangeHome = this.handleChangeHome.bind(this);
    this.handleChangeApartment = this.handleChangeApartment.bind(this);
    this.handleChangeFloor = this.handleChangeFloor.bind(this);
  }

  handleChangeClient(event) {
    this.setState({ client: event.target.value });
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
  handleChangeDelivery(event) {
    this.setState({ delivery: event.target.value });
  }

  handleChangeRating(event) {
    this.setState({ rating: event.target.value });
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleChangeBranch(event) {
    this.setState({ branch: event.target.value });
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

  render() {
    return (
      <div className="Container">
        <div className="Container-Top">
          <Left
            client={this.state.client}
            name={this.state.name}
            surname={this.state.surname}
            phone={this.state.phone}
            description={this.state.description}
            handleChangeClient={this.handleChangeClient}
            handleChangeName={this.handleChangeName}
            handleChangeSurname={this.handleChangeSurname}
            handleChangePhone={this.handleChangePhone}
            handleChangeDescription={this.handleChangeDescription}
          />
          <Right
            delivery={this.state.delivery}
            rating={this.state.rating}
            address={this.state.address}
            branch={this.state.branch}
            home={this.state.home}
            apartment={this.state.apartment}
            floor={this.state.floor}
            handleChangeDelivery={this.handleChangeDelivery}
            handleChangeRating={this.handleChangeRating}
            handleChangeAddress={this.handleChangeAddress}
            handleChangeBranch={this.handleChangeBranch}
            handleChangeHome={this.handleChangeHome}
            handleChangeApartment={this.handleChangeApartment}
            handleChangeFloor={this.handleChangeFloor}
          />
        </div>
        <Bottom />
      </div>
    );
  }
}

export default RightBottom;
