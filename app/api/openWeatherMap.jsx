var axios=require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/find?appid=6e9901314ef1766cb0524e21c3db96f7';
// const OPEN_WEATHER_MAP_URL="http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=6e9901314ef1766cb0524e21c3db96f7";

//6e9901314ef1766cb0524e21c3db96f7
module.exports={
  getTemp: function(location, unit) {
    var encodedLocation=encodeURIComponent(location);
    if(unit == 'C') {
      var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;
    } else {
      var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=imperial`;
    }
    // var requestUrl=`${OPEN_WEATHER_MAP_URL}`;
    // console.log(requestUrl);
    return axios.get(requestUrl).then(function(res) {
      if(res.data.count > 0) { // Indicate how many instances existing in the res.data.list
        return res.data.list[0].main.temp;
      } else {
        throw new Error('City not found!');
      }
    }, function(res) {
      // throw new Error(res.data.message)
      throw new Error('Server does not respond!');
    });
  }
};
