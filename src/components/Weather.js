import React, { Component } from 'react';
import './Weather.scss';

let country="in";

export class Weather extends Component {

    state = {
        location: "___________",
        tempValue: "________",
        climate: "___________",
        iconTemp: "./icons/sun.svg"
    };


    async componentDidMount() {
        const byGeolocation = async (position) => {
            const API_key = this.props.weatherApiKey;
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`;
            console.log(url);
            const data = await fetch(url);
            const parsedData = await data.json();
            // console.log(parsedData);

            const { name } = parsedData;
            const { feels_like } = parsedData.main;
            const { id, main } = parsedData.weather[0];
            country=parsedData.sys.country;             // not working
            // console.log(country);
            this.setState({
                location: name,
                tempValue: Math.round(feels_like - 273),
                climate: main
            });
            
            // setting icon for different weather condition
            if (200 <= id && id < 300) {
                this.iconTemp = "./icons/thunderstorm.svg";
            } else if (300 <= id && id < 400) {
                this.iconTemp = "./icons/cloud-solid.svg";
            } else if (500 <= id && id < 600) {
                this.iconTemp = "./icons/rain.svg";
            } else if (600 <= id && id < 700) {
                this.iconTemp = "./icons/snow.svg";
            } else if (700 <= id && id < 800) {
                this.iconTemp = "./icons/clouds.svg";
            } else if (id === 800) {
                this.iconTemp = "./icons/clouds-and-sun.svg";
            }
            
        };
        if (!(navigator.geolocation)) {
            console.log("geolocation is not supported in your device or browser!");
            alert("geolocation is not supported in your device or browser!");
            return;
        }
        
        navigator.geolocation.getCurrentPosition(byGeolocation);
        
    }
    
    
    render() {
        return (
            <>
                {/* card for weather */}
                <div className="weather_container">
                    <div >
                        <p id="location_card">{this.state.location}</p>
                        {/* from js we put data in paragraph format */}
                    </div>
                    <img src={this.state.iconTemp} alt="Sunny" id="icon_temp" />
                    <p>
                        <span id="value_temp">{this.state.tempValue}</span>
                        <span id="unit_temp"> {'\u2103'}</span>     {/*unicode for deg C */}
                    </p>
                    <p id="climate">{this.state.climate}</p>
                </div>
            </>
        )
    }
}

export default Weather;
export {country};

