import './App.css';
import GetCityKey from './GetCityKey';
import { useState} from 'react';

function App() {
  // Get user city input from the form
  const [enteredCity, setEnteredCity] = useState('');
  // Manage touched state of form if value is invalid
  const [enteredCityTouched, setEnteredCityTouched] = useState(false);

  // Simple validation to ensure input isnt empty onBlur
  const enteredCityIsValid = enteredCity.trim() !== '';
  const enteredCityIsInvalid = !enteredCityIsValid && enteredCityTouched;

  const cityChangeHandler = event => {
    setEnteredCity(event.target.value)
  };

  const blurHandler = () => {
    setEnteredCityTouched(true)
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    
    setEnteredCity('');
    setEnteredCityTouched(false);
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

        <button type='submit'>Check Weather</button>
        {enteredCityIsInvalid && <p>Please enter a valid city</p>}

        <GetCityKey enteredCity={enteredCity} />
      </form>
    </div>
  );
}

export default App;
