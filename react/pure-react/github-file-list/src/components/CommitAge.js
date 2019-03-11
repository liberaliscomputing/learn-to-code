import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';


const CommitAge = ({ time }) => <span children={moment(time).fromNow()} />;

CommitAge.propTypes = {
  time: PropTypes.string,
};

export default CommitAge;
