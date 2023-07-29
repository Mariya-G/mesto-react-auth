import React from 'react';
import success from "../images/success.svg";
import fail from "../images/fail.svg";

function InfoTooltip(props) {
  return(
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup_tooltip">
      <button type="button" className='popup__close-button' onClick={props.onClose}></button>
        <img src={props.tooltip.image ? success : fail} className="popup__image-info" alt={props.tooltip.message}/>
        <h2 className="popup__message">{props.tooltip.message}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;