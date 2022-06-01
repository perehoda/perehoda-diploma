import React from 'react';
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return (
		<div>
			<div className="">
				<h4>Учет</h4>
				<div className="">
					<NavLink to="/leftovers" className="black-text text-lighten-3">
						<div>
							<h5>Остатки</h5>
						</div>
					</NavLink>
					<NavLink to="/sale" className="black-text text-lighten-3">
						<div>
							<h5>Продажа</h5>
						</div>
					</NavLink>
					<NavLink to="/arrival" className="black-text text-lighten-3">
						<div>
							<h5>Поступление</h5>
						</div>
					</NavLink>
				</div>
			</div>
		</div>
  );
}
