import React from "react";
import Archive from "../../images/archive-tick.svg";
import frame from "../../images/phone2.svg";
import SliderWithHyphens from "../../components/slider/SliderWithHyphens";

const Attributes = () => {
    return (
        <div className="attributes">

            <div className="Head-att">
                <img src={Archive} alt=""/>
                <h2> ویژگی های شوفر</h2>
            </div>
            <div className="attributesContent">
                <div className="">
                    <SliderWithHyphens/>
                </div>
                <div className="">
                    <img src={frame} className="imgAttributesContent"/>
                </div>
            </div>

        </div>
    );
};

export default Attributes;
