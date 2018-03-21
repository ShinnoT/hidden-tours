import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import HomePage from "./components/HomePage";
import Search from "./components/Search";
import ToursList from "./components/ToursList";
import Tour from "./components/Tour";
import Plan from "./components/Plan";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title="Elisa's Birthday Gift"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={Search} />
        <Route path="/tours" exact component={ToursList} />
        <Route path="/tours/:tourId" exact component={Tour} />
        <Route path="/tours/:tourId/:planId" exact component={Plan} />
      </MuiThemeProvider>
    );
  }
}

export default App;
