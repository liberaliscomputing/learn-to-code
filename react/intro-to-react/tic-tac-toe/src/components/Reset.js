import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Reset = ({ onClick }) => {
  const resetClass = classNames(
    'font-mono',
  );

  return (
    <div className={resetClass}>
      <h2>
        <button 
          onClick={onClick}
          children={'reset'}
        />
      </h2>
      
    </div>
    
  );
};

Reset.propTypes = {
  onClick: PropTypes.func,
};

Reset.defaultProps = {
  onClick: null,
};

export default Reset;
