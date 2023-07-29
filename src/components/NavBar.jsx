import React from "react";
import {useNavigate} from "react-router-dom";

function NavBar({handleSignOut, userEmail}) {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem('jwt');
    handleSignOut();
    navigate('/signin');
  }

  return (
    <div className="header__user">
      <p className="header__user-email">{userEmail}</p>
      <a type="submit" onClick={signOut} className="header__link">Выйти</a>
    </div>
  )
}

export default NavBar;