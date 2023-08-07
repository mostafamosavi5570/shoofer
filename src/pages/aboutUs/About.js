import React from "react";
import "./About.css";
import Twiter from "../../images/vector.png"
import linkdin from "../../images/vector-linkedin.png"
import instagram from "../../images/vector-instagram.png"
const About = () => {
    return (
        <div className="about">
            <div className="about-image">
                <img src={Twiter} alt="" width={20}/>
                <img src={linkdin} alt="" width={20}/>
                <img src={instagram} alt="" width={20}/>
            </div>
            <div className="about-text">
                <h2>ارتباط با ما</h2>
                <p>آدرس:تهران،خیابان نلسون ماندلا،خیابان شهید رحیمی،پلاک 43</p>
                <p>تلفن:021-87641</p>
            </div>

        </div>
    );
}

export default About;
