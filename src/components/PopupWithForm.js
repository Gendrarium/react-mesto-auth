function PopupWithForm(props) {

  return(
    <div className={`edit-form page__edit-form edit-form_button_${props.name} ${props.isOpen}`}   >
      <div className="edit-form__container">
        <button className="edit-form__close-button" type="button" onClick={props.onClose}></button>
        <h2 className="edit-form__title">{props.title}</h2>
        <form onSubmit={props.onSubmit} className="edit-form__form" target="_self" name={props.name} method="get">
        {props.children}
          <button className="edit-form__button" type="submit">{props.buttonCaption}</button>
        </form>
      </div>
     </div>
  );
}

export default PopupWithForm;
