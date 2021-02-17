import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Aside() {
  return (
    <div className="text-left mb-0">
      Welcome to the community fridge. If you don't see your item listed, you
      can add it in the field that says "Add something to the fridge...", and
      hitting the plus sign. Alternatively, you can narrow the list by using the
      search bar above. To delete an item, click on the circle next to the name
      of the item.
      <p />
      After drop off, please increment accordingly so the fridge has the most
      up-to-date quantities. If you take something from the fridge, please
      subtract from the total. You can use the arrows on either side of the
      quantity to add and subtract! <p />
      <div className="legend p-2">
            <h4 className="text-center">Fridge Key</h4>
                        <FontAwesomeIcon icon={faSquare} id="urgent" />  Most urgently needed items! Donate these first.
 <p />
                        <FontAwesomeIcon icon={faSquare} id="good" />  These items are in
                        stock, but you can still donate if you want to.
                        <p />
                    <FontAwesomeIcon icon={faSquare} id="surplus" />  There are more than
                        enough of these items, no need to donate.
      </div>
    </div>
  );
}

export default Aside;
