const WeatherGrid = ({
  summary,
  timeOfDay,
  minTemp,
  maxTemp,
  windSpeed,
  img,
}) => {
  const imglink =
    img !== "" ? `http://openweathermap.org/img/wn/${img}@2x.png` : "";

  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md">
      <p className="font-bold text-lg mb-2">{summary}</p>

      <div className="grid grid-cols-4 gap-4 text-sm text-left">
        <div className="col-span-1 font-semibold">{timeOfDay}</div>
        <div className="col-span-1">{minTemp}</div>
        <div className="col-span-1">{maxTemp}</div>
        <div className="col-span-1">{windSpeed}</div>
      </div>
      {imglink && (
        <div className="mt-2 flex justify-center">
          <img src={imglink} alt="Weather Icon" className="w-18 h-18" />
        </div>
      )}
    </div>
  );
};

export default WeatherGrid;
