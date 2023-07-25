import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeletePopup();
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Да"
    />
  )
}

export default DeletePopup;