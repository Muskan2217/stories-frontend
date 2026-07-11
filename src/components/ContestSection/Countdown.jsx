import { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = ({ closesAt }) => {
  const calc = () => {
    const diff = new Date(closesAt) - new Date();
    if (diff <= 0) return { days: 0, hrs: 0, min: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hrs: Math.floor((diff % 86400000) / 3600000),
      min: Math.floor((diff % 3600000) / 60000),
    };
  };

  const [time, setTime] = useState(calc());

  useEffect(() => {
    setTime(calc());
    const timer = setInterval(() => setTime(calc()), 60000);
    return () => clearInterval(timer);
  }, [closesAt]);

  return (
    <div className="countdown-box">
      <div className="countdown-unit">
        <span>{String(time.days).padStart(2, "0")}</span>
        <small>DAYS</small>
      </div>
      <div className="countdown-unit">
        <span>{String(time.hrs).padStart(2, "0")}</span>
        <small>HRS</small>
      </div>
      <div className="countdown-unit">
        <span>{String(time.min).padStart(2, "0")}</span>
        <small>MIN</small>
      </div>
    </div>
  );
};

export default Countdown;