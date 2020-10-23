import React from "react";
import "./movie.style.css";
interface Props {
	title: string;
	year: string;
	image: string;
}

export const Movie = (props: Props) => {
	console.log(props);
	return (
		<div className="movie">
			<h2>{props.title}</h2>
			<img src={props.image} alt={`${props.title} movie`} />
			<h3>{props.year}</h3>
		</div>
	);
};
