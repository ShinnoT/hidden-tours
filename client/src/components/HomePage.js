import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>hello world</h1>
        <Link to="/search">search</Link>
      </div>
    );
  }
}

export default HomePage;
