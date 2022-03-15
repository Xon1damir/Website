import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Top-Container">
        <div className="Top-Left">
          <h1 className="Text">Заказ</h1>
          <div className="Column"></div>
          <div className="ID_Number">
            <h1 className="ID">ID</h1>
            <h1 className="Number">537391</h1>
          </div>
          <div className="Column"></div>
          <div className="Calendar">
            <FontAwesomeIcon icon={faCalendar} className="Icon-Calendar" />
            <h1 className="Day">2021-06-22 18:40:27</h1>
          </div>
          <div className="Column"></div>
        </div>
        <div className="Top-Right">
          <div className="Right_1">
            <div className="Button-1" type="button">
              <FontAwesomeIcon icon={faClock} className="Icons-Clock" />
              <h1 className="Button-Time">0:02:36</h1>
            </div>
          </div>
          <div className="Right_1">
            <div className="Button-2" type="button">
              <h1 className="Button-2_Text">Доставлен</h1>
              <FontAwesomeIcon icon={faArrowDown} className="Icons-Down" />
            </div>
          </div>
          <button className="Button_1">
            <FontAwesomeIcon icon={faCancel} className="Icons-Cancel" />
            <h1 className="Button-3_Text">Отменить</h1>
          </button>
          <button className="Button_2">
            <FontAwesomeIcon icon={faSave} className="Icons-Save" />
            <h1 className="Button-4_Text">Сохранить</h1>
          </button>
        </div>
      </div>
    );
  }
}

export default Top;
