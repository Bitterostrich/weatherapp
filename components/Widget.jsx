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
    <div className="border text-sm">
      <div>
        {date},    
        {location} 
      </div>
      <div>
        <img src={weatherIcon} alt="Weather icon" /> 
      </div>
      <div className="flex text-xs">
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


const WeatherGrid = ({ timeOfDay, minTemp, maxTemp, windSpeed}) =>{
  return (
    <div className="flex flex-col text-center text-xs">
      <h2 className="font-bold text-cent">{timeOfDay}</h2>
      <p>{minTemp}</p>
      <p>{maxTemp}</p>
      <p>{windSpeed}</p>
    </div>
  );
}



export default Widget;