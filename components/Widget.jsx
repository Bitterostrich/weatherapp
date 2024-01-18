'use client'
import { useEffect , useState } from "react";
import WeatherGrid from "./WeatherGrid";
import ApiClient from "@/utils/ApiClient"
const Widget = () => {
     const apiClient = new ApiClient
     let weatherData = [
          { timeOfDay: 'Time', minTemp: 'Min', maxTemp: 'Max', windSpeed: 'Wind(kph)' },
          { timeOfDay: 'Now', currentTemp: "" , minTemp: "", maxTemp: "", windSpeed: "" },
          { timeOfDay: 'Morning', minTemp: "" , maxTemp: "", windSpeed: ""  },
          { timeOfDay: 'Evening', minTemp: "" , maxTemp: "", windSpeed: ""  },
          { timeOfDay: 'Night', minTemp: "" , maxTemp: "" , windSpeed: ""  }
     ];
     const topWidgetData = [
          {
               date: "Sunday 10th",
               location: "London",
               weatherIcon: "http://openweathermap.org/img/wn/02d@2x.png"
          }
     ];
     const changeWeatherData = async () =>
          {
               let response = await getKey()
               console.log("Filtered")
               console.log(response)
               weatherData = [
                    { timeOfDay: 'Time', minTemp: 'Min', maxTemp: 'Max', windSpeed: 'Wind(kph)' },
                    { timeOfDay: 'Now', currentTemp: response.current.temp , minTemp: response.daily[0].temp.min, maxTemp: response.daily[0].temp.max, windSpeed: response.current.wind_speed },
                    { timeOfDay: 'Morning', minTemp: response.daily[0].temp.morn , maxTemp: response.daily[0].temp.max, windSpeed: response.current.wind_speed  },
                    { timeOfDay: 'Evening', minTemp: response.daily[0].temp.eve , maxTemp: response.daily[0].temp.max, windSpeed: response.current.wind_speed  },
                    { timeOfDay: 'Night', minTemp: response.daily[0].temp.night , maxTemp: response.daily[0].temp.max , windSpeed: response.current.wind_speed  }
               ];
               console.log(weatherData)
               showWhetherData()
          }
     const showWhetherData = (data,index) =>
     {
          return(
               <WeatherGrid
                    key={index}
                    timeOfDay={data.timeOfDay}
                    minTemp={data.minTemp}
                    maxTemp={data.maxTemp}
                    windSpeed={data.windSpeed}
               />
               )
     }
     const { date, location, weatherIcon } = topWidgetData[0];
     const getKey = async () =>
     {
          console.log("CLICKED")
          try
          {
               const response = await apiClient.getWeather()
               return(response.data.data)
          }
          catch (error)
          {
               console.error(error)
          }
     }
     useEffect(()=> {
          console.log(getKey())
     },[])
  return (
    <div className=" flex flex-col items-baseline text-sm w-full h-full gap-4">
      <div className="h-[10%]">
        {date},
        {location}
      </div>
      <div className="h-[40%]">
        <img src={weatherIcon} alt="Weather icon" />
      </div>
      <div className="flex flex-col gap-2 h-1/2">
          <div id="weatherShow"></div>
        <button onClick={changeWeatherData}>CLICK HERE</button>
        <div>
        {weatherData.map((data) => (
                    showWhetherData(data, data)
               ))}
        </div>
      </div>
    </div>
  );
}
export default Widget;