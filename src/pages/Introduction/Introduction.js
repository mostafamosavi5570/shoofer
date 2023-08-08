import React from "react";
import BlueButton from "../../components/button/BlueButton";
import global from "../../images/global.png";
import WhiteButton from "../../components/button/WhiteButton";
import Import1 from "../../images/import1.png"
import frame from "../../images/Frame.png"

const Introduction = () => {
    return (
        <div className="circle-box">
            <div className="text-box">
                <h1 >معرفی اپلیکیشن شوفر</h1>
                <h3 >شوفر یک سامانه هوشمند باری درخواست صدور بارنامه میباشد که رانندگان عزیز <br/> میتوانند بدون معطلی و
                    پرداخت
                    هزینه کمیسیون اضافی به راحتی بارنامه خود را <br/> دریافت کنند </h3>
                <div className="buttons">
                    <WhiteButton style={{border: '1px solid white', fontSize: "18px",color:'white', padding:"15px 35px"}}>
                    <span className="button-content" >
                    <img src={Import1} alt="" width={20} style={{
                        marginLeft:"5px"
                    }} /></span>دانلود اپلیکیشن
                    </WhiteButton>

                    <BlueButton style={{fontSize: "18px", padding:"15px 15px"}}>
                       <span className="button-content special-content">
                       <img src={global} alt="" width={20} className="size" style={{
                           marginLeft:"5px"
                       }}/>ورود به وب اپلیکیشن
                     </span>
                    </BlueButton>
                </div>
            </div>
            <div className="circle">
                <div className="inner-circle">
                    <img src={frame}/>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
