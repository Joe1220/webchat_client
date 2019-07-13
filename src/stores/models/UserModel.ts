import { observable } from 'mobx'

export interface IUserModel {
  id: number,
  nickname: string
}

class UserModel {
  store
  @observable id
  @observable nickname

  constructor(user: any) {
    const { id, nickname } = user
    this.id = id
    this.nickname = nickname
  }
}

export default UserModel