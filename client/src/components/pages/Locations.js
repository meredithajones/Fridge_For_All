import React from "react";
import Mapquest from "../Map";
import Row from "../Row";
import Col from "../Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

function Locations() {
  const lat = "39.9526";
  const lng = "-75.1652";

  return (
    <div className="container rounded w-75 mx-auto d-block mt-5 mb-5">
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
      <Row>
        <Col size="md-6 sm-12">
          <h4 className="mt-4">South Philly</h4>
          <FontAwesomeIcon icon={faBuilding} /> Philadelphia Community Fridge
          <br />
          1229 S 6th Street (Alliance Medical)
          <p />
          <FontAwesomeIcon icon={faBuilding} /> Philadelphia Community Fridge
          <br />
          1901 S 9th Street (Bok)
          <h4 className="mt-4">Germantown</h4>
          <FontAwesomeIcon icon={faBuilding} /> Germantown Fridge
          <br />
          20 West Armat Street (Greene St Friends School)
          <h4 className="mt-4">West Philadelphia</h4>
          <FontAwesomeIcon icon={faBuilding} /> The People's Fridge
          <br />
          511 S 52nd (Mina's World)
          <p />
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br />
          312 N 39th Street
          <h4 className="mt-4">Northern Liberties</h4>
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br />
          635 W Girard Ave (Ambassador)
          <p />
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br />
          915 Spring Garden Street (Triple Bottom Brewing)
        </Col>
        <Col size="md-6 sm-12">
          <h4 className="mt-4">Kensington</h4>
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br /> 2400 Coral Street (Franny Lou's Porch)
          <h4 className="mt-4">Brewerytown</h4>
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br /> 2821 W Girard Ave (Spot Burger)
          <h4 className="mt-4">Fishtown</h4>
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br /> 1255 E Palmer Street (Castellino’s)
          <h4 className="mt-4">Center City</h4>
          <FontAwesomeIcon icon={faBuilding} /> Mamatee
          <br /> 1180 Ludlow Street (Canopy Hotel)
        </Col>
      </Row>
    </div>
  );
}

export default Locations;
