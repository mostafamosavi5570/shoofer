import React from 'react';
import logo from "../../images/logo۱.png"
import global from "../../images/global.png"
import Import from "../../images/import.png"
import BlueButton from "../../components/button/BlueButton";
import WhiteButton from "../../components/button/WhiteButton";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="btnHeader">
                <WhiteButton style={{
                    padding:"15px 35px"
                }}>
                    <span className="button-content ">
                    <img src={Import} alt="" width={20} style={{
                        marginLeft:"5px"
                    }}/>دانلود اپلیکیشن    </span>
                </WhiteButton>

                <BlueButton style={{
                 padding:"15px 15px"
                }}>
                    <span className="button-content">
                           <img src={global} alt="" width={20} style={{
                               marginLeft:"5px"
                           }}/>ورود به وب اپلیکیشن
                     </span>
                </BlueButton>

            </div>


        </header>
    );
}

export default Header;
