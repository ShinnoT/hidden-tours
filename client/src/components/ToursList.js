import React, { Component } from "react";
import { Link } from "react-router-dom";

class ToursList extends Component {
  render() {
    return (
      <div className="TourList">
        <h1>tours list page</h1>
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default ToursList;
