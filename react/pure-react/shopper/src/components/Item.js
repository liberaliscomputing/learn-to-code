import React from 'react';
import PropTypes from 'prop-types';


const Item = ({ item, children }) => {
  const { name, desc, cost } = item;

  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{cost}</td>
      <td>{children}</td>
    </tr>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Item;
