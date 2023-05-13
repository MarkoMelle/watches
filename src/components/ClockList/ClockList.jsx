/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './ClockList.css';
import PropTypes from 'prop-types';
import Clock from './Clock/Clock';

function ClockList({ clocks, closeClock }) {
  const clockComponents = clocks.map(({ id, ...clockProps }) => (
    <Clock key={id} id={id} {...clockProps} closeClock={closeClock} />
  ));
  return <div className="clock-list">{clockComponents}</div>;
}

ClockList.propTypes = {
  clocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      offset: PropTypes.number.isRequired,
    }),
  ).isRequired,
  closeClock: PropTypes.func.isRequired,
};

export default ClockList;
