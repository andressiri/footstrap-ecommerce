// overwrite express default error handler
module.exports = (err, req, res) => {
  const statusCode = res.statusCode || 500;  
  
  if (process.env.NODE_ENV === 'development') console.log(err.stack);
  
  res.status(statusCode).json({ message: err.message });
}