import React from "react";
import Archive from "../../images/archive-tick.png";
import frame from "../../images/Frame.png";


const Attributes = () => {
    return (
        <div className="attributes">

            <div className="Head-att">
                <img src={Archive} alt=""/>
                <span> ویژگی های شوفر</span>
            </div>
            <div className="attributesContent">
                <div className="">dfgdfgdfg</div>
                <div className="">
                    <img src={frame} className="imgAttributesContent"/>
                </div>
            </div>

        </div>
    );
};

export default Attributes;
