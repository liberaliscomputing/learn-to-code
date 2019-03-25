import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Cell = ({ onClick, marker }) => {
  const cellClass = classNames(
    'w-16',
    'h-16',
    'border-black',
    'border-solid',
    'border',
    'font-mono',
  );

  return (
    <button 
      className={cellClass}
      onClick={onClick}
      children={marker}
    />
  );
};

Cell.propTypes = {
  marker: PropTypes.string,
  onClick: PropTypes.func,
};

Cell.defaultProps = {
  marker: null,
  onClick: null,
};

export default Cell;
