import React from "react";
import { shallow } from "enzyme";
import NeasAddView from "./NeasAddView";

describe("NeasAddView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasAddView />);
    expect(wrapper).toMatchSnapshot();
  });
});
