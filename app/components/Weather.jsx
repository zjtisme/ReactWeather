var React=require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeatherMap=require('openWeatherMap');
var ErrorModal=require('ErrorModal');

var Weather=React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location, unit) {
    var that=this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      unit: unit
    });

    openWeatherMap.getTemp(location, unit).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        unit: unit
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message,
        unit: unit
      });
    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location, "C");
      window.location.hash='#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location, "C");
      window.location.hash='#/';
    }
  },
  render: function() {

    var {isLoading, temp, location, errorMessage, unit} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h5 className="text-center loading-message">Fetching weather...</h5>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp} unit={unit}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports=Weather;
