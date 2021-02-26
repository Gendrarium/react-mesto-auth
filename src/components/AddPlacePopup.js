import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupChildrenAddCard from './PopupChildrenAddCard';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    props.onAddPlace({name, link});
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmitForm}
      name='add'
      title='Новое место'
      buttonCaption='Создать'
      isOpen={props.isOpen ? 'edit-form_display-flex' : ''}
      onClose={props.onClose}
    >
      <PopupChildrenAddCard
        name={name}
        link={link}
        onChangeName={handleNameChange}
        onChangeLink={handleLinkChange}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
