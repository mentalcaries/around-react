import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {


  const [currentUser, setCurrentUser] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIspProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState()


  React.useEffect(() => {
    api.getProfileInfo()
      .then((res) => { setCurrentUser(res) })
  }, [])

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

  function handleUpdateUser(userInfo) {
    api.setProfileInfo(userInfo)
      .then((res) => setCurrentUser(res));
    closeAllPopups();
  }

  function handleUpdateAvatar(link) {
    api.updateProfilePicture(link)
      .then((res) => setCurrentUser(res));
    closeAllPopups();
  }

  const [cards, setCards] = React.useState([]);



  React.useEffect(() => {
    api.getCards()
      .then(setCards)
  }, [])

  function handleCardLike(card){
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    api.changeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
  }

  function handleDeleteCard(card){
    api.deleteCard(card._id)
    .then (setCards((cards)=>cards.filter(c=> c._id !== card._id)))
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
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCard}
            />


            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

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