import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Aside() {
  return (
      <>
    <div className="legend p-2 mb-2">
            <h4 className="text-center">Get Started</h4>
      Welcome to the community fridge. If you don't see your item listed, you
      can add it in the field that says "Add something to the fridge...", and
      hitting the plus sign. Alternatively, you can narrow the list by using the
      search bar above. To delete an item, click on the circle next to the name
      of the item.
      <p />
      After drop off, please increment accordingly so the fridge has the most
      up-to-date quantities. If you take something from the fridge, please
      subtract from the total. You can use the arrows on either side of the
      quantity to add and subtract!
    </div>
      <div className="legend p-2">
            <h4 className="text-center">Fridge Key</h4>
            <div className="row mb-2">
            <div className="col-2">
                <FontAwesomeIcon icon={faSquare} id="urgent" /> 
            </div>
            <div className="col">
                 Most urgently needed items! Donate these first!
            </div></div>
            <div className="row mb-2">
            <div className="col-2">
                <FontAwesomeIcon icon={faSquare} id="good" />  
                </div>
            <div className="col">
                These items are in stock, but you can still donate if you want to.
                </div></div>
                <div className="row">
            <div className="col-2">
                <FontAwesomeIcon icon={faSquare} id="surplus" />  
                </div><div className="col">
                There is more than enough of these items, no need to donate.
      </div></div></div>
      </>
  );
}

export default Aside;
