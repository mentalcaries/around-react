import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();    
    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm name="edit-image" title="Change Profile Picture"
      isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input type="url" name="link" ref={avatarRef} id="popup_avatar-link" placeholder="Image Link" className="popup__field"
        required />
      <span className="popup__error" id="popup_avatar-link-error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup