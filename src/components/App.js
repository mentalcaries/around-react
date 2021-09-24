import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Footer from "./Footer";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setIspProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIspProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick() {
    const cardPopup = document.querySelector(".popup_type_picture")
    cardPopup.classList.add("popup_opened")
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
            onCardClick={handleCardClick}>

            <PopupWithForm name="edit-image" title="Change Profile Picture" 
            firstPlaceholder="Image Link" isOpen={isEditAvatarPopupOpen}>
              <input type="url" name="link" id="popup_avatar-link" placeholder="Image Link" className="popup__field"
                required />
              <span className="popup__error" id="popup_avatar-link-error"></span>
            </PopupWithForm>


          </Main>
          <Footer />

        </div>
      </div>


    </div>
  );
}

export default App;
