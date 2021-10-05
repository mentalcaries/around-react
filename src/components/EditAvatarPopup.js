import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onOutsideClick }) {

  const avatarRef = React.useRef();

  // const [errorMessage, showErrorMessage] = React.useState('')
  
  // React.useEffect(()=>{
  //   showErrorMessage(avatarRef.current.validationMessage)
  // }, [errorMessage])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm name="edit-image"
      title="Change Profile Picture"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOutsideClick={onOutsideClick}>

      <input
        type="url"
        name="link"
        ref={avatarRef}
        id="popup_avatar-link"
        placeholder="Image Link" className="popup__field"
        required
      />

      <span className="popup__error popup__error_visible" id="popup_avatar-link-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup