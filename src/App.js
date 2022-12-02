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

  const cityChangeHandler = event => {
    setEnteredCity(event.target.value)
  };

  const blurHandler = () => {
    setEnteredCityTouched(true)
  };

  const buttonClickHandler = event => {
    event.preventDefault();
    setButtonClicked(true);
    console.log(buttonClicked)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredCityIsValid && !buttonClicked) {
      return;
    }
    
    setEnteredCity('');
    setEnteredCityTouched(false);
    setButtonClicked(false);
  };

  return (
    <div className="App">
      <h2>Enter a city:</h2>
      <form onSubmit={formSubmissionHandler}>

        <label htmlFor='city'></label>

        <input
        type='text'
        placeholder='Enter a City'
        onChange={cityChangeHandler}
        value={enteredCity}
        onBlur={blurHandler}></input><br></br>

        <button type='submit' onClick={buttonClickHandler}>Check Weather</button>
        {enteredCityIsInvalid && <p>Please enter a valid city</p>}

        <GetWeather enteredCity={enteredCity} buttonClicked={buttonClicked} />
      </form>
    </div>
  );
}

export default App;
