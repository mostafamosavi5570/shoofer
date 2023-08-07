// WhiteButton.js

import React from 'react';
import "./WhiteButton.css"
const WhiteButton = ({ children }) => {
    return (
        <button className="white-button">
            {children}
        </button>
    );
}

export default WhiteButton;
