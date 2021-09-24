import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function Main(props) {
   return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src=" " alt="User profile pic" className="profile__image" />
          <button className="profile__edit-image" type="button" aria-label="Edit User Photo"
            onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-btn hover-animate" type="button" aria-label="Edit profile" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button hover-animate" aria-label="Add" type="button"
          onClick={props.onAddPlaceClick}></button>
      </section>


      <section className="elements">


      </section>
      {/* <PopupWithForm name="edit-profile" title="Edit Profile" >
        <input type="text" name="name" id="popup_name" placeholder="Name (eg. Jacques Cousteau)"
          className="popup__field" minLength="2" maxLength="40" required />
        <span className="popup__error" id="popup_name-error"></span>

        <input type="text" name="title" id="popup_title" placeholder="Title (eg. Explorer)" className="popup__field"
          minLength="2" maxLength="200" required />
        <span className="popup__error" id="popup_title-error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-item" title="New Place" >
        <input type="text" name="name" id="popup_image-title" placeholder="Title" className="popup__field" required
          minLength="2" maxLength="30" />
        <span className="popup__error" id="popup_image-title-error"></span>

        <input type="url" name="link" id="popup_image-link" placeholder="Image Link" className="popup__field"
          required />
        <span className="popup__error" id="popup_image-link-error"></span>
      </PopupWithForm>

      <PopupWithForm name="edit-image" title="Change Profile Picture" firstPlaceholder="Image Link" isOpen={isEditAvatarPopupOpen}>
        <input type="url" name="link" id="popup_avatar-link" placeholder="Image Link" className="popup__field"
          required />
        <span className="popup__error" id="popup_avatar-link-error"></span>
      </PopupWithForm>


      <PopupWithForm name="confirm-delete" title="Are you sure?"/> */}

      <ImagePopup />





    </main>

  )
}

export default Main


      
      {/* <div className="popup popup_type_confirm-delete">
        <div className="popup__overlay">
          <div className="popup__container popup__container_confirm-delete">
            <button className="popup__close-btn" type="button"></button>
            <h2 className="popup__title popup__title_delete">Are you sure?</h2>
            <div className="popup__form">
              <button className="popup__save-btn" name="Yes" type="submit">Yes</button>
            </div>
          </div>
        </div>
      </div> */}
