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
      // Get date epoch in utc
      const now = new Date().getTime();
      const utcTimeStamp = Date.UTC(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate(),
        new Date().getUTCHours(),
        new Date().getUTCMinutes(),
        new Date().getUTCSeconds()
      )
      console.log(utcTimeStamp, "utcTimeStamp");
      const totalSeconds = (deadline - (utcTimeStamp / 1000));
      console.log(deadline, utcTimeStamp, totalSeconds, "totalSeconds")
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
