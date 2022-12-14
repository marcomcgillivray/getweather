import './App.css';
import { useState} from 'react';
import GetWeather from './GetWeather';

function App() {
  // Get user city input from the form
  const [enteredCity, setEnteredCity] = useState('');
  // Manage touched state of form if value is invalid
  const [enteredCityTouched, setEnteredCityTouched] = useState(false);
  // Button Click Handler
  const [buttonClicked, setButtonClicked] = useState(false);

  // Simple validation to ensure input isnt empty onBlur
  const enteredCityIsValid = enteredCity.trim() !== '';
  const enteredCityIsInvalid = !enteredCityIsValid && enteredCityTouched;


  const blurHandler = () => {
    setEnteredCityTouched(true)
  };

  const buttonClickHandler = event => {
    event.preventDefault();
    setButtonClicked(true);
  }

    // Assign new state value
    const cityChangeHandler = event => {
      setEnteredCity(event.target.value)
    };

    const resetForm = () => {
      setEnteredCity('')
      setButtonClicked(false)
      setEnteredCityTouched(false)
    }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredCityIsValid && !buttonClicked) {
      return;
    } else {

      GetWeather();
      resetForm();
    }
  };


  return (
    <div className="App">
      <div className='header'>
        <h2>Check Weather</h2>
      </div>
        <form onSubmit={formSubmissionHandler}>

        <label htmlFor='city'>Enter a City Below: </label><br></br>
        
        <input
        type='text'
        placeholder='Enter a City'
        onChange={cityChangeHandler}
        value={enteredCity}
        onBlur={blurHandler}></input><br></br>

        <button type='button' onClick={buttonClickHandler}>CHECK WEATHER</button>
        {enteredCityIsInvalid && <p>Please enter a valid city</p>}

        <GetWeather enteredCity={enteredCity} buttonClicked={buttonClicked} />
      </form>
      <a href="https://github.com/marcomcgillivray/getweather">Link to Github Repository</a>
    </div>
  );
}

export default App;
