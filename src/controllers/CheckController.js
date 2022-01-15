const MainController = require('./MainController');
const CheckService = require('../services/CheckService');

class CheckController extends MainController {
  constructor() {
    super();
    this.controller = {
      checkService: new CheckService()
    };
  }

  async saveCheckToDb(req, res, next) {
    try {
      const result = await this.controller.checkService.saveCheckToDb(req.body);
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getAllChecks(req, res, next) {
    try {
      const result = await this.controller.checkService.getAllChecks();
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getChecksByCarId(req, res, next) {
    try {
      const { carId } = req.body;
      const result = await this.controller.checkService.getChecksByCarId(carId);
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getChecksByCarIdForSpecificMonth(req, res, next) {
    try {
      const { carId, year, month } = req.body;
      const result =
        await this.controller.checkService.getChecksByCarIdForSpecificMonth(
          carId,
          year,
          month
        );
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
}

module.exports = CheckController;
