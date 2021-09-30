import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";
import Contact from "./Contact";
import Projects from "./Projects";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
    
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>

          <Route exact path="/Body">
            <Body />
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
