import React from "react";
import "./../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ keyword, setKeyword }) => {
  return (
    <div className="add-item-box">
      <input
        className="add-item-input"
        key="random1"
        value={keyword}
        placeholder={"Search what's in the fridge..."}
        onChange={(e) => setKeyword(e.target.value)}
      />
<FontAwesomeIcon icon={faSearch}  />
    </div>
  );
};

export default Searchbar;
