const Msg = require("../models/msg");
const { v4: uuidv4 } = require("uuid");

module.exports.getMsgs = (req, res) => {
  const foundMsgs = Msg.getMsgs();
  res.status(200).send(foundMsgs);
};

module.exports.createMsg = (req, res) => {
  const { body } = req;

  const createdMsg = Msg.createMsg(body);

  res.status(201).send(createdMsg);
};

module.exports.updateMsg = (req, res) => {
  const { body } = req;
  const {
    params: { msgId },
  } = req;
  const updatedMsg = Msg.updateMsg(msgId, body);
  if (updatedMsg) {
    res.status(200).send(updatedMsg);
  } else {
    res.status(404).send(`ID: ${msgId} doesn't exist`);
  }
};

module.exports.deleteMsg = (req, res) => {
  const {
    params: { msgId },
  } = req;
  const deletedMsg = Msg.deleteMsg(msgId);
  if (deletedMsg) {
    res.status(200).send(deletedMsg);
  } else {
    res.status(404).send(`ID: ${msgId} doesn't exist`);
  }
};
