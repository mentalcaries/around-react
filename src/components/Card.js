function Card(props){
    function handleClick(){
        props.onCardClick(props.card)
    }

    return(
    props.cards.map(card=>(
        <article className="card" key={card._id}>
          <button className="card__delete-button" type="button" aria-label="Delete card"></button>
          <img className="card__image" src={card.link} alt="" onClick={handleClick}/>
          <div className="card__items">
            <h2 className="card__title">{card.name}</h2>
            <div className="card__likes">
              <button className="card__like-button" type="button" aria-label="Like this"></button>
              <p className="card__like-count">{card.likes.length}</p>
            </div>
          </div>
        </article>
    )))
}

export default Card