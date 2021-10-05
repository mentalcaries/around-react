import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, onOutsideClick }) {

  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)


  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlaceSubmit({ name:title, link, owner:{_id:currentUser._id}, likes:[], _id:'' })
  }

  function handleTitleChange(evt) {
    setTitle(evt.target.value)
  }
  
  function handleLinkChange(evt) {
    setLink(evt.target.value)
  }

  return (

    <PopupWithForm name="new-item" title="New Place" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} onOutsideClick={onOutsideClick}>
      <input type="text" name="name" id="popup_image-title" placeholder="Title" className="popup__field" required
        minLength="2" maxLength="30" onChange={handleTitleChange}/>
      <span className="popup__error" id="popup_image-title-error" />
      <input type="url" name="link" id="popup_image-link" placeholder="Image Link" className="popup__field"
        required onChange={handleLinkChange}/>
      <span className="popup__error" id="popup_image-link-error"></span>
    </PopupWithForm>

  )
}

export default AddPlacePopup