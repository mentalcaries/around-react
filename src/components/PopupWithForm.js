function PopupWithForm(props) {
   return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay">
        <div className="popup__container">
          <button className="popup__close-btn" type="button"></button>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={props.name} noValidate>
            {props.children}
            <button className="popup__save-btn" type="submit" name="Save" default="Save">Save</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default PopupWithForm