import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Character } from "../component/character";
import { Context } from "../store/appContext";
import { Carousel, Card, Button, ScrollSpy } from "bootstrap";

export const Characters = props => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then(resp => resp.json())
			.then(data => {
				debugger;

				setCharacters(data.results);
			});
	}, []);

	return (
		<Carousel>
			<ScrollSpy>
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
			</ScrollSpy>
		</Carousel>
	);
};
