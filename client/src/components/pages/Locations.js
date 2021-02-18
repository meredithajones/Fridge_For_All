import React from "react";
import Mapquest from "../Map";
import Row from "../Row";
import Col from "../Col";

function Locations() {
  const lat = "39.9526";
  const lng = "-75.1652";

  return (
    <div className="container rounded w-75 mx-auto d-block mt-5 mb-5">
      <Row>
        <Col size="md-6 sm-12">
          <h4 className="mt-4">South Philly</h4>
          1339 S 6th Street Philadelphia, PA <br />
          1901 S 9th Street Philadelphia, PA
          <h4 className="mt-4">Germantown</h4>
          30 West Armat Street Philadelphia, PA
          <h4 className="mt-4">West Philadelphia</h4>
          511 S 53nd Street Philadelphia PA <br />
          313 N 39th Street Philadelphia PA
          <h4 className="mt-4">Northern Liberties</h4>
          635 W Girard Ave Philadelphia PA <br />
          915 Spring Garden Street Philadelphia PA
        </Col>
        <Col size="md-6 sm-12">
          <h4 className="mt-4">Kensington</h4>
          3400 Coral Street Philadelphia PA
          <h4 className="mt-4">Brewerytown</h4>
          3831 W Girard Ave Philadelphia PA
          <h4 className="mt-4">Fishtown</h4>
          1355 E Palmer Street Philadelphia Palmer
          <h4 className="mt-4">Center City</h4>
          1180 Ludlow Street Philadelphia PA
        </Col>
      </Row>
      <br />
      <Row>
        <Col size="md-12 sm-12">
          <Mapquest
            height="70vh"
            width="100%"
            center={[lat, lng]}
            tileLayer={"map"}
            zoom={12}
            apiKey="KgkkF0XGvA7cEfndYAaPIGPwusNVFISG"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Locations;
