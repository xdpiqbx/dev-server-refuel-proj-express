const httpStatus = require('../helpers/HttpResponseStatusCodes');

const MainController = require('./MainController');
const DriverService = require('../services/DriverService');

class DriverController extends MainController {
  constructor() {
    super();
    this.controller = {
      driverService: new DriverService()
    };
  }

  async getAllDriversByAlphabet(req, res, next) {
    try {
      const result =
        await this.controller.driverService.getAllDriversByAlphabet();
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
  async getDriverByChatId(req, res, next) {
    try {
      const { chatId } = req.body;
      const result = await this.controller.driverService.getDriverByChatId(
        chatId
      );
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
  async getAllDriversWithoutChatId(req, res, next) {
    try {
      const result =
        await this.controller.driverService.getAllDriversWithoutChatId();
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
  async getDriverByIdWithoutCars(req, res, next) {
    try {
      const { driverId } = req.body;
      const result =
        await this.controller.driverService.getDriverByIdWithoutCars(driverId);
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
  async getDriverByIdWithCars(req, res, next) {
    try {
      const { driverId } = req.body;
      const result = await this.controller.driverService.getDriverByIdWithCars(
        driverId
      );
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
  async setTlgChatIdToDriver(req, res, next) {
    try {
      const { driverId, tlg_chatId } = req.body;
      const result = await this.controller.driverService.setTlgChatIdToDriver(
        driverId,
        tlg_chatId
      );
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
}

module.exports = DriverController;
