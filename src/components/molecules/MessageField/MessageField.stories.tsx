import React from "react";
import { storiesOf } from "@storybook/react";

import MessageField from "./";
import testForm from "components/organisms/Forms/formSettings/LoginForm";
import { wInfo } from "../../../../.storybook/utils";

const stories = storiesOf("Components/Molecules", module);

stories.add(
  "MessageField",
  () => (
    <React.Fragment>
      <MessageField
        field={testForm.$("nickname")}
        {...testForm.$("nickname").bind()}
      />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is MessageField
  채팅 입력을 위한 채팅방 하단 컴포넌트
  (Input + Button atoms Component)
  독립적 컴포넌트로 MessageStore에서 state관리

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
