import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navbar = ({ weatherCondition }) => {
  const [startDate, setStartDate] = React.useState(new Date());

  const weatherImages = {
    sunny: "sun.png",
    cloudy: "cloud.png",
    rainy: "rain.png",
    snowy: "snow.png",
  };

  const weatherImageSrc = weatherImages[weatherCondition] || "sun.png";

  return (
    <div className="bg-blue-300 p-4 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <img
          src={weatherImageSrc}
          alt="Weather Logo"
          className="mr-2 w-12 h-12 md:w-20 md:h-20"
        />
      </div>
      <div className="text-white font-bold text-xl md:text-3xl">
        cloudy with a chance of meatballs
      </div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default Navbar;

