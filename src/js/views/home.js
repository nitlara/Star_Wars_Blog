import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Vader!</h1>
		<p>
			<img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/b6d0cc66-d8b7-42c0-985d-48c32d3d8de6" />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
