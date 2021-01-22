import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary mx-5">
						Favourites <span className="badge badge-info badge-pill">5</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
