//To wrap  route handlers and middleware so that any errors are automatically passed to Express’s error handler, avoiding the need for repetitive try/catch blocks.
const catchAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;