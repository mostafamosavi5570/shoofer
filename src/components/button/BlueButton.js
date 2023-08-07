import React from 'react';
import "./BlueButton.css"
const BlueButton = ({ children }) => {
    return (
        <button className="blue-button">
            {children}
        </button>
    );
}

export default BlueButton;