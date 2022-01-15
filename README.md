# dev-server-refuel-proj-express

```code
npm i -D nodemon
npm i dotenv
npm install express
npm install helmet
npm install mongoose
npm install date-fns
```

---

Route -> Controller -> Service -> Repository -> DB

---

## Tasks

```js
// in repo
  addNewCarToDb: async newCar => {
    // done
    try {
      // add this car to every driver
      return await Car.create(newCar);
    } catch (error) {
      throw repoErrorCatcher(error);
    }
  },
```

```js
// in car controller
  async removeCar(req, res, next) {
    try {
      const { carId } = req.body;
      console.log(carId);
      // move from table cars to removed_cars
      // remove from every driver
      super.response(res, { test: 'remove' });
    } catch (error) {
      next(super.errorCatcher(error));
    }
  }
```

---

## [cheat sheet](https://github.com/xdpiqbx/goit-node-js-homeworks/tree/02-express)
