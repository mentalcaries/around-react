import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext)

  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={isOpen}
      onClose={onClose} onSubmit={handleSubmit}>
      <input type="text" name="name" id="popup_name" value={name || ''} onChange={handleNameChange} placeholder="Name (eg. Jacques Cousteau)"
        className="popup__field" minLength="2" maxLength="40" required />
      <span className="popup__error" id="popup_name-error" />
      <input type="text" name="title" id="popup_title" value={description || ''} onChange={handleDescriptionChange} placeholder="Title (eg. Explorer)" className="popup__field"
        minLength="2" maxLength="200" required />
      <span className="popup__error" id="popup_title-error" />
    </PopupWithForm>
  )
}
export default EditProfilePopup