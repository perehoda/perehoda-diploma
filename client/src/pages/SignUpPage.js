import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const SignUpPage = () => {
  const message = useMessage();

  const { loading, request, error, clearError } = useHttp();

  const [form, setForm] = useState({
    secondName: '',
    firstName: '',
    patronymic: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const signUpHandler = async () => {
    try {
      const data = await request('/api/auth/signup', 'POST', { ...form });

      message(data.message);
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="container">
        <h2 className="center-align">Регистрация</h2>
        <div className="card green darken-1">
          <div className="card-content white-text">
            <div>

              <div className="input-field">
                <input
                  placeholder="Введите Фамилию"
                  id="secondName"
                  type="text"
                  name="secondName"
                  className="yellow-input"
                  value={ form.secondName }
                  onChange={ changeHandler }
                />
                <label htmlFor="secondName">Фамилия</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите Имя"
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="yellow-input"
                  value={ form.firstName }
                  onChange={ changeHandler }
                />
                <label htmlFor="firstName">Имя</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите Отчество"
                  id="patronymic"
                  type="text"
                  name="patronymic"
                  className="yellow-input"
                  value={ form.patronymic }
                  onChange={ changeHandler }
                />
                <label htmlFor="patronymic">Отчество</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите Email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  value={ form.email }
                  onChange={ changeHandler }
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={ form.password }
                  onChange={ changeHandler }
                />
                <label htmlFor="password">Пароль</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <NavLink to="/auth">
              <button
                className="btn pink darken-1"
                onClick={ signUpHandler }
                disabled={ loading }
              >
                Регистрация
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
