function ImagePopup(props) {
  console.log(props)
  return (
    <div className={`popup popup_type_picture ${props.card && 'popup_opened'} `}>
      <div className="popup__overlay">
        <div className="popup__container popup__container_open-image">
          <button className="popup__close-btn hover-animate" type="button" onClick={props.onClose} />
          <figure className="popup__figure"><img className="popup__image" src={props.card?.link} alt={`Picture of ${props.isOpen?.name}`} />
            <figcaption className="popup__caption">{props.card?.name}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ImagePopup