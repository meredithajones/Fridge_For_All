import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//importing pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Fridge from "./components/pages/Fridge";
import Locations from "./components/pages/Locations";

//importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/fridge" component={Fridge} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;