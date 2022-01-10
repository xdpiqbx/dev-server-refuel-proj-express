const httpStatus = require('../helpers/HttpResponseStatusCodes');

class MainController {
  constructor() {}
  errorCatcher(error) {
    error.status = httpStatus.INTERNAL_SERVER_ERROR;
    return error;
  }

  response(res, data) {
    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      data
    });
  }
}

module.exports = MainController;
