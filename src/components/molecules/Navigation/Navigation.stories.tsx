import React from "react";
import { storiesOf } from "@storybook/react";

import Navigation from "./";
import { wInfo } from "../../../../.storybook/utils";

storiesOf("Components/Molecules", module).add(
  "Navigation",
  () => (
    <React.Fragment>
      <h4>Navigation</h4>
      <Navigation />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is Navigation
  Nav Atoms컴포넌트 내부 li 태그를 이용해 navigation 형태 구현

  ### Usage

  ~~~js
    <Navigation />
  ~~~
`)
);
