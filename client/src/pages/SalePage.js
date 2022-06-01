import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const SalePage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError  } = useHttp();

  const [form, setForm] = useState({
    articul: '',
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
        await request('/api/sale', 'POST', { ...form }, {
        Authorization: `Bearer ${auth.token}`
      });

      message('Данные сохранены!');
    } catch (e) {}
  }

  return (
    <div>
      <div className="row">
        <div className="container">
          <h3 className="center-align">Продажа</h3>
          <div className="card green darken-1">
            <div className="card-content white-text">
              <div>

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
                className="btn pink darken-1"
                onClick={ checkoutHandler }
                disabled={ loading }
              >
                Совершить
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
