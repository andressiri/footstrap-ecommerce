// Mail template te send verification code
module.exports = (userName, code) => {
  return (`
    <h1>Regards from Footstrap!</h1>
    <p>Hello ${userName}! In order to verify your identity you should use the following code:</p>
    <h2>${code}</h2>
    <p>Sorry for the trouble, happy shopping!</p>`
  );
};
