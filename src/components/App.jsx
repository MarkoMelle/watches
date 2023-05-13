import React, { useState } from 'react';
import './App.css';
import FormAddClock from './FormAddClock/FormAddClock';
import ClockList from './ClockList/ClockList';

function App() {
  const [clocks, setClocks] = useState([]);
  const addClock = (clockName, clockTime) => {
    const newClock = {
      id: Date.now(),
      name: clockName,
      offset: clockTime,
    };
    setClocks((prevClocks) => [...prevClocks, newClock]);
  };

  const closeClock = (clockId) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== clockId));
  };

  return (
    <>
      <FormAddClock addClock={addClock} />
      <ClockList clocks={clocks} closeClock={closeClock} />
    </>
  );
}

export default App;
