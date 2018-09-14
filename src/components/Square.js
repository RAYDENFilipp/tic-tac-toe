import React from 'react';
export default function Square(props) {//functional component
  return (
      <button
      className='square'
      onClick={props.onClick}>
          {props.value}
      </button>
  );
}