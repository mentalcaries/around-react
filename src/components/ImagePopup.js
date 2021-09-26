function ImagePopup(props) {
  return (
    <div className={`popup popup_type_picture ${props.isOpen ? 'popup_opened' : ''} `}>
      <div className="popup__overlay">
        <div className="popup__container popup__container_open-image">
          <button className="popup__close-btn hover-animate" type="button" onClick={props.onClose} />
          <figure className="popup__figure"><img className="popup__image" src={props.isOpen?.link} alt=" " />
            <figcaption className="popup__caption">{props.isOpen?.name}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ImagePopup