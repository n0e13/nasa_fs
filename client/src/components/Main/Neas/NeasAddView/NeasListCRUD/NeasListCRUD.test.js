import React from "react";
import { shallow } from "enzyme";
import NeasListCRUD from "./NeasListCRUD";

describe("NeasListCRUD", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasListCRUD />);
    expect(wrapper).toMatchSnapshot();
  });
});
