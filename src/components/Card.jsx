import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Card = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const card = props.card;
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like_active'}` 
  ); 

  function handleClick() {
    props.onCardClick(card);
  }
  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDeleteClick() {
    props.onCardDeleteClick(card._id);
  }
  
  return (
    <article className="element">
      <img name="name" onClick={handleClick} className="element__image" src={props.card.link} alt={props.card.name}/>
      {isOwn && <button className="element__delete" onClick={handleDeleteClick}/>}
        <div className="element__wrap">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__wrap-likes">
            <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button"/>
            <span className="element__likes-number">{props.card.likes.length}</span>
          </div>
        </div>
    </article>
  )
}

export default Card;