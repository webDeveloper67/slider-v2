import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, Avatar, Box } from "@material-ui/core";

export default class SliderPerson extends Component {
  render() {
    const { image, name, title, quote } = this.props.person;
    const { slideIndex, personIndex, people } = this.props;
    {
      let position = "nextSlide";
      if (personIndex === slideIndex) {
        position = "activeSlide";
      }

      if (
        personIndex === slideIndex - 1 ||
        (slideIndex === 0 && personIndex === people.length - 1)
      ) {
        position = "lastSlide";
      }
      return (
        <article className={position} data-test="slider-person-container">
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
    }
  }
}

SliderPerson.propTypes = {
  person: PropTypes.object.isRequired,
  personIndex: PropTypes.number.isRequired,
  slideIndex: PropTypes.number.isRequired,
  people: PropTypes.array.isRequired,
};