import './style.css';
import { useState } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);

  function addCounter() {
    setClicks(clicks + 1);

    if (clicks === 0) {
      document.querySelector(".balloon").style.width = "200px";
      document.querySelector(".balloon").style.height = "180px";
    } else if (clicks === 1) {
      document.querySelector(".balloon").style.width = "220px";
      document.querySelector(".balloon").style.height = "200px";
    } else if (clicks === 2) {
      document.querySelector(".balloon").style.width = "240px";
      document.querySelector(".balloon").style.height = "220px";
    } else if (clicks === 3) {
      document.querySelector(".balloon").style.width = "260px";
      document.querySelector(".balloon").style.height = "240px";
    } else if (clicks === 4) {
      document.querySelector(".balloon").style.width = "280px";
      document.querySelector(".balloon").style.height = "260px";
    } else if (clicks === 5) {
      document.querySelector(".App").style.display = "none";

      const img = document.createElement('img');
      img.src = 'https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif';
      img.style.display = 'block';
      img.style.margin = '0 auto';
      document.body.appendChild(img);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div id='main'>
          <div className="balloon" style={{ width: "200px", height: "180px" }}></div>
          <p id="counter">You clicked <span id="clicks">{clicks}</span> times.</p>
          <button type="button" onClick={addCounter}>Click me!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
