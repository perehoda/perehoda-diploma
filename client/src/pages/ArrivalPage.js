import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const ArrivalPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError  } = useHttp();

  const [form, setForm] = useState({
    name: '',
    articul: '',
    measure: '',
    price: '',
    amount: '',
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

  const checkoutHandler = async () => {
    try {
        await request('/api/arrival', 'POST', { ...form }, {
        Authorization: `Bearer ${auth.token}`
      });

      message('Данные сохранены!');
    } catch (e) {}
  }

  return (
    <div>
      <div className="row">
        <div className="container">
          <h3 className="center-align">Оформить поступление</h3>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <div>

                <div className="input-field">
                  <input
                    placeholder="Наименование"
                    id="name"
                    type="text"
                    name="name"
                    className="yellow-input"
                    value={ form.name }
                    onChange={ changeHandler }
                  />
                  <label htmlFor="name">Наименование</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Артикул"
                    id="articul"
                    type="text"
                    name="articul"
                    className="yellow-input"
                    value={ form.articul }
                    onChange={ changeHandler }
                  />
                  <label htmlFor="articul">Артикул</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Ед. изм."
                    id="measure"
                    type="text"
                    name="measure"
                    className="yellow-input"
                    value={ form.measure }
                    onChange={ changeHandler }
                  />
                  <label htmlFor="measure">Ед. изм.</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Цена"
                    id="price"
                    type="text"
                    name="price"
                    className="yellow-input"
                    value={ form.price }
                    onChange={ changeHandler }
                  />
                  <label htmlFor="price">Цена</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Кол-во"
                    id="amount"
                    type="text"
                    name="amount"
                    className="yellow-input"
                    value={ form.amount }
                    onChange={ changeHandler }
                  />
                  <label htmlFor="amount">Кол-во</label>
                </div>

              </div>
            </div>

            <div className="card-action">
              <button
                className="btn yellow darken-4"
                onClick={ checkoutHandler }
                disabled={ loading }
              >
                Оформить
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
