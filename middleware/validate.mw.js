const yup = require("yup");

module.exports.validateMsg = async (req, res, next) => {
  const { body } = req;

  // const TEXT_SCHEMA =

  const MSG_VALIDATION_SCHEMA = yup.object().shape({
    textMsg: yup.string().trim().min(1).max(400).required(),
    email: yup.string().email(),
  });

  try {
    const validatedMsg = await MSG_VALIDATION_SCHEMA.validate(body);
    req.body = validatedMsg;
    next();
  } catch (e) {
    next(e);
  }
};
