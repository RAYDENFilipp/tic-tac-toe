import React from 'react';
export default function Square(props) {//functional component
  return (
      <button
      className={`square ${props.cssClass}`}
      onClick={props.onClick}>
          {props.value}
      </button>
  );
}