import React from "react";
import WeatherInfo from "../WeatherInfo";

const WeatherWidgetContainer = () => {
  
  const days = [
    { day: 1, weather: "sunny" },
    { day: 2, weather: "cloudy" },
    { day: 3, weather: "rainy" },
    { day: 4, weather: "snowy" },
    { day: 5, weather: "windy" },
  ];

  return (
    <>
      <WeatherInfo days={days} />
    </>
  );
};

export default WeatherWidgetContainer;
