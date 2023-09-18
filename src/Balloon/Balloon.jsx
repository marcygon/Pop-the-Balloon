import React, { useState } from 'react';
import './Balloon.css';

function Balloon() {
  const [clicks, setClicks] = useState(0);
  const [exploded, setExploded] = useState(false);

  function addCounter() {
    setClicks(clicks + 1);

    if (clicks === 3) {
      // Trigger explosion animation after 3 clicks
      setExploded(true);

      // Reset everything after the animation
      setTimeout(() => {
        setClicks(0);
        setExploded(false);
      }, 1000); // Adjust the duration to match your animation
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div id='main'>
          <div className={`balloon ${exploded ? "exploded-balloon" : ""}`}>
            {exploded ? null : <div className="string"></div>}
          </div>
          <p id="counter">You clicked <span id="clicks">{clicks}</span> times.</p>
          {clicks < 4 ? <button type="button" onClick={addCounter}>Click me!</button> : null}
        </div>
      </div>
    </div>
  )
}

export default Balloon;
