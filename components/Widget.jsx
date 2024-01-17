'use client'
import WeatherGrid from "./WeatherGrid";

const Widget = () => {
  const weatherData = [
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

  const { date, location, weatherIcon } = topWidgetData[0];

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
      </div>
    </div>
  );
}


export default Widget;