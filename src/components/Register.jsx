import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Register({registerUser}) {
  const [formValue, setFormValue] = useState({
      email: '',
      password: ''
    }
  )
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const {email, password} = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      setErrorMessage('Both fields are required');
      return;
    }
    registerUser({email, password});
  }

  return (
    <div className="form-auth">
      <p className="form-auth__title">Регистрация</p>
      <div className="register__error">{errorMessage}</div>
        <form className="form-auth__container" onSubmit={handleSubmit}>
          <input className="form-auth__input" placeholder="Email"
            type="text" value={formValue.email} onChange={handleChange} 
            id="email" name="email" minLength="2" maxLength="40"
          />
          <span className="login__error"></span>
          <input className="form-auth__input" placeholder="Пароль"
            type="password" value={formValue.password} onChange={handleChange}
            id="password" name="password" minLength="2" maxLength="200"
          />
          <span className="login__error"></span>
          <button className="form-auth__button" type="submit">Зарегестрироваться</button>
        </form>
        <div className="form-auth__sing-in">
          <p className="form-auth__subtitle">Уже зарегестрированы? 
            <Link to="/signin" className="form-auth__link" replace> Войти</Link>
          </p>
        </div>
        
      </div>
  )
}
export default Register;