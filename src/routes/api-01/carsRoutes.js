const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
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
