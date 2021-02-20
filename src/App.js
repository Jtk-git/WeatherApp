import React from 'react';
import './App.css';
import Axios from 'axios';
import Weather from './Weather';

class App extends React.Component {
  
  state = {
    coords: {
      latitude:55,
      longitude:35
    }, 
    data:{}
  }

  componentDidMount(){
    //get Device Location
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({coords:newCoords});

        Axios.get(`http://api.weatherstack.com/current?access_key=1aa762e6565a3868a171699179aead45&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {

          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons
          }

          this.setState({data:weatherData});

        });
      })
    }else{
      console.log("not supooerted")
    }
  }
  render(){
    return (
      <div className="App">
        <Weather weatherData = {this.state.data} />
      </div>
    );
  }
}

export default App;
