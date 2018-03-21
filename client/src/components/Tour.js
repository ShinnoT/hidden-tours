import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tour extends Component {
  render() {
    return (
      <div className="Tour">
        <h1>Single Tour page</h1>
        <p>ID: {this.props.match.params.tourId}</p>
      </div>
    );
  }
}

export default Tour;
