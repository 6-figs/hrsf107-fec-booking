// const domain = process.env.DOMAIN || '192.0.0.1';
const express = require('express');
// const morgan = require('morgan');
const bodyparser = require('body-parser');
// const mongoose = require('mongoose');
const path = require('path');
const Reservations = require('../db/models/reservations.js');

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'booking',
  password: 'password'
});

pool.on('connect', () => {
  console.log('successful connection')
});
// pool.on('error', (err) => {
//   console.log('Error', err);
// });

//
// mongoose.connect(`mongodb://127.0.0.1/errbnb`, { useNewUrlParser: true })
//   .then(() => {
//     /* eslint-disable-next-line */
//     console.log('Connected to Database on: ', 'mongodb://127.0.0.1/errbnb');
//   });
//
const app = express();
const PORT = 8080;
//
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(morgan('tiny'));
app.use(bodyparser.json());
app.use(express.static('client/dist'));

app.get('/api/rooms/:id', (req, res) => {
  const { id } = req.params;
  Reservations.findOne({ _id: id })
    .then((result) => {
      res.send(result);
    });
});

app.patch('/api/rooms/:id', (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  Reservations.findByIdAndUpdate({ _id: Number(id) })
    .then((results) => {
      const transformedDates = [];
      results.bookedDates.forEach((date) => {
        transformedDates.push(date.startDate.valueOf());
        transformedDates.push(date.endDate.valueOf());
      });
      const includesStartDate = transformedDates.includes(new Date(payload.startDate).valueOf());
      const includesEndDate = transformedDates.includes(new Date(payload.endDate).valueOf());
      if (includesStartDate && includesEndDate) {
        res.end('Duplicate Entry');
      } else {
        results.bookedDates.push(payload);
        results.save(() => {
          res.end('Saved to DB');
        });
      }
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`Server listening on port: ${PORT}`);
});
