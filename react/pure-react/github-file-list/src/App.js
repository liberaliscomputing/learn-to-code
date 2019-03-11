import React from 'react';

import Files from './components/Files';


const App = () => <Files files={testFiles} />;

const testFiles = [
  {
    id: 1,
    type: 'folder',
    name: 'src',
    updatedAt: '2016-07-11 21:24:00', 
    latestCommit: {
      message: 'Initial commit',
    },
  }, 
  {
    id: 2,
    type: 'folder',
    name: 'tests',
    updatedAt: '2016-07-11 21:24:00', 
    latestCommit: {
      message: 'Initial commit',
    },
  }, 
  {
    id: 3,
    type: 'file',
    name: 'README',
    updatedAt: '2016-07-18 21:24:00', 
    latestCommit: {
      message: 'Added a readme',
    },
  } 
];

export default App;
