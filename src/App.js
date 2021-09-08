import React, { Component } from "react";
import {
  ButtonGroup,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Box,
} from "@material-ui/core";
import data from "./data";

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
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography
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
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === this.state.slideIndex) {
              position = "activeSlide";
            }

            if (
              personIndex === this.state.slideIndex - 1 ||
              (this.state.slideIndex === 0 &&
                personIndex === this.state.people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar alt={name} src={image} />
                </Box>
                <Typography align="center">{name}</Typography>
                <Typography
                  align="center"
                  variant="button"
                  display="block"
                  color="secondary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography align="center" ariant="body2" gutterBottom>
                  {quote}
                </Typography>
              </article>
            );
          })}
          <ButtonGroup color="primary" variant="contained">
            <Button
              onClick={() =>
                this.setState({ slideIndex: this.state.slideIndex - 1 })
              }
            >
              Prev
            </Button>
            <Button
              onClick={() =>
                this.setState({ slideIndex: this.state.slideIndex + 1 })
              }
            >
              next
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    );
  }
}
