"use client";
import { useEffect, useState } from "react";
import WeatherGrid from "./WeatherGrid";
import ApiClient from "@/utils/ApiClient";
const Widget = () => {
  const apiClient = new ApiClient();
  const [weatherData, setWeatherData] = useState([
    {
      timeOfDay: "Time",
      minTemp: "Min",
      maxTemp: "Max",
      windSpeed: "Wind(kph)",
    },
    {
      timeOfDay: "Now",
      currentTemp: null,
      minTemp: null,
      maxTemp: null,
      windSpeed: null,
    },
    { timeOfDay: "Morning", minTemp: null, maxTemp: null, windSpeed: null },
    { timeOfDay: "Evening", minTemp: null, maxTemp: null, windSpeed: null },
    { timeOfDay: "Night", minTemp: null, maxTemp: null, windSpeed: null },
  ]);
  const topWidgetData = [
    {
      date: "Sunday 10th",
      location: "London",
      weatherIcon: "http://openweathermap.org/img/wn/02d@2x.png",
    },
  ];
  const getKey = async () => {
    console.log("CLICKED");
    try {
      const response = await apiClient.getWeather();
      console.log(response);
      return response?.data?.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const changeWeatherData = async (day) => {
    try {
      const response = await getKey();
      console.log(response);
      setWeatherData([
        {
          timeOfDay: "Time",
          minTemp: "Min",
          maxTemp: "Max",
          windSpeed: "Wind(kph)",
        },
        {
          timeOfDay: "Now",
          currentTemp: response?.current?.temp,
          minTemp: response?.daily[day]?.temp.min,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
        },
        {
          timeOfDay: "Morning",
          minTemp: response?.daily[day]?.temp.morn,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
        },
        {
          timeOfDay: "Evening",
          minTemp: response?.daily[day]?.temp.eve,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
        },
        {
          timeOfDay: "Night",
          minTemp: response?.daily[day]?.temp.night,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  const { date, location, weatherIcon } = topWidgetData[0];
  
  return (
    <div className="flex flex-col items-baseline text-sm w-full h-full gap-4">
      <div className="h-[10%]">
        {date},{location}
      </div>
      <button onClick={changeWeatherData(0)}>CLICK HERE</button>
      <div className="h-[40%]">
        <img src={weatherIcon} alt="Weather icon" />
      </div>
      <div className="flex flex-col h-1/2">
          {weatherData.map((data, index) => (
            <WeatherGrid
              key={index}
              timeOfDay={data.timeOfDay}
              minTemp={data.minTemp !== null ? data.minTemp : "N/A"}
              maxTemp={data.maxTemp !== null ? data.maxTemp : "N/A"}
              windSpeed={data.windSpeed !== null ? data.windSpeed : "N/A"}
            />
          ))}
        </div>
     </div>
  );
};

export default Widget