import React, { useEffect, useState } from 'react';


const Clock = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    period: 'AM',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      let hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const period = hours >= 12 ? 'PM' : 'AM';

      // Convert 24-hour format to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // If hour is 0, set it to 12

      setTime({
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
        period: period,
      });
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="clock">
          <span id="hrs">{time.hours}</span>
          <span>:</span>
          <span id="min">{time.minutes}</span>
          <span>:</span>
          <span id="sec">{time.seconds}</span>
          <span id="ampm">{time.period}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
