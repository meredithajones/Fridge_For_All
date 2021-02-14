import Inventory from './Inventory';
import InventoryCount from './InventoryCount';
import React, {useState} from 'react';

function InventoryList() {
    const[items, setItems] = useState([])

    //Ensures that only text will pass through the input box
    const addInventory = item => {
        if(!item.text || /^\s*$/.test(item.text)) {
            return
        }

        const newItem = [item, ...items]

        setItems(newItem);
        console.log(item, ...items);
    }


    return (
        <div>
            <h2>Dropping Something Off? Picking something up? Please add or subtract it below:</h2>
            <Inventory onSubmit={addInventory} />
        </div>
    );
}

export default InventoryList
