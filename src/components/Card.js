import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext)

  function handleClick() {
    props.onCardClick(props.card)
  }

  const isOwn = props.card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button'}`
  );

  return (
    <article className="card">
      <button className={cardDeleteButtonClassName} type="button" aria-label="Delete card"></button>
      <img className="card__image" src={props.card.link} alt="" onClick={handleClick} />
      <div className="card__items">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button className="card__like-button" type="button" aria-label="Like this"></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card