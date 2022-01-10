const express = require('express');
const router = express.Router();

const CarController = require('../../controllers/CarController');

const carController = new CarController();

router
  .get('/model-number', carController.getAllCarsModelNumber.bind(carController))
  .get(
    '/model-number-gas',
    carController.getAllCarsModelNumberGas.bind(carController)
  )
  .get('/:carId', carController.driversAdmittedToCar.bind(carController))
  .post('/', () => {}) // create new car
  .patch('/:carId', () => {}) // update car
  .delete('/:carId', () => {});

module.exports = router;
