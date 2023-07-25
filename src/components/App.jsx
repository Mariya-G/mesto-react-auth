import React from "react";
import Header from './Header.jsx';
import {api} from '../utils/api.js'
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import DeletePopup from './DeletePopup';
import EditProfilePopup from './EditProfilePopup.jsx';
import ImagePopup from './ImagePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cardId, setCardId] = React.useState('');
  const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    avatar: '../images/avatar.jpg',
    name: 'Загрузка',
    about: 'Загрузка',
    _id: ''
  });

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch
      ((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(selectedCard){
    setSelectedCard(selectedCard);
  }

  function handleDeleteCardPlaceClick(card) {
    setCardId(card);
    setDeletePopupOpen(true);
  }

  function handleUpdateAvatar(userData) {
    api.editAvatar(userData)
      .then((avatarData) => {
        setCurrentUser(avatarData);
        closeAllPopups()
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  function handleUpdateUser(newUserData) {
    api.editUserInfo(newUserData)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups()
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    });
  }

  function handleCardDelete() {
    api.deleteCard(cardId)
      .then((res) => {
        const newCard = cards.filter((item) => item._id !== cardId);
        setCards(newCard);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="pages">
        <div className="page">
        <Header />
        <Main 
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          handleCardLike={handleCardLike}
          handleCardDeleteClick={handleDeleteCardPlaceClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} onDeletePopup={handleCardDelete}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}
        />
      </div>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
