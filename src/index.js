import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import './main.scss';

console.log(React);
console.log(ReactDOM);

const App = () => {
    const text = 'A React App !';
    return (
        <div className="container">
            <div className="comment">
                <a href="/" className="avatar-container">
                    <img className="avatar-image" src={faker.image.avatar()} alt="avatar" ></img>
                </a>
                <div className="content">
                    <div className="metadata">
                        <a className="author" href="/">Santosh Marigowda</a>
                        <span className="date"> Today at 6 PM</span>
                    </div>
                    <div className="text">Nice blog post !</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar-container">
                    <img className="avatar-image" src={faker.image.avatar()} alt="avatar" ></img>
                </a>
                <div className="content">
                    <div className="metadata">
                        <a className="author" href="/">Roopa Santosh</a>
                        <span className="date">Yesterday at 2 PM</span>
                    </div>
                    <div className="text">Excellent blog post !</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar-container">
                    <img className="avatar-image" src={faker.image.avatar()} alt="avatar" ></img>
                </a>
                <div className="content">
                    <div className="metadata">
                        <a className="author" href="/">Samarth Gowda</a>
                        <span className="date">Yesterday at 2 PM</span>
                    </div>
                    <div className="text">Amazing post, thanks !</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));