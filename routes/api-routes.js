const db = require('../models');

module.exports = (app) => {
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then((data) => {
      console.log('GET/api/workouts');
      // console.log(data);
      // console.log(data[0].exercises);
      res.json(data);
    });
  });

  app.put('/api/workouts/:id', (req, res) => {
    console.log('PUT/api/workouts:id');
    console.log('ID SERVER PUT: ', req.params.id);
    console.log('REQ.body: ', req.body);
    db.Workout.updateOne({ _id: req.params.id },
      {
        $push: { exercises: [req.body] },
        $inc: { totalDuration: req.body.duration },
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      });
  });

  app.post('/api/workouts', (req, res) => {
    db.Workout.create(req).then((data) => {
      console.log('POST/api/workouts');
      console.log(data);
      res.json(data);
    });
  });

  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).then((data) => {
      console.log('/api/workouts/range');
      // console.log(data);
      res.json(data);
    });
  });
};
