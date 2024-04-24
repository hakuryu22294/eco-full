const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-api-err");

class UnAuthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
