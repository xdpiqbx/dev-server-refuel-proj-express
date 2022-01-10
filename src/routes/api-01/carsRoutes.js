const express = require('express');
const router = express.Router();

const CarController = require('../../controllers/CarController');

const carController = new CarController();

router
  .get(
    '/models-numbers-gas',
    carController.getAllCarsModelNumberGas.bind(carController)
  )
  .get(
    '/models-numbers',
    carController.getAllCarsModelNumber.bind(carController)
  )
  .get(
    '/without-drivers-ids/:carId',
    carController.getCarByIdWithoutDriversIds.bind(carController)
  )
  .get('/:carId', carController.driversAdmittedToCar.bind(carController))
  .patch(
    '/set-gasoline-residue',
    carController.setCarGasolineResidue.bind(carController)
  )
  .post('/create', carController.addNewCarToDb.bind(carController));
// .patch('/:carId', () => {}) // update car
// .delete('/:carId', () => {});

module.exports = router;
