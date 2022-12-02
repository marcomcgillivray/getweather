import { useEffect, useState } from "react";

const GetWeather = (props) => {
    const [getWeather, setGetWeather] = useState({});


    useEffect(() => {(async () => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Christchurch?unitGroup=metric&key=LZSEGGAKJNM255RGRK4QRYRSZ&contentType=json`);
        const jsonData = await response.json();
        setGetWeather({
            city: jsonData.address,
        });
      })();}, [props.getData ])
      console.log(getWeather)

      return (
        <div>

        </div>
      )
};

export default GetWeather;