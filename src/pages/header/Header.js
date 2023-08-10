import React from 'react';
import logo from "../../images/logo۱.svg"
import global from "../../images/global.svg"
import Import from "../../images/import.svg"
import BlueButton from "../../components/button/BlueButton";
import WhiteButton from "../../components/button/WhiteButton";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="btnHeader">
                <WhiteButton>
                    <span className="button-content ">
                    <img src={Import} alt="" width={20} style={{
                        marginLeft:"5px"
                    }}/>دانلود اپلیکیشن    </span>
                </WhiteButton>

                <BlueButton>
                    <span className="button-content">
                           <img src={global} alt="" width={20}/>ورود به وب اپلیکیشن
                     </span>
                </BlueButton>

            </div>


        </header>
    );
}

export default Header;
