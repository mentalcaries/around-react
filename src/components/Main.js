import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {

const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([])

React.useEffect(()=>{
  api.getProfileInfo()
  .then((res)=>{
    setUserName(res.name);
    setUserDescription(res.about);
  })
  },[userName])

  React.useEffect(()=>{
    api.getProfileInfo()
    .then((res)=>{
      setUserAvatar(res.avatar);
    })
  }, [userAvatar])

  React.useEffect(()=>{
    api.getCards()
    .then((res)=>{
      setCards(res);
    })
  }, [userAvatar])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src={userAvatar} alt="User profile pic" className="profile__image" />
          <button className="profile__edit-image" type="button" aria-label="Edit User Photo"
            onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-btn hover-animate" type="button" aria-label="Edit profile" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button hover-animate" aria-label="Add" type="button"
          onClick={props.onAddPlaceClick}></button>
      </section>


      <section className="elements">
      <Card cards={cards} />
      </section>

    </main>

  )
}

export default Main

