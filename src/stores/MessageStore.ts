import { observable, action } from "mobx";

import MessageModel, { IMessage } from "./models/MessageModel";

class RoomStore {
  @observable root: any;
  @observable message;
  @observable messages: IMessage[];
  constructor(root?) {
    this.root = root;
    this.message = "";
    this.messages = [];
  }

  // id는 roomId
  @action.bound
  async sendMessage() {
    if (this.message === "") {
      return alert("메세지를 1개 이상 입력해주세요.");
    }
    await this.root.socketStore.send("message", {
      userId: this.root.userStore.currentUser.id,
      roomId: this.root.roomStore.activatedRoom.id,
      message: this.message
    });
    this.message = "";
  }

  //실체 호출은 roomStore에서 activatedRoom 설정 시 호출
  @action.bound
  async getMessages(messages) {
    this.messages = messages.map(message => new MessageModel(this, message));
  }

  // 12개월동안 메세지의 양
  @action.bound
  async getAllMessages() {
    await this.root.socketStore.send("get_messages");

    await this.root.socketStore.on(
      "get_messages",
      this.setField.bind(this, "messages")
    );
  }

  @action.bound
  setMessage(e) {
    this.message = e.target.value;
  }

  @action.bound
  setField(field: string, value: any) {
    this[field] = value;
  }
}

export default RoomStore;
