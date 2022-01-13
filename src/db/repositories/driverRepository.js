const Driver = require('../schemas/driverSchema');
const Car = require('../schemas/carSchema');

const httpStatus = require('../../helpers/HttpResponseStatusCodes');

const repoErrorCatcher = error => {
  error.isInRepoErr = true;
  error.status = httpStatus.INTERNAL_SERVER_ERROR;
  return error;
};

const driverRepository = {
  getAllDriversByAlphabet: async () => {
    try {
      return await Driver.find({})
        .select('name')
        .collation({ locale: 'uk' })
        .sort({ name: 1 });
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getDriverByChatId: async chatId => {
    try {
      return await Driver.findOne({ tlg_chatId: chatId });
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getAllDriversWithoutChatId: async () => {
    try {
      return await Driver.find({ tlg_chatId: null });
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getDriverByIdWithoutCars: async driverId => {
    try {
      return await Driver.findById(driverId, 'name tlg_chatId');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getDriverByIdWithCars: async driverId => {
    try {
      return await Driver.findById(driverId).populate(
        'carsIds',
        'model number -_id'
      );
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  setTlgChatIdToDriver: async (driverId, tlg_chatId) => {
    try {
      return await Driver.updateOne(
        { _id: driverId },
        { $set: { tlg_chatId } }
      );
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  }
};

module.exports = driverRepository;
