import React from "react";
import { storiesOf } from "@storybook/react";

import A from "./";
import { wInfo } from "../../../../.storybook/utils";

storiesOf("Components/Atoms", module).add(
  "A",
  () => (
    <React.Fragment>
      <h4>Small A</h4>
      <A href="/" sm>
        A
      </A>
      <h4>Default A</h4>
      <A href="/">A</A>
      <h4>Large A</h4>
      <A href="/" lg>
        A
      </A>
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is a A(a tag)
  외부 url참조 시 사용(내부 url은 Link 사용)

  ### Usage
  ~~~js
    <A href="/">A</A>
  ~~~
`)
);
