import React, { useState } from 'react';

const ColorSlider = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
  return (
    <div>
      <div className='div'>
        <div
          style={{
            width: 100,
            height: 50,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          }}
        ></div>
      </div>
      <div className='app'>
        <p>{`rgb(${red}, ${green}, ${blue})`}</p>
        <input
          type='range'
          min='0'
          max='255'
          value={red}
          onChange={(e) => setRed(e.target.value)}
        />
      </div>
      <div className='app'>
        <input
          type='range'
          min='0'
          max='255'
          value={green}
          onChange={(e) => setGreen(e.target.value)}
        />
      </div>
      <div className='app'>
        <input
          type='range'
          min='0'
          max='255'
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorSlider;
