const lastDayOfMonth = require('date-fns/lastDayOfMonth');

const Check = require('../schemas/checkSchema');

const httpStatus = require('../../helpers/HttpResponseStatusCodes');

const repoErrorCatcher = error => {
  error.isInRepoErr = true;
  error.status = httpStatus.INTERNAL_SERVER_ERROR;
  return error;
};

const checkRepository = {
  saveCheckToDb: async check => {
    try {
      return await new Check(check).save();
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getAllChecks: async () => {
    try {
      return await Check.find({}).limit(50).sort('-date');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getChecksByCarId: async carId => {
    try {
      // делать выборку чеков за последние 3 месяца
      return await Check.find({ carId }).select('date litres driverId');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
  getChecksByCarIdForSpecificMonth: async (carId, startDate, endDate) => {
    try {
      return await Check.find({
        carId,
        date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      }).select('date litres checkImageUrl driverId');
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  }
};

module.exports = checkRepository;
