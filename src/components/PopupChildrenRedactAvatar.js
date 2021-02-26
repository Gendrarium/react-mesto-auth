function PopupChildrenRedactAvatar(props) {

  return (
    <>
      <input
        className="edit-form__input edit-form__input_content_name"
        ref={props.inputRef}
        id="avatar-url"
        name="avatar"
        type="url"
        placeholder="Ссылка на аватар"
        required
      />
      <span id="avatar-url-error" className="edit-form__error"></span>
    </>
  );
}

export default PopupChildrenRedactAvatar;
