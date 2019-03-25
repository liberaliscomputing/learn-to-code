import React from 'react';
import Cell from './Cell';
import PropTypes from 'prop-types';

const Board = ({ cells, onClick }) => {
  const renderCell = i => {
    const marker = cells[i];

    return (
      <Cell
        key={i}
        onClick={() => onClick(i)}
        marker={marker}
      />
    );
  }

  return (
    <div>
      <div>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  cells: PropTypes.array,
  onClick: PropTypes.func,
};

Board.defaultProps = {
  cells: Array(9).fill(null),
  onClick: null,
};

export default Board;
