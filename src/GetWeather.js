import { useEffect, useState } from "react";

const GetWeather = (props) => {
    const [getWeather, setGetWeather] = useState({});

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
        });
      })();}, [buttonClicked, enteredCity ])
      console.log(getWeather);

      if (getWeather.feelsLike <= 20) {
        getWeather.feelsLike = getWeather.feelsLike + ' Reccomend 1-2 Layers'
      };

      return (
        <div>
      {buttonClicked && <p>
        {getWeather.city}<br></br>
        {getWeather.description}<br></br>
        Current Temperature:{getWeather.temp}&deg;c<br></br>
        Today's High:{getWeather.tempMax}&deg;c<br></br>
        Today's Low: {getWeather.tempMin}&deg;c<br></br>
        Feels like: {`${getWeather.feelsLike}&deg;c`}c<br></br>
        </p>}
        </div>
      )
};

export default GetWeather;