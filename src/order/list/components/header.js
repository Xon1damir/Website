import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

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
