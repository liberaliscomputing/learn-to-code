import React from 'react';
import ReactDOM from 'react-dom';


const HelloWord = () => {
  return (
    <div children="Hello World" />
  );
};

ReactDOM.render(
  <HelloWord />, 
  document.getElementById('root')
);
