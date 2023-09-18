import React, { useState } from 'react';
import './Balloon.css';

function Balloon() {
  const [clicks, setClicks] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [balloonSize, setBalloonSize] = useState({ width: 200, height: 188 });

  function addCounter() {
    if (clicks < 3) {
      setBalloonSize({ width: balloonSize.width + 10, height: balloonSize.height + 10 });
      setClicks(clicks + 1);
    } else if (clicks === 3) {
      setExploded(true);

      setTimeout(() => {
        setClicks(0);
        setExploded(false);
        setBalloonSize({ width: 200, height: 188 }); 
      }, 1000); 
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div id='main'>
          <div
            className={`balloon ${exploded ? "exploded-balloon" : ""}`}
            style={{ width: `${balloonSize.width}px`, height: `${balloonSize.height}px` }}
          >
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
