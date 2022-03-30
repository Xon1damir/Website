import React from "react";
import CustomerInfo from "../components/CustomerInfo";
import Products from "../components/Products";
import DeliveryDetails from "../components/DeliveryDetails";

import "../styles/OrderDetails.css";

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_info: {
        gender: "мужской",
        name: "Арина",
        surname: "Соколова",
        phone: "+998(94)-570-20-56",
        description: "+998(94)-570-20-56",
      },
      delivery: {
        address: "Адрес или обьект",
        branch: "Сергильский-7 район",
        tarrif: "Тариф 1",
        home: "20-Дом",
        apartment: "18-Квартира",
        floor: "3-Этаж",
      },
      products: [
        {
          id: 1,
          name: "клaб сендвич ",
          price: 26000,
          quantity: 1,
          total: 26000, // price * quantity
        },
      ],
      product_options: [
        {
          label: "Клаб сендвич",
          value: "клаб сендвич",
        },
        {
          label: "Бургер",
          value: "бургер",
        },
        {
          label: "Хотдог",
          value: "xотдог",
        },
        {
          label: "Лаваш",
          value: "лаваш",
        },
      ],
      client_options: [
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
      delivery_type_options: [
        {
          label: "Доставка",
          value: "доставкa",
        },
        {
          label: "Самовывоз",
          value: "cамовывоз",
        },
      ],
      tarrif_options: [
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
    this.handleProductQuantityIncrement =
      this.handleProductQuantityIncrement.bind(this);
    this.handleProductQuantityDecrement =
      this.handleProductQuantityDecrement.bind(this);
    this.handleChangeProduct_options =
      this.handleChangeProduct_options.bind(this);
    this.handleChangeSelect_Client = this.handleChangeSelect_Client.bind(this);
    this.handleChangeSelect_Delivery =
      this.handleChangeSelect_Delivery.bind(this);
    this.handleChangeSelect_Tarrif = this.handleChangeSelect_Tarrif.bind(this);
    this.handleChangeBranch = this.handleChangeBranch.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  handleChangeName(event) {
    this.setState({
      customer_info: {
        ...this.state.customer_info,
        name: event.target.value,
      },
    });
  }

  handleChangeSurname(event) {
    this.setState({
      customer_info: {
        ...this.state.customer_info,
        surname: event.target.value,
      },
    });
  }

  handleChangePhone(event) {
    this.setState({
      customer_info: {
        ...this.state.customer_info,
        phone: event.target.value,
      },
    });
  }

  handleChangeDescription(event) {
    this.setState({
      customer_info: {
        ...this.state.customer_info,
        description: event.target.value,
      },
    });
  }
  handleChangeSelect_Client(value) {
    this.setState({
      customer_info: {
        ...this.state.customer_info,
        gender: value,
      },
    });
  }
  handleChangeAddress(event) {
    this.setState({
      delivery: {
        ...this.state.delivery,
        address: event.target.value,
      },
    });
  }
  handleChangeBranch(event) {
    this.setState({
      delivery: {
        ...this.state.delivery,
        branch: event.target.value,
      },
    });
  }
  handleChangeHome(event) {
    this.setState({
      delivery: {
        ...this.state.delivery,
        home: event.target.value,
      },
    });
  }

  handleChangeApartment(event) {
    this.setState({
      delivery: {
        ...this.state.delivery,
        apartment: event.target.value,
      },
    });
  }

  handleChangeFloor(event) {
    this.setState({
      delivery: {
        ...this.state.delivery,
        floor: event.target.value,
      },
    });
  }

  handleChangeSelect_Delivery(value) {
    this.setState({
      select_delivery: value,
    });
  }
  handleChangeSelect_Tarrif(value) {
    this.setState({
      delivery: {
        ...this.state.delivery,
        tarrif: value,
      },
    });
  }

  // set burgers to state item
  // change money depending on selected burger type

  // Add Products

  addProduct() {
    let product = this.state.products;
    let lest_id = 1;

    if (product.length == 0) {
      lest_id = 1;
    } else {
      lest_id = product[product.length - 1].id + 1;
    }
    product.push({
      id: lest_id,
      name: "бургер",
      price: 18000,
      quantity: 1,
      total: 18000,
    });
    this.setState({
      products: product,
    });
  }

  deleteProduct(id) {
    let con = window.confirm("Do you want to remove this product?");
    if (con === true) {
      let filteredProduct = this.state.products.filter((product, h) => {
        return product.id !== id;
      });
      this.setState({
        products: filteredProduct,
      });
    } else {
      return;
    }
  }

  handleChangeProduct_options(value) {
    // let type = value;
    // switch (type) {
    //   case "клaб сендвич":
    //     price = 26000;
    //     break;
    //   case "бургер":
    //     price = 18000;
    //     break;
    //   case "хотдог":
    //     price = 15000;
    //     break;
    //   case "лаваш":
    //     price = 22000;
    //     break;
    //   default:
    // }
    // money: price,
    //   product_options: value,
    //   total_money: money,
    //   number: 1,
    // this.setState({
    //   products: {
    //     ...this.state.products,
    //     name: type,
    //     price: price,
    //     total: price,
    //     quantity: 1,
    //   },
    // });
  }

  handleProductQuantityIncrement(id) {
    let updatedProductList = this.state.products.map((product) => {
      if (product.id == id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    this.setState({
      products: updatedProductList,
    });
  }

  handleProductQuantityDecrement(id) {
    let decrement = this.state.products.map((product) => {
      if (product.id == id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    this.setState({
      products: decrement,
    });
  }

  render() {
    return (
      <div className="Container">
        <div className="Container-Top">
          <CustomerInfo
            customer_info={this.state.customer_info}
            client_options={this.state.client_options}
            handleChangeName={this.handleChangeName}
            handleChangeSurname={this.handleChangeSurname}
            handleChangePhone={this.handleChangePhone}
            handleChangeDescription={this.handleChangeDescription}
            handleChangeSelect_Client={this.handleChangeSelect_Client}
          />
          <DeliveryDetails
            delivery={this.state.delivery}
            delivery_type_options={this.state.delivery_type_options}
            tarrif_options={this.state.tarrif_options}
            handleChangeSelect_Delivery={this.handleChangeSelect_Delivery}
            handleChangeSelect_Tarrif={this.handleChangeSelect_Tarrif}
            handleChangeAddress={this.handleChangeAddress}
            handleChangeHome={this.handleChangeHome}
            handleChangeApartment={this.handleChangeApartment}
            handleChangeFloor={this.handleChangeFloor}
            handleChangeBranch={this.handleChangeBranch}
          />
        </div>
        <Products
          products={this.state.products}
          product_options={this.state.product_options}
          addProduct={this.addProduct}
          deleteProduct={this.deleteProduct}
          handleProductQuantityIncrement={this.handleProductQuantityIncrement}
          handleProductQuantityDecrement={this.handleProductQuantityDecrement}
          handleChangeProduct_options={this.handleChangeProduct_options}
        />
      </div>
    );
  }
}

export default OrderDetails;
