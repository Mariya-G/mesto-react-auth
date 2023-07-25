import React from "react";

function ImagePopup (props) {
  return(
    <div className={`popup popup_view ${props.card.link ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_view">
        <button type="button" className="popup__close-button popup__close-button_view" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <p className="popup__name">{props.card.name}</p>
      </div>
    </div>
  );
}
export default ImagePopup;