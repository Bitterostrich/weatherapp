'use client'
import { useEffect , useState } from "react";
import WeatherGrid from "./WeatherGrid";
import ApiClient from "@/utils/ApiClient"

const Widget = () => {


  const apiClient = new ApiClient
  let weatherData = [
    { timeOfDay: 'time', minTemp: 'Min', maxTemp: 'Max', windSpeed: 'Wind(kph)' },
    { timeOfDay: 'Morning', minTemp: '10', maxTemp: '15', windSpeed: '5' },
    { timeOfDay: 'Afternoon', minTemp: '15', maxTemp: '20', windSpeed: '10' },
    { timeOfDay: 'Evening', minTemp: '10', maxTemp: '15', windSpeed: '5' },
    { timeOfDay: 'Night', minTemp: '15', maxTemp: '20', windSpeed: '10' }
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
    console.log(response.temp_min)
    weatherData = [
      { timeOfDay: 'Time', minTemp: 'Min', maxTemp: 'Max', windSpeed: 'Wind(kph)' },
      { timeOfDay: 'Now', currentTemp: response.main.temp, minTemp: response.main.temp_min, maxTemp: response.main.temp_max, windSpeed: response.wind.speed },
      
      
      
      // { timeOfDay: 'Morning', minTemp: response.temp_min, maxTemp: '15', windSpeed: '5' },
      // { timeOfDay: 'Afternoon', minTemp: '15', maxTemp: '20', windSpeed: '10' },
      // { timeOfDay: 'Evening', minTemp: '10', maxTemp: '15', windSpeed: '5' },
      // { timeOfDay: 'Night', minTemp: '15', maxTemp: '20', windSpeed: '10' }
    ];
    console.log(weatherData)
  }
  const { date, location, weatherIcon } = topWidgetData[0];



  const getKey = async () =>
    {
        console.log("CLICKED")
        try 
        {
            const response = await apiClient.getWeather()
            console.log(response)
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
        {weatherData.map(data => (
          <WeatherGrid 
            timeOfDay={data.timeOfDay} 
            minTemp={data.minTemp} 
            maxTemp={data.maxTemp} 
            windSpeed={data.windSpeed} 
          />
        ))}
        <button onClick={changeWeatherData}>CLICK HERE</button>
      </div>
    </div>
  );
}


export default Widget;