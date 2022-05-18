import React from "react";
import { shallow } from "enzyme";
import NeasMenuViews from "./NeasMenuViews";

describe("NeasMenuViews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasMenuViews />);
    expect(wrapper).toMatchSnapshot();
  });
});
