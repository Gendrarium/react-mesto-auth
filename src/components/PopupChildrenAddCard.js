function PopupChildrenAddCard(props) {

  return (
    <>
      <input
        className="popup__input popup__input_content_name"
        value={props.name}
        onChange={props.onChangeName}
        id="place-name"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span id="place-name-error" className="popup__error"></span>
      <input
        className="popup__input popup__input_content_link"
        value={props.link}
        onChange={props.onChangeLink}
        id="user-link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="user-link-error" className="popup__error"></span>
    </>
  );
}

export default PopupChildrenAddCard;
