import React from "react";
import { shallow } from "enzyme";
import NeasCardCRUD from "./NeasCardCRUD";

describe("NeasCardCRUD", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasCardCRUD />);
    expect(wrapper).toMatchSnapshot();
  });
});
