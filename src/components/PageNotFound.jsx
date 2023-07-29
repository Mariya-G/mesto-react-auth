import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound() {

  return(
    <div className="page-not-found">
      <p className="page-not-found__title_xl">404</p>
      <p className="page-not-found__title">Страница не найдена</p>
      
      <Link className="page-not-found__back" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;