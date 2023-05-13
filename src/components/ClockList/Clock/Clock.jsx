import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Clock.css';

function Clock({
  id, name, offset, closeClock,
}) {
  const [date, setDate] = useState(moment().utcOffset(offset));
  const timerRef = useRef(null);

  const handleCloseClock = () => {
    closeClock(id);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDate(moment().utcOffset(offset));
    }, 1000);
    return function cleanup() {
      clearInterval(timerRef.current);
    };
  }, []);

  const secondsRatio = date.seconds() / 60;
  const minutesRatio = (secondsRatio + date.minutes()) / 60;
  const hoursRatio = (minutesRatio + date.hours()) / 12;

  return (
    <div className="clock">
      <h3 className="clock-name">{name}</h3>
      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${hoursRatio * 360}deg)` }}
      />
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minutesRatio * 360}deg)` }}
      />
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${secondsRatio * 360}deg)` }}
      />
      <button className="btn-close" onClick={handleCloseClock} type="button">
        {' '}
        X
      </button>
    </div>
  );
}

Clock.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  closeClock: PropTypes.func.isRequired,
};

export default Clock;
