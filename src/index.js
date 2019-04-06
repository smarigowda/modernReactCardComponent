import React from 'react';
import ReactDOM from 'react-dom';

console.log(React);
console.log(ReactDOM);

const App = () => {
    return (
        <h1>
            This is a simple React App
        </h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));