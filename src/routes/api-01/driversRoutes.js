const express = require('express');
const router = express.Router();

const DriverController = require('../../controllers/DriverController');

const driverController = new DriverController();

router
  .get(
    '/alphabet',
    driverController.getAllDriversByAlphabet.bind(driverController)
  )
  .post(
    '/by-chat-id',
    driverController.getDriverByChatId.bind(driverController)
  )
  .get(
    '/all-without-chat-id',
    driverController.getAllDriversWithoutChatId.bind(driverController)
  )
  .post(
    '/by-id-without-cars',
    driverController.getDriverByIdWithoutCars.bind(driverController)
  )
  .post(
    '/by-id-with-cars',
    driverController.getDriverByIdWithCars.bind(driverController)
  )
  .patch(
    '/set-chat-id-to-driver',
    driverController.setTlgChatIdToDriver.bind(driverController)
  );

module.exports = router;
