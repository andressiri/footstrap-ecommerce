// @description Send email verification code
// @route POST /api/v1/users/forgot-password
// @access Public
const asyncHandler = require('express-async-handler');
const { User } = require('../../models');
const requestTimeLimiter = require('../../helpers/requestTimeLimiter');
const generateCode = require('../../helpers/generateCode');
const getMailTemplate = require('../../templates/codeMail');
const mailer = require('../../config/mailer');

module.exports = asyncHandler(async (req, res) => {
  const email = req.body.email;

  const userName = await User.findOne({
    raw: true,
    attributes: ['name'],
    where: { email }
  });

  if (!userName) {
    res.status(404);
    throw new Error('No user registered with that email');
  };

  // check at least 10 seconds have passed from last mail sent
  requestTimeLimiter(req, res, 'forgotPasswordCodeTimestamp', 10000);

  req.session.code = generateCode();
  req.session.emailToVerify = email;

  const mailTemplate = getMailTemplate(userName.name, req.session.code);
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
