import React from "react";
import Left from "../Order/Left";
import Right from "./right";


class Customers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Left />
        <Right />
      </React.Fragment>
    );
  }
}

export default Customers;
