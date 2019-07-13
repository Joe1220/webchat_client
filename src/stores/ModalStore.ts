import { action, observable } from 'mobx'

class ModalStore {
  @observable visible: boolean
  @observable data: object | null
  
  constructor() {
    this.visible = false
    this.data = null
  }

  @action.bound
  toggleModal() {
    this.visible = !this.visible
  }

  @action.bound
  closeModal(type) {
    this.visible = false
    this.data = type
  }
}

export default ModalStore