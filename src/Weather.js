import React from 'react'

export default function Weather(props) {
    
    return (
        <div>   
            Display Weather Data
            <h1> temperature: {props.weatherData.temperature} </h1>
            <h1> Location: {props.weatherData.location} </h1>
            <h1> region: {props.weatherData.region} </h1>
            <h1> country: {props.weatherData.country} </h1>
            <h1> pressure: {props.weatherData.precip} </h1>
        </div>
    );
}
