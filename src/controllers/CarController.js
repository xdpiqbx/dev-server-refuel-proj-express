const httpStatus = require('../helpers/HttpResponseStatusCodes');

const MainController = require('./MainController');
const CarService = require('../services/CarService');

class CarController extends MainController {
  constructor() {
    super();
    this.controller = {
      carService: new CarService()
    };
  }

  async getAllCarsModelNumberGas(req, res, next) {
    try {
      const cars = await this.controller.carService.getAllCarsModelNumberGas();
      super.response(res, cars);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getAllCarsModelNumber(req, res, next) {
    try {
      const cars = await this.controller.carService.getAllCarsModelNumber();
      super.response(res, cars);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async driversAdmittedToCar(req, res, next) {
    try {
      const { carId } = req.params;
      const drivers = await this.controller.carService.getDriversByCarId(carId);
      super.response(res, drivers);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
}

module.exports = CarController;
