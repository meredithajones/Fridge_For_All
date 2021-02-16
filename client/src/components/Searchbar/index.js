import React from "react";
import "./../../index.css";

const Searchbar = ({ keyword, setKeyword }) => {
  return (
    <div className="add-item-box">
      <input
        className="add-item-input"
        key="random1"
        value={keyword}
        placeholder={"Search what's here "}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
