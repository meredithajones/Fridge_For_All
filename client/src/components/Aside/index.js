import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Aside() {
    return (
        <div className="text-left mb-0">
            <FontAwesomeIcon icon={faCircle} id="urgent" /> Most urgently needed items! Please consider donating these first. <br />
            <FontAwesomeIcon icon={faCircle} id="good" /> These items are in stock, but you can donate if you want to.  <br />
            <FontAwesomeIcon icon={faCircle} id="surplus" /> There are more than enough of these items, no need to donate these.
        </div>
    )
}

export default Aside;