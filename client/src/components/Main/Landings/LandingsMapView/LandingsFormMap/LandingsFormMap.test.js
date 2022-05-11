import React from "react";
import { shallow } from "enzyme";
import LandingsFormMap from "./LandingsFormMap";

describe("LandingsFormMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsFormMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
