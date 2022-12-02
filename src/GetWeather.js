import { useEffect, useState } from "react";

const GetWeather = (props) => {
    const [getWeather, setGetWeather] = useState({});

    const cityKey = props.cityKey;
    const apiKey = props.apiKey;

    useEffect(() => {(async () => {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}${apiKey}`);
        const jsonData = await response.json();
        setGetWeather({
            isRaining: jsonData[0].HasPrecipitation,
            temperature: jsonData[0].Temperature.Metric.Value,
            conditions: jsonData[0].WeatherText,
            localTime: jsonData[0].LocalObservationDateTime,
            IsDayTime: jsonData[0].IsDayTime,
        });
      })();}, [props.getData, apiKey, cityKey ])
      console.log(getWeather)

      return (
        <div>
            {Object.values(getWeather).map((value, index) => {
                return (
                    <div key={index}>
                        <h2>{value}</h2>
                    </div>
                )
            })}
        </div>
      )
};

export default GetWeather;