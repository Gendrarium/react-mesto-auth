function ImagePopup(props) {
  return (
    <div className={`edit-form page__edit-form edit-form_button_img ${props.isOpen}`}>
      <div className="edit-form__container edit-form__container_img-popup">
        <button className="edit-form__close-button" type="button" onClick={props.onClose}></button>
        <figure className="edit-form__figure">
          <img className="edit-form__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="edit-form__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
