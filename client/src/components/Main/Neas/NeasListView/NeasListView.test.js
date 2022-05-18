import React from "react";
import { shallow } from "enzyme";
import NeasListView from "./NeasListView";

describe("NeasListView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasListView />);
    expect(wrapper).toMatchSnapshot();
  });
});
