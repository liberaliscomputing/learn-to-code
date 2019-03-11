import React from 'react';
import PropTypes from 'prop-types';

import FileType from './FileType';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import CommitAge from './CommitAge';


const File = ({ file }) => {
  const { type, name, latestCommit, updatedAt } = file;

  return (
    <tr>
      <td><FileType type={type} /></td>
      <td><FileName name={name} /></td>
      <td><CommitMessage commit={latestCommit} /></td>
      <td><CommitAge time={updatedAt} /></td>
    </tr>
  );
};

File.propTypes = {
  file: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    latestCommit: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default File;
