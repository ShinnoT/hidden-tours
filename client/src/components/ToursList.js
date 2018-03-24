import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class ToursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }
  componentDidMount() {
    fetch("/tours")
      .then(res => res.json())
      .then(tours => this.setState({ tours }));
  }
  render() {
    console.log(this.state.tours);

    return (
      <div className="ToursList">
        {/* <h1>tours list page</h1> */}
        {/* {this.state.tours.map(tour => <p key={tour.id}>{tour.id}</p>)} */}
        {this.state.tours.map(tour => {
          return (
            <Card key={tour.id} containerStyle={{ margin: "10px 0" }}>
              <CardHeader title={tour.tourName} />
              <CardMedia
              // overlay={
              //   <CardTitle
              //     title="Overlay title"
              //     subtitle="Overlay subtitle"
              //   />
              // }
              >
                <img src={tour.tourImage} alt="kinkakuji" />
              </CardMedia>
              <CardTitle title={tour.tourName} subtitle="The golden pavilion" />
              <CardText>{tour.tourDesc}</CardText>
              <CardActions>
                <FlatButton
                  containerElement={<Link to={`/tours/${tour.id}`} />}
                  label="Save"
                />
                <FlatButton
                  label="Tour"
                  containerElement={<Link to={`/tours/${tour.id}`} />}
                >
                  {/* <Link to={`/tours/${tour.id}`} /> */}
                </FlatButton>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default ToursList;
