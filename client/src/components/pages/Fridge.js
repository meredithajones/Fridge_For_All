import React, { useState } from "react";
import inventory from "./inventory.json";
//import LittleFridge from "../LittleFridge";
// import Inventory from "../Inventory";
import Inventory from "../Inventory/ThirdInventory.js";
import Searchbar from "../Searchbar";
const Fridge = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="container rounded w-100 m-5 mx-auto d-block">
      <div className="row">
        <div className="col">
          <Inventory keyword={keyword} />
        </div>
        <div className="col">
          <Searchbar keyword={keyword} setKeyword={setKeyword} />
        </div>
      </div>
    </div>
  );
};

export default Fridge;
