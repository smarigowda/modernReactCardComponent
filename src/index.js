import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

console.log(React);
console.log(ReactDOM);

const App = () => {
    return (
        <h1 className="heading">
            This is a simple React Application.
        </h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));