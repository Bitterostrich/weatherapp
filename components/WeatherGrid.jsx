const WeatherGrid = ({ timeOfDay, minTemp, maxTemp, windSpeed}) =>{
  return (
    <div className=" h-full w-full grid grid-cols-4 gap-4 grid-rows-1 text-left text-xs justify-items-start ">
      <h2 className="font-bold col-span-1">{timeOfDay}</h2>
      <p className="col-span-1">{minTemp}</p>
      <p className="col-span-1">{maxTemp}</p>
      <p className="col-span-1">{windSpeed}</p>
    </div>
  );
}

export default WeatherGrid;