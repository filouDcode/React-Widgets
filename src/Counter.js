import React from 'react';
import './styles.css'

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div className='app'>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Sub</button>
        </div>
    );
}

export default Counter;