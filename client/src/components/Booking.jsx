import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Price from './Price';
import DatePicker from './DatePicker';
import Rating from './Rating';
import GuestPicker from './GuestBar/GuestPicker';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    const { roomId } = this.props;
    this.state = {
      roomId,
      stars: null,
      price: null,
    };
  }

  componentDidMount() {
    const { roomId } = this.state;
    axios.get(`/api/rooms/${roomId}`)
      .then(({ data }) => {
        const { price, stars } = data;
        this.setState({ price, stars });
      });
  }

  render() {
    const { price, stars } = this.state;
    return (
      <div id="booking-bar">
        <Price price={price} />
        <Rating stars={stars} />
        <hr />
        <DatePicker />
        <GuestPicker />
        <div>
          <input type="submit" value="Request to Book" />
        </div>
      </div>
    );
  }
}

Booking.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Booking;