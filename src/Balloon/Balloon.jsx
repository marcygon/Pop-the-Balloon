import React, { useState } from 'react';
import './Balloon.css';

function Balloon() {
  const [clicks, setClicks] = useState(0);

  function addCounter() {
    setClicks(clicks + 1);
  }

  let balloonClass = "small-balloon";

  if (clicks === 1) {
    balloonClass = "medium-balloon";
  } else if (clicks === 2) {
    balloonClass = "large-balloon";
  } else if (clicks === 3) {
    balloonClass = "extra-large-balloon";
  }

  return (
    <div className="App">
      <div className="App-header">
        <div id='main'>
          <div className={`balloon ${balloonClass}`}></div>
          <p id="counter">You clicked <span id="clicks">{clicks}</span> times.</p>
          <button type="button" onClick={addCounter}>Click me!</button>
        </div>
      </div>
    </div>
  )
}

export default Balloon;
