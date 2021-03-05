function PopupChildrenRedactAvatar(props) {

  return (
    <>
      <input
        className="popup__input popup__input_content_name"
        ref={props.inputRef}
        id="avatar-url"
        name="avatar"
        type="url"
        placeholder="Ссылка на аватар"
        required
      />
      <span id="avatar-url-error" className="popup__error"></span>
    </>
  );
}

export default PopupChildrenRedactAvatar;
