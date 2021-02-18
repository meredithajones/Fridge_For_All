import React, { useState } from "react";
import Inventory from "../Inventory/ThirdInventory.js";
import Searchbar from "../Searchbar";
import Aside from "../Aside";
import Row from "../Row";
import Col from "../Col";

const Fridge = () => {
  const [keyword, setKeyword] = useState("");

  return (
  
    <div className="container rounded w-100 m-5 mx-auto d-block">
        <Row>
        <Col size="lg-6 md-12">
          <Inventory keyword={keyword} />
          </Col>
          <Col size="lg-6 md-12">
          <Searchbar keyword={keyword} setKeyword={setKeyword} />
          
          <Aside />
          </Col>
          </Row>
        
   
    </div>
    

  );
};

export default Fridge;
