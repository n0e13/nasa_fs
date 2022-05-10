import React from "react";
import { shallow } from "enzyme";
import LandingsMenuViews from "./LandingsMenuViews";

describe("LandingsMenuViews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsMenuViews />);
    expect(wrapper).toMatchSnapshot();
  });
});
