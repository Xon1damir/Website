import React from "react";
import "./Table.css";
import TableMenu from "./tableMenu";
import TableBottom from "./tableBottom";
class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosen_tab: 1,
      tab_menu: [
        {
          value: 1,
          label: "Курьер",
          count: 10,
        },
        {
          value: 2,
          label: "Новый",
          count: 12,
        },
        {
          value: 3,
          label: "Оператор",
          count: 12,
        },
        {
          value: 4,
          label: "Загатовка",
          count: 5,
        },
        {
          value: 5,
          label: "Завершен",
          count: 120,
        },
        {
          value: 6,
          label: "Все заказы",
          count: 1,
        },
      ],
      items_tab_1: [
        {
          number: 1,
          name_: "Арсений Морозов ",
          phone: "+998 (90) 123-45-67",
          id: 5262261,
          timing: "02:33:48",
          branch: "Марк Васильев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 2,
          name_: "Дамир Баранов",
          phone: "+998 (90) 123-45-67",
          id: 5637657,
          timing: "02:33:48",
          branch: "Ева Васильева",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 3,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425683,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 4,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425243,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 5,
          name_: "Дмитрий Лебедев",
          phone: "+998 (90) 123-45-67",
          id: 9232734,
          timing: "02:33:48",
          branch: "Евгений Кудрявцев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 6,
          name_: "Елизавета Фёдорова",
          phone: "+998 (90) 123-45-67",
          id: 5227365,
          timing: "02:33:48",
          branch: "Полина Петрова",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
      ],
      items_tab_2: [
        {
          number: 1,
          name_: "Арсений Морозов ",
          phone: "+998 (90) 123-45-67",
          id: 5262261,
          timing: "02:33:48",
          branch: "Марк Васильев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 2,
          name_: "Дамир Баранов",
          phone: "+998 (90) 123-45-67",
          id: 5637657,
          timing: "02:33:48",
          branch: "Ева Васильева",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 3,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425683,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 4,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425683,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
      ],
      items_tab_3: [
        {
          number: 1,
          name_: "Арсений Морозов",
          phone: "+998 (90) 123-45-67",
          id: 5262261,
          timing: "02:33:48",
          branch: "Марк Васильев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 2,
          name_: "Дамир Баранов",
          phone: "+998 (90) 123-45-67",
          id: 5637657,
          timing: "02:33:48",
          branch: "Ева Васильева",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
      ],
      items_tab_4: [
        {
          number: 1,
          name_: "Арсений Морозов ",
          phone: "+998 (90) 123-45-67",
          id: 5262261,
          timing: "02:33:48",
          branch: "Марк Васильев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 2,
          name_: "Дамир Баранов",
          phone: "+998 (90) 123-45-67",
          id: 5637657,
          timing: "02:33:48",
          branch: "Ева Васильева",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 3,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425683,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
      ],
      items_tab_5: [
        {
          number: 1,
          name_: "Арсений Морозов ",
          phone: "+998 (90) 123-45-67",
          id: 5262261,
          timing: "02:33:48",
          branch: "Марк Васильев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 2,
          name_: "Дамир Баранов",
          phone: "+998 (90) 123-45-67",
          id: 5637657,
          timing: "02:33:48",
          branch: "Ева Васильева",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 3,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425683,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
      ],
      items_tab_6: [
        {
          number: 1,
          name_: "Арсений Морозов ",
          phone: "+998 (90) 123-45-67",
          id: 5262261,
          timing: "02:33:48",
          branch: "Марк Васильев",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 2,
          name_: "Дамир Баранов",
          phone: "+998 (90) 123-45-67",
          id: 5637657,
          timing: "02:33:48",
          branch: "Ева Васильева",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
        {
          number: 3,
          name_: "Вероника Новикова",
          phone: "+998 (90) 123-45-67",
          id: 5425683,
          timing: "02:33:48",
          branch: "Мадияр Макаров",
          branch_phone: "+998 (90) 123-45-67",
          button: "Доставка",
          money: "$888",
          adrees: "ул. Байкальская‚ д. 52‚ кв. 22",
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (newTab, oldTab, event) => {
    //console.log(event.target)
    this.setState({
      choosen_tab: newTab + 1,
    });
  };

  render() {
    // determining table items
    let items = [];
    switch (this.state.choosen_tab) {
      case 1:
        items = this.state.items_tab_1;
        break;
      case 2:
        items = this.state.items_tab_2;
        break;
      case 3:
        items = this.state.items_tab_3;
        break;
      case 4:
        items = this.state.items_tab_4;
        break;
      case 5:
        items = this.state.items_tab_5;
        break;
      case 6:
        items = this.state.items_tab_6;
        break;
      default:
    }
    return (
      <div className="Table-Container">
        <div className="Table-Container-2">
          <TableMenu
            tab_menu={this.state.tab_menu}
            items={items}
            value={this.state.value}
            handleClick={this.handleClick}
            choosen_tab={this.state.choosen_tab}
          />
          <TableBottom />
        </div>
      </div>
    );
  }
}

export default TableContainer;
