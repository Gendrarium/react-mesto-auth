import React from 'react';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import * as auth from '../utils/auth.js';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardFullPopupOpen, setIsCardFullPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSucces, setIsSucces] = React.useState(false);
  const [location, setLocation] = React.useState();
  const [email, setEmail] = React.useState('');
  const history = useHistory()

  function handleInfoTooltip(isOkey) {
    isOkey ? setIsSucces(true) : setIsSucces(false);
    setIsInfoTooltipPopupOpen(true);
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push("/sign-in")
  }

  function handleLogin() {
    setLoggedIn(true);
  }
  function handleTokenCheck(){
    if (localStorage.getItem('jwt')){
    const jwt = localStorage.getItem('jwt');
    auth.checkToken(jwt).then((res) => {
      if (res){
        setEmail(res.data.email);
          setLoggedIn(true)
          history.push("/");
      }
    });
  }
  }
  React.useEffect(()=> {
    handleTokenCheck();
  }, [])
  function handleCardLike(card, isLiked) {
    const likeOrDis = !isLiked ? api.likeCard(card._id) : api.dislikeCard(card._id);
    likeOrDis
    .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => !(c._id === card._id));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data)
    .then((userData) =>{
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data)
    .then((userData) =>{
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardFullPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsCardFullPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    }

  React.useEffect(() =>{
    Promise.all([
      api.getUserData(),
      api.getInitialCards()
    ])
      .then(([userData, gridCards]) => {
        setCurrentUser(userData);
        setCards(gridCards);
      })
      .catch((err) => {
        console.log(err);
      })}, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <Header
      email={email}
      loggedIn={loggedIn}
      location={location}
      handleLogout={handleLogout}
      />
    <main className="main">
    <Switch>
      <Route path="/sign-up">
        <Register
          openNotice={handleInfoTooltip}
          setLocation={setLocation}/>
      </Route>
      <Route path="/sign-in">
        <Login
          openNotice={handleInfoTooltip}
          setLocation={setLocation}
          setAppEmail={setEmail}
          handleLogin={handleLogin}/>
      </Route>
      <ProtectedRoute
        component={Main}
        path="/"
        loggedIn={loggedIn}
        cards={cards}
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
        handleEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
    />
    </Switch>
    </main>
      <Footer/>
      {
        loggedIn && <>
      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen}  onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <PopupWithForm name='del' title='Вы уверены?' buttonCaption='Да'/>
      <ImagePopup card={selectedCard} isOpen={isCardFullPopupOpen ? 'edit-form_display-flex' : ''} onClose={closeAllPopups}/>
      </>
      }
      <InfoTooltip isSucces={isSucces} onClose={closeAllPopups} isOpen={isInfoTooltipPopupOpen ? 'edit-form_display-flex' : ''}/>
  </CurrentUserContext.Provider>
  );
}

export default App;
