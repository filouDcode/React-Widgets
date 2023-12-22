import React from 'react';
import './styles.css';

const FontSizer = () => {
    const [size, setSize] = React.useState(20)
    return (
      <div className='app'>
        <button onClick={() => setSize(size + 5)}>Grow</button>
        <button onClick={() => setSize(size - 5)}>Shrink</button>
        <p style={{ fontSize: `${size}px` }}>This sentence is {size}px big</p>
      </div>
    );
};

export default FontSizer;