import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
//import * as auth from "../utils/Auth";

function Login({onLogin}) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  }
)
const [errorMessage, setErrorMessage] = useState()
const navigate = useNavigate();
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormValue({
    ...formValue,
    [name]: value
  });
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formValue.email || !formValue.password) {
    setErrorMessage('Both fields are required');
    return;
  }
  onLogin({
    email: formValue.email,
    password: formValue.password
  });
}
  return (
    <div className="form-auth">
      <p className="form-auth__title">Вход</p>
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
        <button className="form-auth__button" type="submit">Войти</button>
      </form>
    </div>
  )
}
export default Login;