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
  .get(
    '/car-drivers/:carId',
    carController.getDriversByCarId.bind(carController)
  )
  .get(
    '/total-info-about/:carId',
    carController.getTotalInfoAboutCar.bind(carController)
  )
  .patch(
    '/set-gasoline-residue',
    carController.setCarGasolineResidue.bind(carController)
  )
  .post('/create', carController.addNewCarToDb.bind(carController))
  .put('/update-car-data', carController.updateCarData.bind(carController))
  .post('/remove', carController.removeCar.bind(carController));

module.exports = router;
