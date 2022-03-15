import React from "react";
import Bottom from "./bottom";
import Top from "./top";
import './righttop.css'

class RightTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Top />
        <Bottom />
      </React.Fragment>
    );
  }
}


export default RightTop