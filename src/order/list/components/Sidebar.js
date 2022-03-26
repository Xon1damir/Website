import React from "react";
import "../styles/Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-menu-controls">
        <div className="link-container-1 rounded-circle">
          <a href="#" className="link-1">
            D
          </a>
        </div>
        <div className="side-menu-list ">
          <div className="Icons-Shop rounded">
            <a href="#">
              <FontAwesomeIcon icon={faCartPlus} className="Icons-1" />
            </a>
          </div>
          <a href="#" className="Icons-Vector rounded">
            <FontAwesomeIcon icon={faUser} className="Icons-2" />
          </a>
          <a href="#" className="Icons-Vector rounded">
            <FontAwesomeIcon icon={faLocation} className="Icons-2" />
          </a>
          <a href="#" className="Icons-Vector rounded">
            <FontAwesomeIcon icon={faCommentDots} className="Icons-2" />
          </a>
        </div>
        <div className="site-menu-list-2">
          <a href="#" className="Icons-Vector rounded">
            <FontAwesomeIcon icon={faKey} className="Icons-2" />
          </a>
          <a href="#" className="Icons-Vector rounded">
            <FontAwesomeIcon icon={faCommentDots} className="Icons-2" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
