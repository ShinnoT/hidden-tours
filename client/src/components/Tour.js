import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chip from "material-ui/Chip";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

import "./stylesheets/Tour.css";

const plans = [
  {
    id: 1,
    planTitle: "Kinkakuji Temple",
    planTime: 30,
    planLocation: {
      lat: "",
      long: ""
    },
    planImage:
      "https://favy-inbound-singapore.s3.amazonaws.com/uploads/topic_item/image/1450/retina_shutterstock_344861591.jpg"
  },
  {
    id: 2,
    planTitle: "Fortune Garden",
    planTime: 60,
    planLocation: {
      lat: "",
      long: ""
    },
    planImage:
      "https://handluggageonly.co.uk/wp-content/uploads/2017/05/iStock-509472000.jpg"
    // planImage: images[(i += 1)]
  },
  {
    id: 3,
    planTitle: "Kamogawa River",
    planTime: 20,
    planLocation: {
      lat: "",
      long: ""
    },
    planImage: "https://sase.org/wp-content/uploads/2016/06/Kyoto_8274.jpg"
    // planImage: images[(i += 2)]
  },
  {
    id: 4,
    planTitle: "Roll Up Icecream Shop",
    planTime: 10,
    planLocation: {
      lat: "",
      long: ""
    },
    planImage:
      "https://img.theculturetrip.com/840x440/smart/wp-content/uploads/2017/01/kyoto-1024x684.jpg"
    // planImage: images[(i += 3)]
  },
  {
    id: 5,
    planTitle: "Gear Art Complex",
    planTime: 120,
    planLocation: {
      lat: "",
      long: ""
    },
    planImage:
      "https://images.adsttc.com/media/images/59e5/2706/b22e/3839/3400/004f/large_jpg/open-uri20171016-29817-qw6uck.jpg?1508189949"
    // planImage: images[(i += 4)]
  },
  {
    id: 6,
    planTitle: "Imai Shokudo",
    planTime: 120,
    planLocation: {
      lat: "",
      long: ""
    },
    planImage:
      "https://handluggageonly.co.uk/wp-content/uploads/2017/05/iStock-509472000.jpg"
    // planImage: images[(i += 4)]
  }
];

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 400,
    height: 600,
    overflowY: "auto"
  }
};

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: {}
    };
  }

  handleRequestDelete = () => {
    alert("You clicked the delete button.");
  };

  componentDidMount() {
    fetch(`/tours/${this.props.match.params.tourId}`)
      .then(res => res.json())
      .then(tour => this.setState({ tour }));
  }

  render() {
    console.log(this.state.tour.plans);

    return (
      <div className="Tour">
        <h1>{this.state.tour.tourName}</h1>
        <div className="tour-info">
          <p className="tour-description">{this.state.tour.tourDesc}</p>
          <p>
            <strong>Tour time:</strong> 3.5 hours
          </p>
        </div>
        <div className="grid-container" style={styles.root}>
          <GridList cellHeight={180} style={styles.gridList}>
            <Subheader>December</Subheader>
            {plans.map(plan => (
              <GridTile
                key={plan.id}
                title={plan.planTitle}
                subtitle={
                  <span>
                    by <b>Shinno</b>
                  </span>
                }
                actionIcon={
                  <IconButton>
                    <StarBorder color="white" />
                  </IconButton>
                }
              >
                <img src={plan.planImage} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <div className="tour-container">
          <p>Tags:</p>
          <div className="chips-container">
            <Chip onRequestDelete={this.handleRequestDelete}>Food</Chip>
            <Chip onRequestDelete={this.handleRequestDelete}>Cycling</Chip>
            <Chip onRequestDelete={this.handleRequestDelete}>Kyoto</Chip>
            <Chip onRequestDelete={this.handleRequestDelete}>Day Tour</Chip>
          </div>
        </div>
      </div>
    );
  }
}

export default Tour;
