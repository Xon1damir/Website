import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header-Menu">
        <div className="Header-Top">
          <div className="Top-Left">
            <h1 className="Text">Заказы</h1>
          </div>
          <div className="Top-Right">
            <button className="Right-1  border-0">
              <FontAwesomeIcon icon={faList} className="Icons-3" />
              <h3 className="Right-text">Таблица</h3>
            </button>
            <button className="Right-2 border-0">
              <FontAwesomeIcon icon={faLocation} className="Icons-3" />
              <h3 className="Right-text">Карта</h3>
            </button>
            <button className="Right-2  border-0">
              <FontAwesomeIcon icon={faPen} className="Icons-4" />
              <h3 className="Right-text-1">Действия</h3>
            </button>
            <button className="Right-2 border-0">
              <FontAwesomeIcon icon={faPlus} className="Icons-5" />
              <h3 className="Right-text-2">Добавить</h3>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
