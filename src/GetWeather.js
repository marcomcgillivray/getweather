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
            temp: jsonData.temp,
        });
      })();}, [buttonClicked, enteredCity ])
      console.log(getWeather);

      return (
        <div>

      {buttonClicked && <p>{getWeather.city}<br></br>{getWeather.description}<br></br>{getWeather.temp}</p>}
        </div>
      )
};

export default GetWeather;