import React from "react";
import RightBottom from "./Right_Bottom/Right_bottom";
import RightTop from "./Right_Top/righttop";

class Right extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <React.Fragment>
        <RightTop />
        <RightBottom />
      </React.Fragment>
    );
  }
}

export default Right;
