import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

console.log(React);
console.log(ReactDOM);

const App = () => {
    const text = 'A React App !';
    return (
        <div className="heading">
            {text}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));