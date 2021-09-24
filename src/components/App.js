import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  function handleEditAvatarClick() {
    
    const avatarPopup = document.querySelector(".popup_type_edit-image");
    avatarPopup.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    const profilePopup = document.querySelector(".popup_type_edit-profile");
    profilePopup.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    const addPlacePopup = document.querySelector(".popup_type_new-item");
    addPlacePopup.classList.add("popup_opened");
  }

  function handleCardClick(){
    const cardPopup = document.querySelector(".popup_type_picture")
    cardPopup.classList.add("popup_opened")
  }

  
  return (
    <div className="App">
      <div className="root">
        <div className="page-content">
          <Header />
          <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick}/>
          <Footer />

        </div>
      </div>


    </div>
  );
}

export default App;
