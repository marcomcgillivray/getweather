import { useEffect, useState } from "react";
import GetWeather from "./GetWeather";

const GetCityKey = (props) => {
    const [cityKey, setCityKey] = useState({});

    const enteredCity = props.enteredCity;
    const apiKey = `?apikey=JmmbrRF8TpPRgEsGvG4pXkvGkGqJi4zS`;

useEffect(() => {(async () => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search${apiKey}&q=christchurch`);
    const jsonData = await response.json();
    setCityKey(jsonData[0].Key);
  })();}, [enteredCity, apiKey])
  console.log(cityKey)

  return (
    <div>
      <GetWeather cityKey={cityKey} apiKey={apiKey} />
    </div>
  )
}

export default GetCityKey;