import React from 'react';
import PropTypes from 'prop-types';


const FileName = ({ name }) => <span children={name} />;

FileName.propTypes = {
  name: PropTypes.string,
};

export default FileName;
