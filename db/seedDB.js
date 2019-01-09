// const domain = process.env.DOMAIN || '172.17.0.2';
const domain = 'localhost';
const mongoose = require('mongoose');
const { Room, Reservation } = require('./models.js');

const generateRandomNumber = (min, max, type) => {
  if (type !== 'int' && type !== 'double') {
    return new Error('Unexpected argument type. Acceptable inputs are \'int\' or \'double\'');
  }
  let result = Math.random() * (max - min + 1) + min;
  if (type === 'int') { result = Math.floor(result); }
  return result;
};

const generateRandomStartDate = (index) => {
  const year = 2019;
  const month = (index % 12) + 1;
  const day = generateRandomNumber(10, 15, 'int');
  return new Date(year, month, day);
};

const generateRandomEndDate = (index) => {
  const year = 2019;
  const month = (index % 12) + 1;
  const day = generateRandomNumber(16, 21, 'int');
  return new Date(year, month, day);
};

const generateRoomData = (numEntries) => {
  const roomData = [];
  for (let i = 0; i < numEntries; i += 1) {
    const entry = {
      _id: i,
      name: `Room ${i}`,
      price: generateRandomNumber(50, 150, 'int'),
      stars: generateRandomNumber(1, 5, 'double'),
      service_fee: generateRandomNumber(10, 25, 'int'),
      cleaning_fee: generateRandomNumber(50, 75, 'int'),
    };
    roomData.push(entry);
  }
  return roomData;
};

const generateReservationData = (numEntries) => {
  const reservationData = [];
  for (let i = 0; i < numEntries; i += 1) {
    const entry = {
      _id: i,
      room_id: generateRandomNumber(1, numEntries, 'int'),
      start_date: generateRandomStartDate(i),
      end_date: generateRandomEndDate(i),
      adults: generateRandomNumber(1, 3, 'int'),
      children: generateRandomNumber(1, 3, 'int'),
      infants: generateRandomNumber(1, 2, 'int'),
    };
    reservationData.push(entry);
  }
  return reservationData;
};

const seedDB = (roomData, reservationData) => {
  // seed rooms
  Room.deleteMany({}, (err1) => {
    if (err1) {
      console.error(err1);
    } else {
      console.log('------ rooms collection cleared');
      Room.insertMany(roomData).then(() => {
        // seed reservations
        Reservation.deleteMany({}, (err2) => {
          if (err2) {
            console.error(err2);
          } else {
            console.log('------ reservations collection cleared');
            Reservation.insertMany(reservationData)
              .then(() => process.exit());
          }
        });
      });
    }
  });
};

mongoose.connect(`mongodb://${domain}/wherebnb`, { useNewUrlParser: true });
const entryCount = 1000;
const roomData = generateRoomData(entryCount);
const reservationData = generateReservationData(entryCount);
seedDB(roomData, reservationData);

module.exports.roomData = roomData;
module.exports.reservationData = reservationData;
