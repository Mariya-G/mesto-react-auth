import React from "react";
import PopupWithForm from './PopupWithForm.jsx';

function EditAvatarPopup(props) {
  const inputRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [props.isOpen]);

   return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      title = 'Обновить аватар'
      name = 'avatar'
      buttonText = 'Сохранить'
    >
      <input ref={inputRef} defaultValue={''} id="avatar" name="avatar"
            className="popup__input popup__input_type_link" type="url" 
            placeholder="Ссылка на картинку" required />
      <span className="avatar-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;