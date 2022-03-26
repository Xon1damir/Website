import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
class HeaderBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header-Bottom">
        <div className="Bottom-Search ">
          <FontAwesomeIcon icon={faSearch} className="Search-Icons" />
          <input type="search" placeholder="Поиск" className="Search" />
        </div>
        <div className="Days ">
          <button className="Days-Button border-0">
            <FontAwesomeIcon icon={faArrowLeft} className="Right-Left-Icons" />
          </button>
          <div className="Days-Text">Сегодня</div>
          <button className="Days-Button border-0">
            <FontAwesomeIcon icon={faArrowRight} className="Right-Left-Icons" />
          </button>
        </div>
        <button className="Bottom-Icons-Button-1">
          <FontAwesomeIcon icon={faColumns} className="Icons-List-1" />
          <h1 className="Icons-Text">Столбцы</h1>
        </button>
        <button className="Bottom-Icons-Button-2">
          <FontAwesomeIcon icon={faFilter} className="Icons-List-1" />
          <h1 className="Icons-Text">Фильтр</h1>
        </button>
        <button className="Bottom-Icons-Button-2">
          <FontAwesomeIcon icon={faDownload} className="Icons-List-1" />
          <h1 className="Icons-Text">Скачать</h1>
        </button>
      </div>
    );
  }
}

export default HeaderBottom;
