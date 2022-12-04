import { useEffect, useState } from "react";
import './GetWeather.css';

import SetIcon from "./SetIcon";

const GetWeather = (props) => {
    const [getWeather, setGetWeather] = useState({});

    // Fetch useEffect prop dependancies
    const enteredCity = props.enteredCity;
    const buttonClicked = props.buttonClicked;

    // Asynchronously fetch wether API and assign values to state objects
    useEffect(() => {(async () => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${enteredCity}/today?unitGroup=metric&key=LZSEGGAKJNM255RGRK4QRYRSZ&contentType=json`);
        const jsonData = await response.json();
        setGetWeather({
            city: jsonData.address,
            description: jsonData.description,
            temp: jsonData.days[0].temp,
            tempMax: jsonData.days[0].tempmax,
            tempMin: jsonData.days[0].tempmin,
            feelsLike: jsonData.days[0].feelslike,
            rain: jsonData.days[0].precip,
            cloud: jsonData.days[0].cloudcover,
        });
      })();}, [buttonClicked, enteredCity])



      return (
        <div>
            {buttonClicked && 
          <div className="wrapper">
          <div className="output">
            <p>{getWeather.city.toUpperCase()} WEATHER</p>
  
            <h2>{getWeather.temp}&deg;c</h2>
            <ul>
                <li>Feels like: <strong>{getWeather.feelsLike}&deg;c</strong></li>
                <li>Todays high: <strong>{getWeather.tempMax}&deg;c</strong></li>
                <li>Todays low: <strong>{getWeather.tempMin}&deg;c</strong></li>
            </ul>
            <span>{getWeather.description}</span>
            
                <div className="icon">
              <SetIcon getWeather={getWeather} />
              </div>
            </div>
            </div>}
          </div>
      )
};

export default GetWeather;