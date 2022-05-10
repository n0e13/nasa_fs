import React from "react";
import { shallow } from "enzyme";
import LandingsListView from "./LandingsListView";

describe("LandingsListView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsListView />);
    expect(wrapper).toMatchSnapshot();
  });
});
