import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';


const Avatar = ({ gravtar }) => {
  return (
    <img
      className="avatar"
      src={`https://www.gravatar.com/avatar/${gravtar}`}
      alt="avatar"
    />
  );
};

const Message = ({ message }) => {
  return (
    <div className="message">{message}</div>
  );
};

const NameWithHandle = ({ nameWithHandle }) => {
  const { name, handle } = nameWithHandle;
  return (
    <span>
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

const Time = ({ time }) => {
  return (
    <span className="time">{time.toISOString()}</span>
  );
};

const Count = ({ count }) => {
  return (
    count > 0 
    ? <span className="count">{count}</span> 
    : null
  );
};

const ReplyButton = () => {
  return (
    <span className="button">
      <i className="fa fa-reply" />
    </span>
  );
};
  
const RetweetButton = ({ count }) => {
  return (
    <span className="button">
      <i className="fa fa-retweet" />
      <Count count={count} />
    </span>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="button">
      <i className="fa fa-heart" />
      <Count count={count} />
    </span>
  );
};
  
const MoreOptionsButton = () => {
  return (
    <span className="button">
      <i className="fa fa-ellipsis-h" />
    </span>
  );
};

const Tweet = ({ tweet }) => {
  const { gravatar, nameWithHandle, time, message, stats } = tweet;
  const { retweets, likes } = stats;

  return (
    <div className="tweet">
      <Avatar gravtar={gravatar}/>
      <div className="content">
        <NameWithHandle nameWithHandle={nameWithHandle}/>
        <Time time={time} />
        <Message message={message} />
        <div className="button-group">
          <ReplyButton />
          <RetweetButton count={retweets} />
          <LikeButton count={likes } />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  gravatar: PropTypes.string,
  nameWithHandle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }),
  time: PropTypes.object,
  message: PropTypes.string,
  stats: PropTypes.shape({
    retweets: PropTypes.number,
    likes: PropTypes.number,
  }),
};

const testTweet = {
  gravatar: 'xyz',
  nameWithHandle: {
    name: 'noname',
    handle: 'noname',
  },
  time: new Date(),
  message: 'This is less than 144 characters.',
  stats: {
    retweets: 1,
    likes: 2,
  },
};

ReactDOM.render(
  <Tweet tweet={testTweet}/>, 
  document.getElementById('root')
);
