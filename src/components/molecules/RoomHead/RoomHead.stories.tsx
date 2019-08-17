import React from "react";
import { storiesOf } from "@storybook/react";

import RoomHead from "./";
import rootStore from "stores/RootStore";
import { wInfo } from "../../../../.storybook/utils";

const stories = storiesOf("Components/Molecules", module);

stories.add(
  "RoomHead",
  () => (
    <React.Fragment>
      <h2>
        Room 페이지 상단(title은 mobx store에서 관리하기 때문에 지금은 빈칸)
      </h2>
      <RoomHead roomStore={rootStore.roomStore} />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is RoomHead
  Room container 상단의 방제목, 방 나가기 버튼

  ### Usage

  ~~~js
  <BaseTemplte HeadComponent={RoomHead}
               Footer={MessageField}
  >
    <RoomBody />
  </BaseTemplte>
~~~
`)
);

export default undefined;
