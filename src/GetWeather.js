import { useEffect, useState } from "react";
import './GetWeather.css';

const GetWeather = (props) => {
    const [getWeather, setGetWeather] = useState({});
    // const [layers, setLayers] = useState('');

    const enteredCity = props.enteredCity;
    const buttonClicked = props.buttonClicked;

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
            date: jsonData.days[0].datetimeEpoch,
        });
      })();}, [buttonClicked, enteredCity ])
      console.log(getWeather);


      return (
        <div className="wrapper">
          <div className="output">
            {buttonClicked &&
            <p>{getWeather.city.toUpperCase()} WEATHER</p>}
          </div>
        </div>
      )
};

export default GetWeather;