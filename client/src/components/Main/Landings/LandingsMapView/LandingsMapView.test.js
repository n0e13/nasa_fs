import React from "react";
import { shallow } from "enzyme";
import LandingsMapView from "./LandingsMapView";

describe("LandingsMapView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsMapView />);
    expect(wrapper).toMatchSnapshot();
  });
});
