import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Aside() {
    return (
        <div className="text-left mb-0">
            hello i am a div inside the 'aside' component 
            <FontAwesomeIcon icon={faCheckCircle} />
        </div>
    )
}

export default Aside;