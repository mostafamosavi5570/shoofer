import React from "react";
import Twiter from "../../images/vector.svg"
import linkdin from "../../images/vector-linkedin.svg"
import instagram from "../../images/vector-instagram.svg"

const About = () => {
    return (
        <div className="about">
            <div className="about-text">
                <h2>ارتباط با ما</h2>
                <p>آدرس:تهران،خیابان نلسون ماندلا،خیابان شهید رحیمی،پلاک 43</p>
                <p>تلفن:021-87641</p>
            </div>

            <div className="about-image">
                <img src={Twiter} alt="" width={20} style={{ border: '1px solid #fff', borderRadius: '50%', padding: '7px 5px' }} />
                <img src={linkdin} alt="" width={20} style={{ border: '1px solid #fff', borderRadius: '50%', padding: '5px' }} />
                <img src={instagram} alt="" width={20} style={{ border: '1px solid #fff', borderRadius: '50%', padding: '5px 5px' }} />
            </div>

        </div>
    );
}

export default About;
