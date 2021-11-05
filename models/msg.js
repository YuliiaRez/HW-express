const { v4: uuidv4 } = require("uuid");

const msgsDb = [
  {
    id: "1",
    textMsg: "Hi Mary! How’re you?",
    email: "test1@test.test",
    timeDate: "Fri, 08 Oct 2021 10:30:11 GMT",
  },
];

class Msg {
  static msgs = msgsDb;
  static getMsgs() {
    return Msg.msgs;
  }
  static getMsgById(id) {
    const [foundMsg] = Msg.msgs.filter((u) => u.id == id);
    return foundMsg;
  }
  static createMsg(body) {
    const createdMsg = { ...body, id: uuidv4() };
    Msg.msgs.push(createdMsg);
    return Msg.msgs[Msg.msgs.length - 1];
  }
  static updateMsg(id, body) {
    const indexOfUptMsg = Msg.msgs.findIndex((msg) => id === msg.id);
    console.log(`indexOfUptMsg`, indexOfUptMsg);
    const updatedMsg = { ...Msg.msgs[indexOfUptMsg], ...body };
    Msg.msgs[indexOfUptMsg] = updatedMsg;
    if (indexOfUptMsg == -1) {
      return "";
    } else {
      return updatedMsg;
    }
  }
  static deleteMsg(id) {
    const indexOfMsg = Msg.msgs.findIndex((msg) => id === msg.id);
    const [deletedMsg] = Msg.msgs.splice(indexOfMsg, 1);
    if (indexOfMsg == -1) {
      return "";
    } else {
      return deletedMsg;
    }
  }
}

module.exports = Msg;
