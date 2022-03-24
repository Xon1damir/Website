import React from "react";
import Sidebar from "../order/Sidebar";
import OrderDetails from "./containers/OrderDetails";
import Right from "./right";


class OrderDetailsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <RightTop />
        <OrderDetails />
      </React.Fragment>
    );
  }
}

export default OrderDetailsPage;
