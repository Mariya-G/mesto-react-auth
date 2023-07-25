import React from "react";
import PopupWithForm from './PopupWithForm.jsx';

function AddPlacePopup (props) {
  const inputTitleRef = React.useRef('');
  const inputLinkRef = React.useRef('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddPlace({
      title: inputTitleRef.current.value,
      link: inputLinkRef.current.value
    })
  }
  React.useEffect(() => {
    inputTitleRef.current.value = '';
    inputLinkRef.current.value = '';
  }, [props.isOpen]);

  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title = 'Новое место'
      name = 'add'
      onSubmit={handleSubmit}
      buttonText = 'Создать'
  >
    <input ref={inputTitleRef} defaultValue={''} id="input-name" name="title"
            className="popup__input popup__input_type_title" type="text" placeholder="Название" 
            required minLength="2" maxLength="30" />
    <span className="input-name-error popup__input-error"></span>
    <input ref={inputLinkRef} defaultValue={''}  id="input-link" name="link" 
            className="popup__input popup__input_type_link" 
            type="url" placeholder="Ссылка на картинку" required />
    <span className="input-link-error popup__input-error"></span>
  </PopupWithForm>
  );
}
export default AddPlacePopup;