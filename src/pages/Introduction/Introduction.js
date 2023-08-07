import React from "react";
import "./Introduction.css";
import BlueButton from "../../components/button/BlueButton";
import global from "../../images/global.png";
import WhiteButton from "../../components/button/WhiteButton";
import Import from "../../images/import.png";

const Introduction = () => {
    return (
        <div className="circle-box">
            <div className="circle">
                <div className="inner-div"></div>
            </div>
            <div className="text-box">
               <h1>معرفی اپلیکیشن شوفر</h1>
               <h3>شوفر یک سامانه هوشمند باری درخواست صدور بارنامه میباشد که رانندگان عزیز میتوانند بدون معطلی و پرداخت هزینه کمیسیون اضافی به راحتی بارنامه خود را دریافت کنند </h3>
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
            </div>
        </div>
    );
};

export default Introduction;
