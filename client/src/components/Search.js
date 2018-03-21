import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h1>Search page</h1>
        <Link to="/tours">Find</Link>
      </div>
    );
  }
}

export default Search;
