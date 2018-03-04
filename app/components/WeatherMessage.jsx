var React=require('react');

var WeatherMessage = (props) => {
  return (
    <p>It's {props.temp} C&deg; in {props.location}</p>
  );
};

module.exports=WeatherMessage;
