const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    console.log(req);
  })
  .get('/:driverId', () => {})
  .post('/', () => {}) // add new driver
  .patch('/:driverId', () => {}) // update driver
  .delete('/:driverId', () => {});

module.exports = router;
