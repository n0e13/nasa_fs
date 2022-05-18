import React from "react";
import { shallow } from "enzyme";
import LandingFormAdd from "./LandingFormAdd";

describe("LandingFormAdd", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingFormAdd />);
    expect(wrapper).toMatchSnapshot();
  });
});
