import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupChildrenRedactAvatar from './PopupChildrenRedactAvatar';

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmitForm(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name='avatar-edit'
      title='Обновить аватар'
      buttonCaption='Сохранить'
      isOpen={props.isOpen ? 'popup_display-flex' : ''}
      onClose={props.onClose}
      onSubmit={handleSubmitForm}
    >
      <PopupChildrenRedactAvatar inputRef={inputRef}/>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
