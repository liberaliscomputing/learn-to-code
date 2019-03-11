import React from 'react';
import PropTypes from 'prop-types';


const CommitMessage = ({ commit }) => <span children={commit.message} />;

CommitMessage.propTypes = {
  commit: PropTypes.object,
};

export default CommitMessage;
