import React from "react";
import { shallow } from "enzyme";
import MapLandings from "./MapLandings";

describe("MapLandings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MapLandings />);
    expect(wrapper).toMatchSnapshot();
  });
});
