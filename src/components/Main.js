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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src={currentUser.avatar} alt="User profile pic" className="profile__image" />
          <button className="profile__edit-image" type="button" aria-label="Edit User Photo"
            onClick={onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-btn hover-animate" type="button" aria-label="Edit profile" onClick={onEditProfileClick}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button hover-animate" aria-label="Add" type="button"
          onClick={onAddPlaceClick}></button>
      </section>


      <section className="elements">

        {cards.map((card) => <Card card={card} key={card._id} onCardClick={onCardClick} />)}

      </section>

    </main>

  )
}

export default Main

