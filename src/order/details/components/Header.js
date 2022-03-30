import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import "../styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTop />
        <HeaderBottom />
      </React.Fragment>
    );
  }
}

export default Header;
