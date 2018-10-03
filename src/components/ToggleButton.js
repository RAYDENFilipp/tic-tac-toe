import React from 'react';

export default function ToggleButton (props) {
    return(
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}