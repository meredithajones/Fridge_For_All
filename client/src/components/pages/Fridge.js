import React, { useState } from "react";
import Inventory from "../Inventory/ThirdInventory.js";
import Searchbar from "../Searchbar";
import Aside from "../Aside";

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
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Fridge;
