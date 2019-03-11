import React from 'react';
import PropTypes from 'prop-types';


const FileType = ({ type }) => <i className={`far fa-${type}`} />;

FileType.propTypes = {
  type: PropTypes.string,
};

export default FileType;
