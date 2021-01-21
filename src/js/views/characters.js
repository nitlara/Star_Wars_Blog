import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
	return (
		<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
			{/* <!--Controls--> */}
			<div className="controls-top">
				<a className="btn-floating" href="#multi-item-example" data-slide="prev">
					<i className="fas fa-chevron-left" />
				</a>
				<a className="btn-floating" href="#multi-item-example" data-slide="next">
					<i className="fas fa-chevron-right" />
				</a>
			</div>
			{/* SUSTITUIR CONTROLES POR BARRA HORIZONTAL */}

			{/* CARDS SLIDES */}
			<div className="carousel-inner" role="listbox">
				<div className="carousel-item active">
					<div className="col-md-3" style="float:left">
						<div className="card mb-2">
							<img
								className="card-img-top"
								src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a className="btn btn-primary">Button</a>
							</div>
						</div>
					</div>

					<div className="col-md-3" style="float:left">
						<div className="card mb-2">
							<img
								className="card-img-top"
								src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a className="btn btn-primary">Button</a>
							</div>
						</div>
					</div>

					<div className="col-md-3" style="float:left">
						<div className="card mb-2">
							<img
								className="card-img-top"
								src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a className="btn btn-primary">Button</a>
							</div>
						</div>
					</div>

					<div className="col-md-3" style="float:left">
						<div className="card mb-2">
							<img
								className="card-img-top"
								src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a className="btn btn-primary">Button</a>
							</div>
						</div>
					</div>

					<div className="col-md-3" style="float:left">
						<div className="card mb-2">
							<img
								className="card-img-top"
								src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a className="btn btn-primary">Button</a>
							</div>
						</div>
					</div>

					<div className="col-md-3" style="float:left">
						<div className="card mb-2">
							<img
								className="card-img-top"
								src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<a className="btn btn-primary">Button</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
