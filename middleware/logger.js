/**
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {`next` middleware function`}
 * @description Logs the request method, path, and a timestamp to the console
 * @example
 * const logger = require("./middleware/logger");
 * 
 * app.use(logger);
 * 
 * app.get("/", (req, res) => {
 *  res.send("Hello World!");
 * }
 * 
 * // Console Output
 * GET / 1615327747657
 */

const logger = (req, res, next) => {
  res.on("finish", function() {
    console.log(req.method, decodeURI(req.url), res.statusCode, res.statusMessage);
  });
  next();
};

module.exports = logger;