import React, { useState, useEffect } from "react";
import "./../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import uuid from "uuid";

const App = ({keyword}) => {
  //need item name, quantity
  const [items, setItems] = useState([
    { id: uuid(), itemName: "Kale", quantity: 1, isSelected: false },
    { id: uuid(), itemName: "Bread", quantity: 3, isSelected: false },
    { id: uuid(), itemName: "Tomato", quantity: 2, isSelected: false },
  ]);

  

  const [inputValue, setInputValue] = useState("");

  //When button is clicked a new item will be created with unique id from uuid,
  //default quantity of 1, and the name as the input value.
  const handleAddButtonClick = () => {
    const newItem = {
      id: uuid,
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
  };

  const toggleDelete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  return (
    <>
      <div className="add-item-box">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="add-item-input"
          placeholder="Add something to the fridge..."
        />
        <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
      </div>
      <div className="item-list">
        {items.filter(item => item.itemName.toLowerCase().includes(keyword.toLowerCase())).map((item, index) => (
          <div className="item-container">
            <div className="item-name" onClick={() => toggleDelete(index)}>
              {item.isSelected ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="deleted">{item.itemName}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{item.itemName}</span>
                </>
              )}
            </div>

            <div className="quantity">
              <button>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => handleQuantityDecrease(index)}
                />
              </button>
              <span> {item.quantity} </span>
              <button>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => handleQuantityIncrease(index)}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
