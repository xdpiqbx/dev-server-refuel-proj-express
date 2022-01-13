const carRepository = require('../db/repositories/carRepository');

const httpStatus = require('../helpers/HttpResponseStatusCodes');

class CarService {
  constructor() {
    this.repo = {
      cars: carRepository
    };
  }

  serviceErrorCatcher(error) {
    if (error.isInRepoErr) {
      return error;
    }
    error.isInServiceErr = true;
    error.status = httpStatus.INTERNAL_SERVER_ERROR;
    return error;
  }

  async getAllCarsModelNumberGas() {
    try {
      return await this.repo.cars.getAllCarsModelNumberGas();
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }

  async getAllCarsModelNumber() {
    try {
      return await this.repo.cars.getAllCarsModelNumber();
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async getCarByIdWithoutDriversIds(carId) {
    try {
      return await this.repo.cars.getCarByIdWithoutDriversIds(carId);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async getInfoAboutCarWithDriversNames(carId) {
    try {
      return await this.repo.cars.getInfoAboutCarWithDriversNames(carId);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async setCarGasolineResidue(carId, gasoline_residue) {
    try {
      return await this.repo.cars.setCarGasolineResidue(
        carId,
        gasoline_residue
      );
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  // **************************************************************************
  async getDriversByCarId(carId) {
    try {
      return await this.repo.cars.getDriversByCarId(carId);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async addNewCarToDb(newCar) {
    try {
      return await this.repo.cars.addNewCarToDb(newCar);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async updateCarData(carData) {
    try {
      return await this.repo.cars.updateCarData(carData);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
}

module.exports = CarService;
