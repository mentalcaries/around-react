import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIspProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  // const [popupClose, setPopupClose] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIspProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard)
  }

  

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIspProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(false)
  }

  return (
    <div className="App">
      <div className="root">
        <div className="page-content">
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />

          <PopupWithForm name="edit-image" title="Change Profile Picture"
            isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input type="url" name="link" id="popup_avatar-link" placeholder="Image Link" className="popup__field"
              required />
            <span className="popup__error" id="popup_avatar-link-error"></span>
          </PopupWithForm>

          <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
            <input type="text" name="name" id="popup_name" placeholder="Name (eg. Jacques Cousteau)"
              className="popup__field" minLength="2" maxLength="40" required />
            <span className="popup__error" id="popup_name-error"></span>

            <input type="text" name="title" id="popup_title" placeholder="Title (eg. Explorer)" className="popup__field"
              minLength="2" maxLength="200" required />
            <span className="popup__error" id="popup_title-error"></span>
          </PopupWithForm>

          <PopupWithForm name="new-item" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
            <input type="text" name="name" id="popup_image-title" placeholder="Title" className="popup__field" required
              minLength="2" maxLength="30" />
            <span className="popup__error" id="popup_image-title-error"></span>

            <input type="url" name="link" id="popup_image-link" placeholder="Image Link" className="popup__field"
              required />
            <span className="popup__error" id="popup_image-link-error"></span>
          </PopupWithForm>

          <PopupWithForm name="confirm-delete" title="Are you sure?" onClose={closeAllPopups} />

          <ImagePopup isOpen={selectedCard} onClose={closeAllPopups} />


          <Footer />

        </div>
      </div>


    </div>
  );
}

export default App;
