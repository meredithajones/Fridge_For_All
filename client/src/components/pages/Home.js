import React from "react";
import "../../index.css";
import Row from "../Row";
import Col from "../Col";

const Home = () => (
  <div className="container rounded w-75 mt-5 mb-5 p-3 d-block">
    <Row>
      <Col size="md-4 sm-12">
    <img
      src="imgs/FFA.png"
      width="95%"
      className="img-fluid rounded float-left m-3"
      alt="Fridge For All"
    />
    </Col>
    <Col size="md-8 sm-12">
    <h1>Hi there!</h1>
    Thanks for checking out Fridge For All. We hope you find what you're looking
    for! Here is where you can find out more information about the community
    fridges in Philadelphia and most importantly check the inventory of your
    local fridge! To get started, click on "Check the Fridge" above.
    </Col>
    </Row>
  </div>
  
);

export default Home;
