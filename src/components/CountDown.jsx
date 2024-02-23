import React, { useEffect, useState } from "react";
import style from "./styles/countDown.module.css";

const CountDown = ({ deadline, timer }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const padNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const totalSeconds = (deadline - now) / 1000;

      if (totalSeconds < 0) {
        clearInterval(interval);
      }
      if (totalSeconds > 0) {
        setDays(padNumber(Math.floor(totalSeconds / 3600 / 24)));
        setHours(padNumber(Math.floor(totalSeconds / 3600) % 24));
        setMinutes(padNumber(Math.floor(totalSeconds / 60) % 60));
        setSeconds(padNumber(Math.floor(totalSeconds) % 60));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className={style.timers}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={style.box}>{days}</p>
        <p className={style.date}>{timer.days}</p>
      </div>
      <span>:</span>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={style.box}>{hours}</p>
        <p className={style.date}>{timer.hours}</p>
      </div>
      <span>:</span>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={style.box}>{minutes}</p>
        <p className={style.date}>{timer.minutes}</p>
      </div>
      <span>:</span>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={style.box}>{seconds}</p>
        <p className={style.date}>{timer.seconds}</p>
      </div>
    </div>
  );
};

export default CountDown;
