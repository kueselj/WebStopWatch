import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  

  var [time, setTime] = useState({hours: 0, mins: 0, seconds: 0, ms: 0})

  function start() {
    setInterval(() => updateClock(), 10)
  }

  function stop() {

  }

  function reset() {
    setTime({hours: 0, mins: 0, seconds: 0, ms: 0})
  }

  var mili = time.ms;
  var sec = time.seconds;
  var min = time.mins;
  var hour = time.hours;

  function updateClock() {
    

    mili = mili + 1
    

    if (mili == 100) {
      mili = 0
      sec = sec + 1
    }
    if (sec == 60) {
      sec = 0
      min = min + 1
    }
    if (min == 60) {
      min = 0
      hour = hour + 1
    }
    
    return setTime({hours: hour, mins: min, seconds: sec, ms: mili});
    

  }

  return (
    <div className="App">
      <header className="App-header">
        <div class = "poop">
          <div class="timer">
            <div class="timer-element">
            {time.hours}:
            </div>
            <div class="timer-element">
            {time.mins}:
            </div>
            <div class="timer-element">
            {time.seconds}.
            </div>
            <div class="timer-element">
            {time.ms}
            </div>
          </div>
          <div class = "buttons">
            <button class = "button" onClick={start}>
              Start
            </button>
            <button class = "button">
              Stop
            </button>
            <button class = "button" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
