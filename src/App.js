import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import data from "./data";
import SliderPerson from "./components/SliderPerson";
import SliderButton from "./components/SliderButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
      slideIndex: 0,
    };
  }
  lastSlide = () => {
    const lastIndex = this.state.people.length - 1;

    if (this.state.slideIndex < 0) {
      this.setState({ slideIndex: lastIndex });
    }
    if (this.state.slideIndex > lastIndex) {
      this.setState({ slideIndex: 0 });
    }
  };

  componentDidUpdate() {
    this.lastSlide();
  }

  componentDidMount() {
    let slider = setInterval(() => {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    }, 3000);
    return () => clearInterval(slider);
  }

  prevSlide = () => {
    this.setState({ slideIndex: this.state.slideIndex - 1 });
  };
  nextSlide = () => {
    this.setState({ slideIndex: this.state.slideIndex + 1 });
  };
  render() {
    return (
      <Container maxWidth="lg" data-test="component-app">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              data-test="review-title"
              component="h4"
              variant="h4"
              align="center"
              color="primary"
              gutterBottom
            >
              <span>/ </span>Reviews
            </Typography>
          </Grid>
        </Grid>

        <div className="section-center">
          {this.state.people.map((person, personIndex) => {
            return (
              <SliderPerson
                data-test="slider-person-component"
                person={person}
                personIndex={personIndex}
                slideIndex={this.state.slideIndex}
                people={this.state.people}
                key={person.id}
              />
            );
          })}
          <SliderButton
            data-test="slider-button-component"
            slideIndex={this.state.slideIndex}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
          />
        </div>
      </Container>
    );
  }
}
