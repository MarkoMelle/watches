/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './FormAddClock.css';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import timeZones from '../../timeZones';

function FormAddClock({ addClock }) {
  const [clockName, setClockName] = useState('');
  const [clockTime, setClockOffset] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clockName.trim() === '' || clockTime === '') {
      toast.error('Заполните все поля');
      return;
    }
    addClock(clockName, +clockTime);
    setClockName('');
    setClockOffset('');
  };

  const handleNameChange = (e) => {
    setClockName(e.target.value);
  };

  const handleTimeChange = (e) => {
    setClockOffset(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '15px',
            color: '#713200',
          },
        }}
      />
      <div className="form-group">
        <label htmlFor="clock-name">Название</label>
        <input
          id="clock-name"
          className="form-control"
          type="text"
          value={clockName}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="clock-time">Временная зона</label>
        <select
          id="clock-time"
          className="form-control"
          value={clockTime}
          onChange={handleTimeChange}
        >
          {timeZones.map((timeZone) => (
            <option key={timeZone.value} value={timeZone.value}>
              {timeZone.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn">
        Добавить часы
      </button>
    </form>
  );
}

FormAddClock.propTypes = {
  addClock: PropTypes.func.isRequired,
};

export default FormAddClock;
