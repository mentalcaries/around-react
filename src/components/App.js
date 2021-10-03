import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {


  const [currentUser, setCurrentUser] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIspProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState()


  React.useEffect(() => {
    api.getProfileInfo()
      .then((res)=>{setCurrentUser(res)})
  },[])

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

  function handleUpdateUser(){
    api.setProfileInfo()
    .then ((res)=>setCurrentUser(res))
  }

  return (
    <div className="App">
      <div className="root">
        <CurrentUserContext.Provider value={currentUser}>
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
              <span className="popup__error" id="popup_avatar-link-error" />
            </PopupWithForm>

            <EditProfilePopup  isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
           
            <PopupWithForm name="new-item" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
              <input type="text" name="name" id="popup_image-title" placeholder="Title" className="popup__field" required
                minLength="2" maxLength="30" />
              <span className="popup__error" id="popup_image-title-error" />
              <input type="url" name="link" id="popup_image-link" placeholder="Image Link" className="popup__field"
                required />
              <span className="popup__error" id="popup_image-link-error"></span>
            </PopupWithForm>
            
            <PopupWithForm name="confirm-delete" title="Are you sure?" onClose={closeAllPopups} />
            
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      </div>


    </div>
  );
}

export default App