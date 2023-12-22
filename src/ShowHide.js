import React from 'react';
import './styles.css';

const ShowHide = () => {
    const [show, setShow] = React.useState(false)
    return (
        <div className='app'>
            <h1>{show && 'Hello !!'}</h1>
            <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        </div>
    );
};

export default ShowHide;