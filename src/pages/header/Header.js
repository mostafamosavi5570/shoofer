import React from 'react';
import './Header.css';
import logo from "../../images/logo۱.png"
import global from "../../images/global.png"
import Import from "../../images/import.png"
import BlueButton from "../../components/button/BlueButton";
import WhiteButton from "../../components/button/WhiteButton";

const Header = () => {
    return (
        <header className="header">

            <div className="buttons">
                <BlueButton>
                    <span className="button-content">
                           ورود به وب اپلیکیشن <img src={global} alt="" width={20} style={{
                               marginLeft:"10px"
                    }}/>
                     </span>
                </BlueButton>
                <WhiteButton>
                    <span className="button-content ">
                    دانلود اپلیکیشن    <img src={Import} alt="" width={20} style={{
                        marginLeft:"10px"
                    }}/></span>
                </WhiteButton>
            </div>

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </header>
    );
}

export default Header;
