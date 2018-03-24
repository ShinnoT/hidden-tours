import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="overlay">
          <Link className="explore" to="/search">
            <i className="far fa-compass compass" />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
