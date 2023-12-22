import React from 'react';

const AlignMe = () => {
    const [alignment, setAlignment] = React.useState('center')
    return (
      <div>
        <h1 style={{ textAlign: alignment}}>!!! Align Me !!!</h1>
        <div className='app'>
          <button onClick={() => setAlignment('left')}>Left</button>
          <button onClick={() => setAlignment('center')}>Center</button>
          <button onClick={() => setAlignment('right')}>Right</button>
        </div>
      </div>
    );
};

export default AlignMe;