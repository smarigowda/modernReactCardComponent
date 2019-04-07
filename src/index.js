import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


import Card from './components/Card';
import './main.scss';

console.log(React);
console.log(ReactDOM);

const App = () => {
    const avatarUrl = faker.image.avatar();
    console.log(avatarUrl);
    return (
        <div className="container">
            <Card
                author="Santosh Marigowda"
                postedAt="Two days ago"
                commentText="Nice blog post !"
                avatarUrl={faker.image.avatar()}
                />
            <Card
                author="Roopa Santosh"
                postedAt="Today at 6 PM"
                commentText="Excellent blog post !"
                avatarUrl={faker.image.avatar()}
                />
            <Card
                author="Samarth Gowda"
                postedAt="Yesterday at 2 PM"
                commentText="Amazing post ! Thank you"
                avatarUrl={faker.image.avatar()}
                />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));