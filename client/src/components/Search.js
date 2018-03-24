import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import Slider from "material-ui/Slider";
import Toggle from "material-ui/Toggle";

import "./stylesheets/Search.css";

class Search extends Component {
  state = {
    value: 1
  };
  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div className="Search">
        <div className="search-formish">
          <h2>What are you looking for?</h2>
          <div className="content">
            <DatePicker hintText="2018-3-27" />
            <SelectField
              floatingLabelText="Category"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="None" />
              <MenuItem value={2} primaryText="Cuisine" />
              <MenuItem value={3} primaryText="Sightseeing" />
              <MenuItem value={4} primaryText="Entertainment" />
              <MenuItem value={5} primaryText="Shopping" />
            </SelectField>
            <div className="sliders">
              <p>How much time do you have?</p>
              <Slider />
            </div>
            <Toggle label="Safe search (for families)" />
            <div className="submitish">
              <RaisedButton primary={true}>
                <Link to="/tours">Find</Link>
              </RaisedButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
