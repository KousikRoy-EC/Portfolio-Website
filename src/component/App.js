import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact.js";
import Projects from "./Projects";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
