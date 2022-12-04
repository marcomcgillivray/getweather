import { ReactComponent as Sun } from './media/sun.svg';
import { ReactComponent as Cloud } from './media/cloudy.svg';
import { ReactComponent as Rain } from './media/rain.svg';

import './SetIcon.css';

const SetIcon = (props) => {
    const getWeather = props.getWeather;

    // Component to output weather image conditionally based upon rain/cloud coverage
    if (getWeather.cloud < 50 && getWeather.rain < 5){
    return (
        <div className='icon'>
            <Sun />
        </div>
    )
    } else if (getWeather.cloud > 50 && getWeather.rain < 5){
            return (
                <div className='icon'>
                    <Cloud />
                </div>
            )
        } else if (getWeather.rain > 5) {
            return (
                <div className='icon'>
                    <Rain />
                </div>
            )
        }


    };

export default SetIcon;