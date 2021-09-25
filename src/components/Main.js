function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src=" " alt="User profile pic" className="profile__image" />
          <button className="profile__edit-image" type="button" aria-label="Edit User Photo"
            onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-btn hover-animate" type="button" aria-label="Edit profile" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button hover-animate" aria-label="Add" type="button"
          onClick={props.onAddPlaceClick}></button>
      </section>


      <section className="elements">
      </section>

    </main>

  )
}

export default Main

