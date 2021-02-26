import authYes from '../images/auth-yes.svg';
import authNo from '../images/auth-no.svg';

function InfoTooltip(props) {

  return (
    <div className={`edit-form page__edit-form ${props.isOpen}`}>
      <div className="edit-form__container">
        <button className="edit-form__close-button" type="button" onClick={props.onClose}/>
        <img className="edit-form__icon" src={props.isSuccess ? authYes : authNo} alt={props.isSuccess ? "Успешно" : "Ошибка"}/>
        <h2 className="edit-form__title">{props.isSuccess ? "Вы успешно зарегистрировались" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
      </div>
    </div>
  );
 }
 export default InfoTooltip;
