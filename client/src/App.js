import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';

//importing pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Fridge from "./components/pages/Fridge";
import Locations from "./components/pages/Locations";
import Login from "./components/pages/Login";

//importing components
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/fridge" component={Fridge} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Button variant="contained" color="primary">
      Hello World
    </Button>
        <Footer />
      </div>
    </Router>
  );
}

export default App;