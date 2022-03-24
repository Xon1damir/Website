import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

class HeaderBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Bottom-Container">
        <div className="Bottom-Left">
          <div className="Text-Container-1">
            <h1 className="T-C_1">Основное</h1>
          </div>
          <div className="Text-Container-2">
            <h1 className="T-C_2">История изменений</h1>
          </div>
        </div>
        <div className="Bottom-Right">
          <button className="Bottom-button">
            <FontAwesomeIcon icon={faSave} className="Icons-Seal" />
            <h1 className="Button-5_Text">Печать</h1>
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
