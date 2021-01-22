import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Carousel, Card, Button } from "bootstrap";

export const Battleships = () => {
	const [battleships, setBattleships] = useState("");

	useEffect(function() {
		fetch("https://www.swapi.tech/api/starships")
			.then(response => response.json())
			.then(data => {
				setArrayTasks(data);
			})
			.catch(err => console.log("Request Failed", err));
	}, []);

	return (
		<Carousel>
			<Carousel.Item>
				<Card>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							{
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Carousel.Item>

			<Carousel.Item>
				<Card>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							{
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Carousel.Item>

			<Carousel.Item>
				<Card>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							{
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Carousel.Item>
		</Carousel>
	);
};
