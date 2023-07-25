import React from "react";
import Card from './Card.jsx'
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main (props) {
  const cards = props.cards;
  const currentUser = React.useContext(CurrentUserContext);
  
 return(
    <main className="content">
      <section className="profile">
        <div className="profile__wrap">
          <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name}/>
          <button onClick={props.onEditAvatar} className="profile__avatar-button"></button>
          <div className="profile__info">
            <div className="profile__inner">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">
        {cards.map(item =>(
          <Card
            onCardClick={props.onCardClick}
            onCardLike={props.handleCardLike}
            onCardDeleteClick={props.handleCardDeleteClick}
            key={item._id}
            card={item}
            />
          )
        )}
      </section>
    </main>
  );
}

export default Main;