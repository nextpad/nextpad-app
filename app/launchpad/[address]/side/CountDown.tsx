import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";

function CountDown({ targetTime }: { targetTime: number }) {
   const [timeRemaining, setTimeRemaining] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   });

   useEffect(() => {
      const interval = setInterval(() => {
         const now = Math.floor(Date.now() / 1000);
         const timeLeft = targetTime - now;

         if (timeLeft <= 0) {
            clearInterval(interval);
            setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
         } else {
            const days = Math.floor(timeLeft / (3600 * 24));
            const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            setTimeRemaining({ days, hours, minutes, seconds });
         }
      }, 1000);

      return () => clearInterval(interval);
   }, [targetTime]);

   return (
      <div className="flex flex-row">
         <TimeCard time={timeRemaining.days} label="Day" />
         <TimeCard time={timeRemaining.hours} label="Hour" />
         <TimeCard time={timeRemaining.minutes} label="Mins" />
         <TimeCard time={timeRemaining.seconds} label="Secs" />
      </div>
   );
}

export default CountDown;
