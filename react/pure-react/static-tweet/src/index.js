import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Avatar = () => {
  return (
    <img
      className="avatar"
      src="https://www.gravatar.com/avatar/nothing" 
      alt="avatar"
    />
  );
};

const Message = () => {
  return (
    <div className="message">
      This is less than 144 characters.
    </div>
  );
};

const NameWithHandle = () => {
  return (
    <span>
      <span className="name">
        FirstName LastName
      </span>
      <span className="handle">
        @handle
      </span>
    </span>
  );
};

const Time = () => {
  return (
    <span className="time">
      {(new Date()).toISOString()}
    </span>
  );
};

const ReplyButton = () => {
  return (
    <i className="fa fa-reply reply-button" />
  );
};
  
const RetweetButton = () => {
  return (
    <i className="fa fa-retweet retweet-button" />
  );
};

const LikeButton = () => {
  return (
    <i className="fa fa-heart like-button" />
  );
};
  
const MoreOptionsButton = () => {
  return (
    <i className="fa fa-ellipsis-h more-options-button" />
  );
};

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Tweet />, 
  document.getElementById('root')
);
