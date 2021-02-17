import React from "react";
import Mapquest from "../Map"
import Row from "../Row";
import Col from "../Col";

function Locations() {

  const lat = "39.9526";
  const lng = "-75.1652";

  return (
    
    <div className="container rounded w-75 m-5 p-5 mx-auto d-block">
     <h1 className="mt-3" style={{textDecorationLine: "underline"}}>Locations:</h1>
      <Row>
        <Col size="md-6 sm-12">
      <h2 className="mt-3">South Philly</h2>
  1339 S 6th Street Philadelphia, PA <br />
  1901 S 9th Street Philadelphia, PA

      <h2 className="mt-3">Germantown</h2>
  30 West Armat Street Philadelphia, PA

      <h2 className="mt-3">West Philadelphia</h2>
  511 S 53nd Street Philadelphia PA <br />
  313 N 39th Street Philadelphia PA

      <h2 className="mt-3">Northern Liberties</h2>
  635 W Girard Ave Philadelphia PA <br />
  915 Spring Garden Street Philadelphia PA
  </Col>
  <Col size="md-6 sm-12">
      <h2 className="mt-3">Kensington</h2>
  3400 Coral Street Philadelphia PA
 
      <h2 className="mt-3">Brewerytown</h2>
3831 W Girard Ave Philadelphia PA

      <h2 className="mt-3">Fishtown</h2>
  1355 E Palmer Street Philadelphia Palmer

      <h2 className="mt-3">Center City</h2>
  1180 Ludlow Street Philadelphia PA

  </Col>
  </Row>
  <br></br>
  <Row>
  <Col size="md-12 sm-12">
      <Mapquest
        height="70vh"
        width="100%"
        center={[lat, lng]}
        tileLayer={'map'}
        zoom={12}
        apiKey="KgkkF0XGvA7cEfndYAaPIGPwusNVFISG"

      />
    </Col>
      </Row>
    </div>

  );
}

export default Locations;