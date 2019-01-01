import React from 'react';
import PropTypes from 'prop-types';

const calculateNumberOfNights = (checkInDate, checkOutDate) => {
  const startDate = checkInDate;
  const endDate = checkOutDate;
  const duration = endDate - startDate;
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  return duration / MILLISECONDS_PER_DAY;
};

const Total = ({
  checkInDate, checkOutDate, price, serviceFee, cleaningFee,
}) => {
  const duration = calculateNumberOfNights(checkInDate, checkOutDate);
  const total = (serviceFee + price) * duration + cleaningFee;
  return (
    <div>
      <div>
        {`$${price} x ${duration} nights: ${price * duration} `}
      </div>
      <div>
        {`Cleaning Fee: ${cleaningFee}`}
      </div>
      <div>
        {`Service Fee: ${serviceFee * duration}`}
      </div>
      <div>
        {`Total: ${total}`}
      </div>
    </div>
  );
};

Total.propTypes = {
  checkInDate: PropTypes.instanceOf(Date).isRequired,
  checkOutDate: PropTypes.instanceOf(Date).isRequired,
  price: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
};


export default Total;
