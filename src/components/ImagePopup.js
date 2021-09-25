function ImagePopup(props) {
  return (
    <div className="popup popup_type_picture">
      <div className="popup__overlay">
        <div className="popup__container popup__container_open-image">
          <button className="popup__close-btn hover-animate" type="button"></button>
          <figure className="popup__figure"><img className="popup__image" src={props.link} alt=" " />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ImagePopup