import React from "react";
import { storiesOf } from "@storybook/react";

import RoomItem from "./";
import navStore from "stores/NavStore";
import { wInfo } from "../../../../.storybook/utils";

const tempUsers = [{ id: 0, nickname: "test" }];
const tempId = 0;
const tempTitle = "test";

const stories = storiesOf("Components/Molecules", module);

stories.add(
  "RoomItem",
  () => (
    <React.Fragment>
      <h2>Room 리스트의 각 item(Lobby페이지에서 출력)</h2>
      <RoomItem
        navStore={navStore}
        users={tempUsers}
        id={tempId}
        title={tempTitle}
      />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is RoomItem
  RoomList컴포넌트(방의 목록)에서 각 방의 컴포넌트

  ### Usage

  ~~~js
    {rooms && rooms.map((room, index) => {
      return <RoomItem {...room} key={index} />
    })}
  ~~~
`)
);

export default undefined;
