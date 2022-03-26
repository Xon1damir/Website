import React from "react";
import Sidebar from "../list/components/Sidebar";
import OrderDetails from "./containers/OrderDetails";
import Header from "./components/Header";

class OrderDetailsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Header />
        <OrderDetails />
      </React.Fragment>
    );
  }
}

export default OrderDetailsPage;
