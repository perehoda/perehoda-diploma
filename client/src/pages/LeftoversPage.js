import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const LeftoversPage = () => {
  const [ products, setProducts ] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchData = useCallback(async () => {
    try {
      const fetchedProducts = await request('/api/leftovers', 'GET', null, {
        Authorization: `Bearer ${token}`
      });

      setProducts(fetchedProducts);
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
                  <td>№ п/п</td>
                  <td>Наименование</td>
                  <td>Код</td>
                  <td>Артикул</td>
                  <td>Ед. изм</td>
                  <td>Цена</td>
                  <td>Кол-во</td>
                </tr>

                {
                  products.map((product, index) => {
                    return (
                      <tr key={ product._id }>
                        <td>{ index + 1 }</td>
                        <td>{ product.name }</td>
                        <td>{ product.code }</td>
                        <td>{ product.articul }</td>
                        <td>{ product.measure }</td>
                        <td>{ product.price }</td>
                        <td>{ product.amount }</td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
