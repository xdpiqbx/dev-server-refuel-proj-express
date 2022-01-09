const express = require('express');
const router = express.Router();

const httpStatus = require('../../helpers/HttpResponseStatusCodes');

const CarService = require('../../services/CarService');

const carService = new CarService();

const CarController = require('../../controllers/CarController');

const carController = new CarController();

router
  .get('/', carController.listOfCars.bind(carController))
  .get('/:carId', carController.driversAdmittedToCar.bind(carController))
  .post('/', () => {}) // create new car
  .patch('/:carId', () => {}) // update car
  .delete('/:carId', () => {});

module.exports = router;
