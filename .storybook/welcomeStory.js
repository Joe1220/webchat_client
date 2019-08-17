import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("Welcome", module).add(
  "to your new Storybook🎊",
  () => <div>This is web chat!</div>,
  wInfo(`
    ### Notes
     This is a Typescript + Socket Web Chat!
  `)
);
