import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "bootstrap";

import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);

	return (
		<Jumbotron>
			<h1>Hello, world!</h1>
			<p>
				{
					"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
				}
			</p>
			<p>
				<Button variant="primary">Learn more</Button>
			</p>
		</Jumbotron>
	);
};
