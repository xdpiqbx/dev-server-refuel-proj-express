const httpStatus = require('../helpers/HttpResponseStatusCodes');

const CarService = require('../services/CarService');

class CarController {
  constructor() {
    this.controller = {
      carService: new CarService()
    };
  }

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

  async listOfCars(req, res, next) {
    try {
      const cars = await this.controller.carService.getAllCars();
      this.response(res, cars);
    } catch (error) {
      next(this.errorCatcher(error));
    }
  }

  async driversAdmittedToCar(req, res, next) {
    try {
      const { carId } = req.params;
      const drivers = await this.controller.carService.getDriversByCarId(carId);
      this.response(res, drivers);
    } catch (error) {
      next(this.errorCatcher(error));
    }
  }
}

module.exports = CarController;
