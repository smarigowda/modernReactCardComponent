import React from 'react';

const Card = ({ author, postedAt, commentText, avatarUrl }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar-container">
                <img className="avatar-image" src={avatarUrl} alt="avatar" ></img>
            </a>
            <div className="content">
                <div className="metadata">
                    <a className="author" href="/">{author}</a>
                    <span className="date">{postedAt}</span>
                </div>
                <div className="text">{commentText}</div>
            </div>
        </div>
    );
};

export default Card;