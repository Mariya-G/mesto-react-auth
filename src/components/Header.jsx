import React from "react";

import headerLogo from '../images/logo.png';
function Header () {
  return(
    <header className="header">
      <img className="header__logo" alt="Логотип" src={headerLogo} />
    </header>
  );
}
export default Header;