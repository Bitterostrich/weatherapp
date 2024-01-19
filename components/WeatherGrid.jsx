const WeatherGrid = ({
  summary,
  timeOfDay,
  minTemp,
  maxTemp,
  windSpeed,
  img,
}) => {
  let imglink = "";

  if (img != "") {
    imglink = `http://openweathermap.org/img/wn/${img}@2x.png`;
  } else {
    imglink = "";
  }

  return (
    <div>
      <p className="font-bold col-span-1">{summary}</p>
      <div className=" h-full w-full grid grid-cols-4 gap-4 grid-rows-1 text-left text-xs justify-items-start ">
        <h2 className="font-bold col-span-1">{timeOfDay}</h2>
        <p className="col-span-1">{minTemp}</p>
        <p className="col-span-1">{maxTemp}</p>
        <p className="col-span-1">{windSpeed}</p>
        <img src={imglink} />
      </div>
    </div>
  );
};

export default WeatherGrid;
