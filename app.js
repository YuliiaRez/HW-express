const express = require("express");
const msgController = require("./controllers/msgs.controller");

const validate = require("./middleware/validate.mw");
const app = express();

app.use(express.json());

app.get("/msgs", msgController.getMsgs);

app.post("/msgs", validate.validateMsg, msgController.createMsg);
app.patch("/msgs/:msgId", msgController.updateMsg);

app.delete("/msgs/:msgId", msgController.deleteMsg);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
