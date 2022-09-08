import React from "react";
import { DayContainer } from "../weatherApp_style";

const WeatherDay= ({day, handleClick}) => {
    // console.log(day)
    return(
        <DayContainer>
        <div onClick={() => handleClick(day) }>
          <h1>Dia {day.day}</h1>
          <h1>Clima {day.weather}</h1>
        </div>
        </DayContainer>
    )
}

export default WeatherDay