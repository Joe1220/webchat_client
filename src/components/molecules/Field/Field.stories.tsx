import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Field from "./";
import testForm from "components/organisms/Forms/formSettings/LoginForm";
import { wInfo } from "../../../../.storybook/utils";

const stories = storiesOf("Components/Molecules", module);

stories.add(
  "Field",
  () => (
    <React.Fragment>
      <Field
        label={text("text", "test")}
        field={testForm.$("nickname")}
        {...testForm.$("nickname").bind()}
      />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is Field
  label + a 태그 
  Form Organisms 컴포넌트 내부에서 사용

  ### Usage

  ~~~js
    <Field  htmlFor={form.$('nickname').id}
            label={form.$('nickname').label}
            value={userStore.nickname} 
            field={form.$('nickname')}
            placeholder={form.$('nickname').placeholder}
            full
            {...form.$('nickname').bind()}
          />
    />
  ~~~
`)
);

export default undefined;
