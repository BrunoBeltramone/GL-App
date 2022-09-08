import React, { useState } from "react";
import { Container, DayContainer, Image } from "../weatherApp_style";
import WeatherDay from "../WeatherDay";
import sunny from "../Images/sunny.png";
import rainy from "../Images/rainy.png";
import cloudy from "../Images/cloudy.png";
import snowy from "../Images/snowy.png";
import windy from "../Images/windy.png";

const WeatherInfo = ({ days }) => {
  const [day, setDay] = useState(days[0]);

  // console.log(days)
  const handleChange = (day) => {
    setDay(day);
  };

  // console.log(days)
  return (
    <>
      <h1>
        Dia y Clima Actual: {day.day}, {day.weather}
      </h1>
      {day.weather === "sunny" ? (
        <Image src={sunny} />
      ) : day.weather === "rainy" ? (
        <Image src={rainy} />
      ) : day.weather === "windy" ? (
        <Image src={windy} />
      ) : day.weather === "snowy" ? (
        <Image src={snowy} />
      ) : day.weather === "cloudy" ? (
        <Image src={cloudy} />
      ) : (
        ""
      )}
      <Container>
        {days
          ? days.map((d) => (
              <WeatherDay day={d} key={d.day} handleClick={handleChange} />
            ))
          : ""}
      </Container>
    </>
  );
};

export default WeatherInfo;
