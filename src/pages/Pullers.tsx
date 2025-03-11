import React, { useState, useEffect } from "react";
import { Timer, Calendar, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

function Pullers() {
  const targetDate = new Date("2025-03-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, icon: Icon }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <Icon className="w-6 h-6 mb-2 text-indigo-600" />
      <div className="text-4xl font-bold text-indigo-600 mb-1">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Pullers - AlgoFusionai</title>
        <meta
          name="description"
          content="Countdown to something amazing coming on march 20th, 2025. Stay tuned!"
        />
        <meta
          name="keywords"
          content="countdown, event, AlgoFusionai, coming soon"
        />
        <meta name="author" content="AlgoFusionai Team" />
      </Helmet>
      <div className="absolute  bg-black bg-opacity-50" />

      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Something Amazing is Coming
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Get ready for an extraordinary experience. Mark your calendar for
          February 20th, 2025.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        <TimeUnit value={timeLeft.days} label="Days" icon={Calendar} />
        <TimeUnit value={timeLeft.hours} label="Hours" icon={Clock} />
        <TimeUnit value={timeLeft.minutes} label="Minutes" icon={Timer} />
        <TimeUnit value={timeLeft.seconds} label="Seconds" icon={Timer} />
      </div>

      <div className="relative z-10 mt-12">
        {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Notify Me
        </button> */}
      </div>
    </div>
  );
}

export default Pullers;
