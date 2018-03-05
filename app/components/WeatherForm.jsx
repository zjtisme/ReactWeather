var React=require('react');

var WeatherForm=React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location=this.refs.location.value;
    var F=this.refs.F;
    var C=this.refs.C;
    var unit = "C";
    if(F.selected) {
      unit = "F";
    }

    if(location.length > 0) {
      this.refs.location.value='';
      this.props.onSearch(location, unit);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="search" ref="location" placeholder="Enter a city.."/>
          </div>
          <select>
            <option ref="C">Celsius</option>
            <option ref="F">Fahrenheit</option>
          </select>
          <div>
            <button className="hollow button expanded">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports=WeatherForm;
