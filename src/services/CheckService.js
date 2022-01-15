const checkRepository = require('../db/repositories/checkRepository');

const httpStatus = require('../helpers/HttpResponseStatusCodes');

const { getFirstAndLastDaysOfMonth } = require('./checkServiceLib');

class CheckService {
  constructor() {
    this.repo = {
      checks: checkRepository
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

  async saveCheckToDb(check) {
    try {
      return await this.repo.checks.saveCheckToDb(check);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async getAllChecks() {
    try {
      return await this.repo.checks.getAllChecks();
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async getChecksByCarId(carId) {
    try {
      return await this.repo.checks.getChecksByCarId(carId);
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
  async getChecksByCarIdForSpecificMonth(carId, year, month) {
    try {
      const { startDate, endDate } = getFirstAndLastDaysOfMonth(year, month);
      return await this.repo.checks.getChecksByCarIdForSpecificMonth(
        carId,
        startDate,
        endDate
      );
    } catch (error) {
      throw this.serviceErrorCatcher(error);
    }
  }
}

module.exports = CheckService;
