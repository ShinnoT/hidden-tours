import React, { Component } from "react";
import { Link } from "react-router-dom";

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: {}
    };
  }
  componentDidMount() {
    fetch(
      `/tours/${this.props.match.params.tourId}/${
        this.props.match.params.planId
      }`
    )
      .then(res => res.json())
      .then(plan => this.setState({ plan }));
  }
  render() {
    return (
      <div className="Plan">
        <h1>Plan Page</h1>
        <p>{this.state.plan.id}</p>
      </div>
    );
  }
}

export default Plan;
