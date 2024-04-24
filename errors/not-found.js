const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-api-err");
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
