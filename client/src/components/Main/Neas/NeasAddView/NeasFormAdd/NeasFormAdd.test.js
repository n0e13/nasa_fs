import React from "react";
import { shallow } from "enzyme";
import NeasFormAdd from "./NeasFormAdd";

describe("NeasFormAdd", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasFormAdd />);
    expect(wrapper).toMatchSnapshot();
  });
});
