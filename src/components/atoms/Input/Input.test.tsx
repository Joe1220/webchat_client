import React from "react";
import { mount } from "enzyme";
import Theme from "components/_settings/styles";

import Input from "./";

describe("Input Atom Component", () => {
  let component = null;
  let value = "";
  const onChange = e => {
    value = e.target.value;
  };

  it("render correctly", () => {
    component = mount(<Input theme={Theme} onChange={onChange} />);
  });
  it("handle Change", () => {
    const mockedEvet = {
      target: { value: "hello" }
    };
    component.simulate("change", mockedEvet);
    expect(value).toBe("hello");
  });
});
