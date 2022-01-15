const express = require('express');
const router = express.Router();

const CheckController = require('../../controllers/CheckController');

const checkController = new CheckController();

router
  .put('/save-to-db', checkController.saveCheckToDb.bind(checkController))
  .get('/get-all', checkController.getAllChecks.bind(checkController))
  .post(
    '/get-by-car-id',
    checkController.getChecksByCarId.bind(checkController)
  )
  .post(
    '/by-car-id-for-specific-month',
    checkController.getChecksByCarIdForSpecificMonth.bind(checkController)
  );

module.exports = router;

/*
  Checks save to db
  http://localhost:4200/api-01/checks/save-to-db
  
  Checks get all
  http://localhost:4200/api-01/checks/get-all
  
  Checks get by car id
  http://localhost:4200/api-01/checks/get-by-car-id
  
  Checks by car id for specific month
  http://localhost:4200/api-01/checks/by-car-id-for-specific-month
*/
