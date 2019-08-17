import React from "react";
import { storiesOf } from "@storybook/react";

import Link from "./";
import { wInfo } from "../../../../.storybook/utils";

storiesOf("Components/Atoms", module).add(
  "Link",
  () => (
    <React.Fragment>
      <h4>Small Link</h4>
      <Link to="/" sm>
        Link
      </Link>
      <h4>Default Link</h4>
      <Link to="/">Link</Link>
      <h4>Large Link</h4>
      <Link to="/" lg>
        Link
      </Link>
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is a Link(Link(react-router-dom)  tag)
  내부 url 시 사용(외부 url시 A component 사용)

  ### Usage
  ~~~js
    <Link lg to='/intert_your_router'>hello</Link>
  ~~~
  `)
);
