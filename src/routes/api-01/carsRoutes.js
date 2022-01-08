const express = require('express');
const router = express.Router();

const carModel = require('../../db/models/carModel');

router
  .get('/', async (req, res) => {
    const cars = await carModel.getAllCars();
    console.log(cars);
    res.status(200).json({
      method: 'GET',
      originalUrl: '/api-01/checks'
    });
  })
  .get('/:carId', () => {})
  .post('/', () => {}) // create new car
  .patch('/:carId', () => {}) // update car
  .delete('/:carId', () => {});

module.exports = router;
