import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupChildrenRedactProfile from './PopupChildrenRedactProfile';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmitForm(e) {
  e.preventDefault();

  props.onUpdateUser({
    name,
    about: description,
  });
  }

  return (
  <PopupWithForm name='redact' title='Редактировать профиль' buttonCaption='Сохранить' isOpen={props.isOpen ? 'edit-form_display-flex' : ''} onClose={props.onClose} onSubmit={handleSubmitForm}>
    <PopupChildrenRedactProfile name={name} description={description} onChangeName={handleNameChange} onChangeDescription={handleDescriptionChange}/>
  </PopupWithForm>
    )
}

export default EditProfilePopup;
