import React from 'react';
import PropTypes from 'prop-types';

import File from './File';


const Files = ({ files }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Message</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {files.map(file => <File key={file.id} file={file} />)}
      </tbody>
    </table>
  );
};

Files.propTypes = {
  files: PropTypes.array,
};

export default Files;
