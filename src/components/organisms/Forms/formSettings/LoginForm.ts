import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

import rootStore from "stores/RootStore";

const plugins = {
  dvr: dvr(validatorjs)
};

const fields = [
  {
    label: "Your name",
    name: "nickname",
    value: rootStore.userStore.nickname,
    rules: "required|string|between:5,20",
    placeholder: "닉네임을 기입하고 시작해주세요.",
    message: "닉네임을 확인해주세요.",
    handlers: {
      onChange: field => e => {
        field.set(e.target.value);
        rootStore.userStore.setField("nickname", e.target.value);
      }
    }
  }
];

const hooks = {
  onSuccess(form: any) {
    rootStore.userStore.signin(form.values().nickname);
    return;
  },

  onError(form: any) {
    form.invalidate("입력 값이 누락되었습니다.");
  }
};

export default new MobxReactForm({ fields }, { plugins, hooks });
