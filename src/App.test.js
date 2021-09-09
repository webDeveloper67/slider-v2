import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

test("correctly showing the review title", () => {
  const wrapper = shallow(<App />);
  const reviewTitle = wrapper.find('[data-test="review-title"]');
  expect(reviewTitle.text()).toEqual("/ Reviews");
});

test("render SliderButton as a Child compnent", () => {
  const wrapper = mount(<App />);
  const SliderButton = wrapper.find('[data-test="slider-button-component"]');
  expect(SliderButton.length).toBe(1);
});

test("render SliderPerson as a Child compnent", () => {
  const wrapper = mount(<App />);
  expect(
    wrapper.find('[data-test="slider-person-component"]').children()
  ).toHaveLength(4);
});
