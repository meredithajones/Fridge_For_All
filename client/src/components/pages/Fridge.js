import React, { Component } from "react";
import inventory from "./inventory.json";
import LittleFridge from "../LittleFridge";


class Fridge extends Component {
  state = {
    inventory
  };

  render() {
    return (
      <div>
        {this.state.inventory
          ? this.state.inventory.map((inventory, index) => {
              return (
                <LittleFridge
                  item={inventory.item}
                  qty={inventory.qty}
                />
              );
            })
          : "No items found"}
      </div>
    );
  }
}


  export default Fridge;