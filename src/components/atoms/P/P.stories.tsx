import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import { wInfo } from "../../../../.storybook/utils";
import P from "./";

const stories = storiesOf("Components/Atoms", module);

stories.add(
  "Text",
  () => (
    <>
      <P
        sm={boolean("small text", false)}
        lg={boolean("large text", false)}
        blue={boolean("blue text", false)}
      >
        {text("text", "test text")}
      </P>
    </>
  ),
  wInfo(`
    ### Notes

    This is a Text(P tag)


    ### Usage
    ~~~js
      <P sm>hello</P>
    ~~~
  `)
);

export default undefined;
