import React from 'react';
import "./BlueButton.css"
const BlueButton = ({ children,style }) => {
    return (
        <button className="blue-button" style={style}>
            {children}
        </button>
    );
}

export default BlueButton;