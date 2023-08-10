import React from "react";
import "./card.css"; // Import your custom CSS file
import headerImage from '../../images/headerImage.png'

const Card = (props) => {
  return (
    <div className="card">
      <img src={headerImage} alt="Header"  style={{position:'absolute', borderRadius:'50px' ,zIndex:'99999',marginTop:-30}} width='70rem' height='auto' />
      <div className="card-header">
        <h4 style={{marginTop:'1rem'}}>روابط کاربری آسان</h4>
      </div>
      <div className="card-body">
        <p style={{paddingRight:'15%',paddingLeft:'15%' ,textAlign:'center' ,fontWeight:'700',lineHeight:'2rem'}}>
         {props.text}
        </p>
        
      </div>
    </div>
  );
};

export default Card;
