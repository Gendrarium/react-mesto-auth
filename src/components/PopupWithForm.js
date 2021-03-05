function PopupWithForm(props) {

  return (
    <div className={`popup page__popup popup_button_${props.name} ${props.isOpen}`}   >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}/>
        <h2 className="popup__title">{props.title}</h2>
        <form onSubmit={props.onSubmit} className="popup__form" target="_self" name={props.name} method="get">
        {props.children}
          <button className="popup__button" type="submit">{props.buttonCaption}</button>
        </form>
      </div>
     </div>
  );
}

export default PopupWithForm;
