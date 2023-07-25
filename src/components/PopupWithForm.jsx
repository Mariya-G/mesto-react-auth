import React from "react";

function PopupWithForm (props) {
  return(
    <section className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className='popup__close-button' onClick={props.onClose}></button>
        <h2 className="popup__header">{props.title}</h2>
        <form onSubmit={props.onSubmit} name={props.name} 
              className={`popup__form popup__form_${props.name}`} method="post" novalidate>
          {props.children}
          <button className="popup__button" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;