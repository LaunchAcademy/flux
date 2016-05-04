// GroceryList.js
import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {
  let groceries = props.groceries.map(grocery => {
    const { id, name } = grocery;
    let onButtonClick = () => props.handleButtonClick(id);

    return (
      <Grocery
        key={id}
        name={name}
        handleButtonClick={onButtonClick}
      />
    );
  });

  return (
    <ul>
      {groceries}
    </ul>
  );
};

export default GroceryList;
