import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "@material-ui/core";

export default class SliderButton extends Component {
  render() {
    return (
      <ButtonGroup
        color="primary"
        variant="contained"
        data-test="slider-button-container"
      >
        <Button onClick={this.props.prevSlide} data-test="prev-button">
          Prev
        </Button>
        <Button onClick={this.props.nextSlide} data-test="next-button">
          next
        </Button>
      </ButtonGroup>
    );
  }
}

SliderButton.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};