import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Input from "./";
import { wInfo } from "../../../../.storybook/utils";

const stories = storiesOf("Components/Atoms", module);

stories.add(
  "Input",
  () => (
    <Input
      value={text("text", "test")}
      placeholder={text("placeholder", "test placeholder")}
    />
  ),
  wInfo(`
    ### Notes

    This is a Input(input tag)


    ### Usage
    ~~~js
      const value = '';
      const onChange = (e) => value = e.target.value;

      <Input value={value} 
             onChange={onChange}
      />
    ~~~
  `)
);

export default undefined;
