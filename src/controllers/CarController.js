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

  async getCarByIdWithoutDriversIds(req, res, next) {
    try {
      const { carId } = req.params;
      const cars = await this.controller.carService.getCarByIdWithoutDriversIds(
        carId
      );
      super.response(res, cars);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getInfoAboutCarWithDriversNames(req, res, next) {
    try {
      const { carId } = req.params;
      const cars =
        await this.controller.carService.getInfoAboutCarWithDriversNames(carId);
      super.response(res, cars);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async setCarGasolineResidue(req, res, next) {
    try {
      const { carId, gasoline_residue } = req.body;
      const result = await this.controller.carService.setCarGasolineResidue(
        carId,
        gasoline_residue
      );
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getDriversByCarId(req, res, next) {
    try {
      const { carId } = req.params;
      const drivers = await this.controller.carService.getDriversByCarId(carId);
      super.response(res, drivers);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async getTotalInfoAboutCar(req, res, next) {
    try {
      const { carId } = req.params;
      const drivers = await this.controller.carService.getTotalInfoAboutCar(
        carId
      );
      super.response(res, drivers);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async addNewCarToDb(req, res, next) {
    try {
      const newCar = req.body;
      const result = await this.controller.carService.addNewCarToDb(newCar);
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async updateCarData(req, res, next) {
    try {
      const carData = req.body;
      const result = await this.controller.carService.updateCarData(carData);
      super.response(res, result);
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }

  async removeCar(req, res, next) {
    try {
      const { carId } = req.body;
      // move from table cars to removed_cars
      // remove from every driver
      super.response(res, { test: 'remove' });
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
}

module.exports = CarController;
