const driverRepository = require('../db/repositories/driverRepository');

const httpStatus = require('../helpers/HttpResponseStatusCodes');

class DriverService {
  constructor() {
    this.repo = {
      drivers: driverRepository
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

  async getAllDriversByAlphabet() {
    try {
      return await this.repo.drivers.getAllDriversByAlphabet();
    } catch (error) {
      throw serviceErrorCatcher(error);
    }
  }
  async getDriverByChatId(chatId) {
    try {
      return await this.repo.drivers.getDriverByChatId(chatId);
    } catch (error) {
      throw serviceErrorCatcher(error);
    }
  }
  async getAllDriversWithoutChatId() {
    try {
      return await this.repo.drivers.getAllDriversWithoutChatId();
    } catch (error) {
      throw serviceErrorCatcher(error);
    }
  }
  async getDriverByIdWithoutCars(driverId) {
    try {
      return await this.repo.drivers.getDriverByIdWithoutCars(driverId);
    } catch (error) {
      throw serviceErrorCatcher(error);
    }
  }
  async getDriverByIdWithCars(driverId) {
    try {
      return await this.repo.drivers.getDriverByIdWithCars(driverId);
    } catch (error) {
      throw serviceErrorCatcher(error);
    }
  }
  async setTlgChatIdToDriver(driverId, tlg_chatId) {
    try {
      return await this.repo.drivers.setTlgChatIdToDriver(driverId, tlg_chatId);
    } catch (error) {
      throw serviceErrorCatcher(error);
    }
  }
}

module.exports = DriverService;
