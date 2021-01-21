import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);

	return <h1>SINGLE CHARACTER PAGE</h1>;
};
