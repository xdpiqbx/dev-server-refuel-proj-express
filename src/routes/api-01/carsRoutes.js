const express = require('express');
const router = express.Router();

const carModel = require('../../db/models/carModel');

router
  .get('/', async (req, res) => {
    const cars = await carModel.getAllCars();
    console.log(res);
    res.status(200).json({
      method: 'GET',
      status: 200,
      originalUrl: '/api-01/cars',
      data: cars
    });
  })
  .get('/:carId', async (req, res) => {
    // const cars = await carModel.getAllCars();
    console.log(req);
    console.log('===========');
    console.log(req.params);
    res.status(200).json({
      method: 'GET',
      status: 200,
      originalUrl: '/api-01/cars/carID'
      // data: cars
    });
  })
  .post('/', () => {}) // create new car
  .patch('/:carId', () => {}) // update car
  .delete('/:carId', () => {});

module.exports = router;
