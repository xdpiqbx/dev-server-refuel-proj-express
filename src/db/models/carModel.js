const Car = require('../schemas/carSchema');
const Driver = require('../schemas/driverSchema');

const carModel = {
  getAllCars: async () => {
    return await Car.find({})
      .select('number model driversIds')
      .populate('driversIds', 'name -_id');
  }
};

module.exports = carModel;
