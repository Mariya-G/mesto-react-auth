import React from "react";
import {useLocation, Link} from "react-router-dom";
import NavBar from "./NavBar";
import headerLogo from '../images/logo.png';

function Header ({loggedIn, handleSignOut, userEmail})  {
  const location = useLocation();
  return(
    <header className="header">
      <img className="header__logo" alt="Логотип" src={headerLogo} />
      {location.pathname === "/signin" &&
        <Link className="header__sign-in" to="/signup">Регистрация</Link>}
        {location.pathname === "/signup" &&
          <Link className="header__sign-in" to="/signin">Войти</Link>}
        {loggedIn && <NavBar handleSignOut={handleSignOut} userEmail={userEmail}/> }
    </header>
  );
}

export default Header;