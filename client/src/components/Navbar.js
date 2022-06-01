import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper green darken-3" style={{ padding: '0 2rem' }}>
          <span className="brand-logo"><NavLink to="/">Perehoda</NavLink></span>
          <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/leftovers">Остатки</NavLink></li>
            <li><NavLink to="/sale" >Продажа</NavLink></li>
            <li><NavLink to="/arrival">Поступление</NavLink></li>
            <li><NavLink to="/personal">Кабинет</NavLink></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/leftovers">Остатки</NavLink></li>
            <li><NavLink to="/sale" >Продажа</NavLink></li>
            <li><NavLink to="/arrival">Поступление</NavLink></li>
            <li><NavLink to="/personal">Кабинет</NavLink></li>
      </ul>
    </header>
  );
}
