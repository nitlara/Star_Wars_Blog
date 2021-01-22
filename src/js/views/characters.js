import React from "react";
//import { Link } from "react-router-dom";

//import { Context } from "../store/appContext";
import { Carousel, Card, Button } from "bootstrap";

export const Characters = () => {
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
