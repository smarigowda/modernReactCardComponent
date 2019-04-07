import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

console.log(React);
console.log(ReactDOM);

const App = () => {
    const text = 'A React App !';
    return (
        <div className="container">
            <div className="comment">
                <a href="/" className="avatar-container">
                    <img className="avatar-image" src="/avatar-1.jpg" alt="avatar image" ></img>
                </a>
                <div className="content">
                    <a className="author" href="/">Santosh M</a>
                    <div className="metadata">
                        <span className="date"> Today at 6 PM</span>
                    </div>
                    <div className="text"> Nice blog post !</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));