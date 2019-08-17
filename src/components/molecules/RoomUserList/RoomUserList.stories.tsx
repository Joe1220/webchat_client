import React from "react";
import { storiesOf } from "@storybook/react";

import RoomUserList from "./";
import { wInfo } from "../../../../.storybook/utils";

const tempUsers = [{ id: 0, nickname: "test" }];
const tempId = 0;
const tempTitle = "test";

const stories = storiesOf("Components/Molecules", module);

stories.add(
  "RoomUserList",
  () => (
    <React.Fragment>
      <h2>Room 에서 유저의 목록</h2>
      <RoomUserList />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is RoomUserList
  RoomStore에서 activatedRoom state 참조

  ### Usage

  ~~~js
   <RoomUserList />
  ~~~
`)
);

export default undefined;
