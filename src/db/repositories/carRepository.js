const Car = require('../schemas/carSchema');
const Driver = require('../schemas/driverSchema');

const httpStatus = require('../../helpers/HttpResponseStatusCodes');

const repoErrorCatcher = error => {
  error.isInRepoErr = true;
  error.status = httpStatus.INTERNAL_SERVER_ERROR;
  return error;
};

const carRepository = {
  getAllCars: async () => {
    try {
      return await Car.find({}).select('number model');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getDriversByCarId: async carId => {
    try {
      return await Car.findById(carId)
        .select('-gasoline_residue')
        .populate('driversIds', 'name');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  }
};
/*
Tasks:
  getTotalGasolineResidue
  getTotalInfoAboutCar
*/

module.exports = carRepository;
