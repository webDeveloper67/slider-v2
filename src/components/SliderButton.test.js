import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SliderButton from "./SliderButton";

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  slideIndex: 0,
  prevSlide: jest.fn(() => {}),
  nextSlide: jest.fn(() => {}),
};

test("SliderButton component renders without crashing", () => {
  const wrapper = shallow(<SliderButton {...initialProps} />);
  const sliderButtonComponent = wrapper.find(
    '[data-test="slider-button-container"]'
  );
  expect(sliderButtonComponent.length).toBe(1);
});

test("doesn't throw PropType warnings", () => {
  expect(SliderButton.propTypes.prevSlide).toBeDefined();
  expect(SliderButton.propTypes.nextSlide).toBeDefined();
  expect(SliderButton.propTypes.slideIndex).toBeDefined();
});

test("going to next slide when next button is clicked", () => {
  const wrapper = shallow(<SliderButton {...initialProps} />);
  const nextButton = wrapper.find('[data-test="next-button"]');
  nextButton.simulate("click");
  expect(initialProps.nextSlide).toHaveBeenCalled();
});

test("going to prev slide when prev button is clicked", () => {
  const wrapper = shallow(<SliderButton {...initialProps} />);
  const prevButton = wrapper.find('[data-test="prev-button"]');
  prevButton.simulate("click");
  expect(initialProps.prevSlide).toHaveBeenCalled();
});
