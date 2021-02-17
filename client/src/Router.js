import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//importing pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Fridge from "./components/pages/Fridge";
import Locations from "./components/pages/Locations";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import InventoryList from "./components/Inventory/InventoryList";
import SecondInventoryList from "./components/Inventory/SecondInventoryList";
import ThirdInventory from "./components/Inventory/ThirdInventory";


//importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios"
axios.default.withCredentials = true

function Router() {
  return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/fridge" component={Fridge} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/InventoryList" component={InventoryList} />
          <Route exact path="/SecondInventoryList" component={SecondInventoryList} />
          <Route exact path="/ThirdInventory" component={ThirdInventory} />
          {/* <Route path= "/edit/:id" component={EditItem}/> */}
          <Footer />

        </div>
      </BrowserRouter>
  );
}

export default Router;