import React, { useEffect, useState } from "react";
import WeatherGrid from "./WeatherGrid";
import ApiClient from "@/utils/ApiClient";

const Widget = () => {
  const apiClient = new ApiClient();
  const [day, setDay] = useState(0);
  const [weatherData, setWeatherData] = useState([
    {
      summary: "",
      timeOfDay: "",
      minTemp: "",
      maxTemp: "",
      windSpeed: "",
      img: "",
    },
    {
      summary: "",
      timeOfDay: "Time",
      minTemp: "Min",
      maxTemp: "Max",
      windSpeed: "Wind(kph)",
      img: "",
    },
    {
      summary: "",
      timeOfDay: "Now",
      currentTemp: null,
      minTemp: null,
      maxTemp: null,
      windSpeed: null,
      img: "",
    },
    {
      summary: "",
      timeOfDay: "Morning",
      minTemp: null,
      maxTemp: null,
      windSpeed: null,
      img: "",
    },
    {
      summary: "",
      timeOfDay: "Evening",
      minTemp: null,
      maxTemp: null,
      windSpeed: null,
      img: "",
    },
    {
      summary: "",
      timeOfDay: "Night",
      minTemp: null,
      maxTemp: null,
      windSpeed: null,
      img: "",
    },
    {
      summary: "",
      timeOfDay: "",
      minTemp: "",
      maxTemp: "",
      windSpeed: "",
      img: "http://openweathermap.org/img/wn/02d@2x.png",
    },
  ]);

  const topWidgetData = [
    {
      date: "Friday 10th",
      location: " Manchester",
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

  const changeWeatherData = async () => {
    try {
      const response = await getKey();
      console.log(response);
      console.log("ICON");
      console.log(response.daily[day].weather[0].icon);
      setWeatherData([
        {
          summary: response.daily[day].summary,
          timeOfDay: "",
          minTemp: "",
          maxTemp: "",
          windSpeed: "",
          img: "",
        },
        {
          summary: "",
          timeOfDay: "Time",
          minTemp: "Min",
          maxTemp: "Max",
          windSpeed: "Wind(kph)",
          img: "",
        },
        {
          summary: "",
          timeOfDay: "Now",
          currentTemp: response?.current?.temp,
          minTemp: response?.daily[day]?.temp.min,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
          img: "",
        },
        {
          summary: "",
          timeOfDay: "Morning",
          minTemp: response?.daily[day]?.temp.morn,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
          img: "",
        },
        {
          summary: "",
          timeOfDay: "Evening",
          minTemp: response?.daily[day]?.temp.eve,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
          img: "",
        },
        {
          summary: "",
          timeOfDay: "Night",
          minTemp: response?.daily[day]?.temp.night,
          maxTemp: response?.daily[day]?.temp.max,
          windSpeed: response?.current?.wind_speed,
          img: "",
        },
        {
          summary: "",
          timeOfDay: "",
          minTemp: "",
          maxTemp: "",
          windSpeed: "",
          img: response?.daily[day]?.weather[0].icon,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Initial data fetch when component mounts
    changeWeatherData();
  }, []);

  const changeDayUp = () => {
    setDay((prevDay) => (prevDay + 1) % 8);
    changeWeatherData();
  };

  const changeDayDown = () => {
    setDay((prevDay) => (prevDay - 1 + 8) % 8);
    changeWeatherData();
  };

  return (
    <div className="flex flex-col items-baseline text-sm w-full h-full gap-4">
      <div className="h-[10%]">
        {topWidgetData[0].date},{topWidgetData[0].location}
      </div>

      <div className="flex gap-2">
        <button
          onClick={changeDayDown}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
        >
          Prev Day
        </button>
        <span className="px-2">{day}</span>
        <button
          onClick={changeDayUp}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
        >
          Next Day
        </button>
      </div>

      <div className="flex flex-col ">
        <div className="h-[40%]"></div>
        {weatherData.map((data, index) => (
          <WeatherGrid
            key={index}
            summary={data.summary}
            timeOfDay={data.timeOfDay}
            minTemp={data.minTemp !== null ? data.minTemp : "N/A"}
            maxTemp={data.maxTemp !== null ? data.maxTemp : "N/A"}
            windSpeed={data.windSpeed !== null ? data.windSpeed : "N/A"}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Widget;
