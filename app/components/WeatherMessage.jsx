var React=require('react');

var WeatherMessage = (props) => {
  return (
    <h5 className="text-center weather-message">It's {props.temp} {props.unit}&deg; in {props.location}</h5>
  );
};

module.exports=WeatherMessage;
