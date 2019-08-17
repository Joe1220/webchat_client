import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import Label from "./";
import { wInfo } from "../../../../.storybook/utils";

const stories = storiesOf("Components/Atoms", module);

stories.add(
  "Label",
  () => (
    <React.Fragment>
      <Label
        sm={boolean("small label", false)}
        lg={boolean("big label", false)}
        blue={boolean("blue label", false)}
      >
        {text("label", "test label")}
      </Label>
    </React.Fragment>
  ),
  wInfo(`
    ### Notes

    This is a Label(label tag)


    ### Usage
    ~~~js
      <Label blue>hello</Label>
    ~~~
  `)
);

export default undefined;
