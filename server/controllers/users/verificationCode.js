// @description Send email verification code
// @route POST /api/v1/users/verification
// @access Private
const asyncHandler = require('express-async-handler');
const requestTimeLimiter = require('../../helpers/requestTimeLimiter');
const generateCode = require('../../helpers/generateCode');
const getMailTemplate = require('../../templates/codeMail');
const mailer = require('../../config/mailer');

module.exports = asyncHandler(async (req, res) => {
  const { email, name } = req.user;

  // check at least 10 seconds have passed from last mail sent
  requestTimeLimiter(req, res, 'verificationCodeTimestamp', 10000);

  req.session.code = generateCode();
  req.session.emailToVerify = email;

  const mailTemplate = getMailTemplate(name, req.session.code);
  const emailSuccess = await mailer.sendEmail(
    email,
    'Footstrap id verification',
    mailTemplate
  );

  if (emailSuccess.accepted[0] === `${email}`) {
    res.status(201).json({ message: 'Email sent with the code' });

    if (process.env.NODE_ENV === 'development') console.log(`code: ${req.session.code}`); // eslint-disable-line no-console
  } else {
    res.status(500);
    throw new Error('There was a problem sending the email, please try again');
  };
});
