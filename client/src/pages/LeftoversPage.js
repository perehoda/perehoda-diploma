import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const LeftoversPage = () => {
  const [ product, setProduct ] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchData = useCallback(async () => {
    try {
      const fetchedProducts = await request('/api/products', 'GET', null, {
        Authorization: `Bearer ${token}`
      });

      setProduct(fetchedProducts);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="row">
        <div className="container">
          <h3 className="center-align">Остатки</h3>
          <div className="card blue darken-1">
            <table className="responsive-table">
              <tbody>
                <tr>
                  <td>Наименование</td>
                  <td>{ product.name }</td>
                </tr>
                <tr>
                  <td>Код</td>
                  <td>{ product.code }</td>
                </tr>
                <tr>
                  <td>Артикул</td>
                  <td>{ product.articul }</td>
                </tr>
                <tr>
                  <td>Ед. изм</td>
                  <td>{ product.measure }</td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td>{ product.price }</td>
                </tr>
                <tr>
                  <td>Кол-во</td>
                  <td>{ product.amount }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
