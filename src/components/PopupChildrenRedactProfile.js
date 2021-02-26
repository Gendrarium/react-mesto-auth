function PopupChildrenRedactProfile(props) {

  return (
    <>
      <input
        className="edit-form__input edit-form__input_content_name"
        value={props.name}
        onChange={props.onChangeName}
        id="user-name"
        name="name"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="user-name-error" className="edit-form__error"></span>
      <input
        className="edit-form__input edit-form__input_content_job"
        value={props.description}
        onChange={props.onChangeDescription}
        id="user-job"
        name="job"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="user-job-error" className="edit-form__error"></span>
    </>
  );
}

export default PopupChildrenRedactProfile;
