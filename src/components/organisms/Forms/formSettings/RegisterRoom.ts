import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import validatorjs from 'validatorjs'

import rootStore from 'stores/RootStore'

const plugins = {
  dvr: dvr(validatorjs)
}

const fields = [
  {
    label: 'Room Name',
    name: 'roomName',
    rules: 'required|string|between:5,20',
    placeholder: '방이름을 입력해주세요.',
    message: '방이름을 확인해주세요.'
  }
]

const hooks = {
  onSuccess(form: any) {
    rootStore.chatStore.createRoom(form.values().roomName)
    return
  },

  onError(form: any) {
    form.invalidate('입력 값이 누락되었습니다.')
  }
}

export default new MobxReactForm({ fields }, { plugins, hooks })