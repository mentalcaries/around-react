import React from "react";
import { api } from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);


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
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src={currentUser?.avatar} alt="User profile pic" className="profile__image" />
          <button className="profile__edit-image" type="button" aria-label="Edit User Photo"
            onClick={onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <button className="profile__edit-btn hover-animate" type="button" aria-label="Edit profile" onClick={onEditProfileClick}></button>
          </div>
          <p className="profile__subtitle">{currentUser?.about}</p>
        </div>
        <button className="profile__add-button hover-animate" aria-label="Add" type="button"
          onClick={onAddPlaceClick}></button>
      </section>


      <section className="elements">

        {cards.map((card) => <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleDeleteCard} />)}

      </section>

    </main>

  )
}

export default Main

