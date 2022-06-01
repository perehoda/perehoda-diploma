import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';

export const PersonalPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const [ user, setUser ] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const logoutHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    auth.logout();
    history.push('/');
  }

  const fetchData = useCallback(async () => {
    try {
      const fetchedUser = await request('/api/personal', 'GET', null, {
        Authorization: `Bearer ${token}`
      });

      setUser(fetchedUser);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loader />

  return (
    <div className="personal-page">
      <h2 className="center-align">Кабинет</h2>

      { !loading }

      <table className="responsive-table">
        <tbody>
          <tr>
            <td>Фамилия</td>
            <td>{ user.secondName }</td>
          </tr>
          <tr>
            <td>Имя</td>
            <td>{ user.firstName }</td>
          </tr>
          <tr>
            <td>Отчество</td>
            <td>{ user.patronymic || 'отсутствует' }</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{ user.email }</td>
          </tr>
        </tbody>
      </table>

      <div className="card-action">
        <button className="btn pink darken-1"><a href="/" onClick={ logoutHandler } style={{ color: "white" }}>Выйти</a></button>
      </div>

    </div>
  );
}
