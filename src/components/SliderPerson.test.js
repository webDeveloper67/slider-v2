import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SliderPerson from "./SliderPerson";

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  person: {},
  personIndex: 2,
  slideIndex: 0,
  people: [],
};

test("SliderPerson component renders without crashing", () => {
  const wrapper = shallow(<SliderPerson {...initialProps} />);
  const sliderPersonComponent = wrapper.find(
    '[data-test="slider-person-container"]'
  );
  expect(sliderPersonComponent.length).toBe(1);
});

test("doesn't throw PropType warnings", () => {
  expect(SliderPerson.propTypes.person).toBeDefined();
  expect(SliderPerson.propTypes.personIndex).toBeDefined();
  expect(SliderPerson.propTypes.slideIndex).toBeDefined();
  expect(SliderPerson.propTypes.people).toBeDefined();
});
