import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import {api} from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIspProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

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
    setSelectedCard(clickedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIspProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    document.removeEventListener('keydown', handleEscape);
  }

  function handleOutsideClick(evt) {
    if (evt.target.className === 'popup__overlay') {
      closeAllPopups();
    }
  }

  function handleUpdateUser(userInfo) {
    api
      .setProfileInfo(userInfo)
      .then((res) => setCurrentUser(res), closeAllPopups());
  }

  function handleUpdateAvatar(link) {
    api
      .updateProfilePicture(link)
      .then((res) => setCurrentUser(res), closeAllPopups());
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .addNewCard(newCard)
      .then(setCards([newCard, ...cards]), closeAllPopups());
  }

  React.useEffect(() => {
    api.getCards().then(setCards);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleDeleteCard(card) {
    api
      .deleteCard(card._id)
      .then(setCards((cards) => cards.filter((c) => c._id !== card._id)));
  }

  const anyPopupOpen =
    isEditAvatarPopupOpen ||
    isAddPlacePopupOpen ||
    isEditProfilePopupOpen ||
    selectedCard;

  React.useEffect(() => {
    anyPopupOpen
      ? document.addEventListener('keydown', handleEscape)
      : document.removeEventListener('keydown', handleEscape);
  });

  function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
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

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              onOutsideClick={handleOutsideClick}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              onOutsideClick={handleOutsideClick}
            />

            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlaceSubmit={handleAddPlaceSubmit}
              onOutsideClick={handleOutsideClick}
            />

            <PopupWithForm
              name="confirm-delete"
              title="Are you sure?"
              onClose={closeAllPopups}
            />

            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
              onOutsideClick={handleOutsideClick}
            />

            <Footer />
          </div>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
