const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    console.log(res);
  })
  .get('/:checkId', () => {})
  .patch('/:checkId', () => {}) // update car
  .delete('/:carId', () => {});

module.exports = router;
