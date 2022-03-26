import React from "react";
import Header from "../components/Header";
import ListTabContainer from "./ListTabContainer";
class Right extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ListTabContainer />
      </React.Fragment>
    );
  }
}

export default Right;
