const express = require('express');

const dbDevRefuelBot = require('./db/connection');

const driversRouter = require('./routes/api-01/driversRoutes');
const carsRouter = require('./routes/api-01/carsRoutes');
const checksRouter = require('./routes/api-01/checksRoutes');

//--------------------------------------------------------------------

const app = express();

const PORT = process.env.PORT || 4200;

app.use(express.json());

app.use('/api-01/drivers', driversRouter);
app.use('/api-01/cars', carsRouter);
app.use('/api-01/checks', checksRouter);

dbDevRefuelBot
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log(`Server isn't running. Err msg: ${err.message}`);
    process.exit(1);
  });
