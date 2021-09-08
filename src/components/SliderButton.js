import React, { Component } from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default class SliderButton extends Component {
  render() {
    return (
      <ButtonGroup color="primary" variant="contained">
        <Button onClick={this.props.prevSlide}>Prev</Button>
        <Button onClick={this.props.nextSlide}>next</Button>
      </ButtonGroup>
    );
  }
}
