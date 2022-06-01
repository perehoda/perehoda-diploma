import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="page-footer green darken-3">
      <div className="container">
        <div className="row">
          <div>
            <ul>
              <li><NavLink className="grey-text text-lighten-3" to="/">Главная</NavLink></li>
              <li><NavLink className="grey-text text-lighten-3" to="/leftovers">Остатки</NavLink></li>
              <li><NavLink className="grey-text text-lighten-3" to="/sale" >Продажа</NavLink></li>
              <li><NavLink className="grey-text text-lighten-3" to="/arrival">Поступление</NavLink></li>
              <li><NavLink className="grey-text text-lighten-3" to="/personal">Кабинет</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© «Perehoda».</div>
      </div>
    </footer>
  );
}
