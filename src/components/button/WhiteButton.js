// WhiteButton.js

import React from 'react';
import "./WhiteButton.css"

const WhiteButton = ({children, style}) => {
    return (
        <button className="white-button" style={style}>
            {children}
        </button>
    );
}

export default WhiteButton;
