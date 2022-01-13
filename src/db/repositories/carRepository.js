const Car = require('../schemas/carSchema');
const Driver = require('../schemas/driverSchema');

const httpStatus = require('../../helpers/HttpResponseStatusCodes');

const repoErrorCatcher = error => {
  error.isInRepoErr = true;
  error.status = httpStatus.INTERNAL_SERVER_ERROR;
  return error;
};

const carRepository = {
  getAllCarsModelNumberGas: async () => {
    // done
    try {
      return await Car.find({}).select('model number gasoline_residue');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getAllCarsModelNumber: async () => {
    // done
    try {
      return await Car.find({}).select('number model');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getCarByIdWithoutDriversIds: async carId => {
    // done
    try {
      return await Car.findById(carId).select('-driversIds');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getInfoAboutCarWithDriversNames: async carId => {
    // done
    try {
      return await Car.findById(carId).populate('driversIds', 'name -_id');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  setCarGasolineResidue: async (carId, gasoline_residue) => {
    // done
    try {
      return await Car.updateOne(
        { _id: carId },
        { $set: { gasoline_residue } }
      );
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getDriversByCarId: async carId => {
    // done
    try {
      return await Car.findById(carId)
        .select('-gasoline_residue')
        .populate('driversIds', 'name');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  addNewCarToDb: async newCar => {
    // done
    try {
      return await Car.create(newCar);
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  updateCarData: async carData => {
    try {
      const { _id, model, number, gasoline_residue, driversIds } = carData;
      const update = {
        model,
        number,
        gasoline_residue,
        driversIds: [...driversIds]
      };
      return await Car.findOneAndUpdate({ _id }, update, { new: true });
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
