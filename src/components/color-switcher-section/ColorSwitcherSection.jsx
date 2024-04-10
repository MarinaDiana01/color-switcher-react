import { useState } from 'react';
import './ColorSwitcherSection.css';

const colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];


const ColorSwitcherSection = () => {

  let [colorIndex, setColorIndex] = useState(0);
  let [counter, setCounter] = useState(0);

  const switchBackgroundColor = () => {
    if (colorIndex === 4) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
    setCounter(counter + 1);
  };

  const reset = () => {
   setCounter(0);
   setColorIndex(0);
  };

  return (
    <section style={{backgroundColor: colors[colorIndex]}} className="container">
      <p className="click-counter"> Counter: {counter} </p>
      <div className="text-container">
        <p className="container-title"> Background Color: </p>
        <p style={{color: colors[colorIndex]}} className="container-title-color"> {colors[colorIndex]} </p>
      </div>
      <div className="buttons-container">
        <button onClick={switchBackgroundColor} className="click-me-button"> Click me </button>
        <button onClick={reset} className="click-me-button button-reset"> Reset </button>
      </div>
    </section>
  )
};

export default ColorSwitcherSection;