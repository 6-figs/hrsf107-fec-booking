import axios from 'axios';
import {
  setPrice, setStars, setCleaningFee, setBookedDates, setServiceFee,
} from './bookingActions';

const getData = roomID => (
  (dispatch) => {
    axios.get(`/api/rooms/${roomID}`)
      .then(({ data }) => {
        dispatch(setPrice(data.price));
        dispatch(setStars(data.stars));
        dispatch(setCleaningFee(data.cleaningFee));
        dispatch(setBookedDates(data.bookedDates));
        dispatch(setPrice(data.price));
        dispatch(setServiceFee(data.serviceFee));
      });
  }
);

const reserveDate = (roomID, payload) => (
  (dispatch) => {
    axios.patch(`/api/rooms/${roomID}`, payload)
      .then(() => {
        /* eslint-disable-next-line */
        window.alert('Booked');
        dispatch(getData(roomID));
      });
  }
);

export { getData, reserveDate };
