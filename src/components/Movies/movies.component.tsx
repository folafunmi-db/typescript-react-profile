import React, { useEffect } from "react";

interface Props {}

const series = ["avengers", "fast and furious", "iron man", "harry potter"];

// imdb api free key
const API_KEY = "95b26974";

export const Movies = (props: Props) => {
	useEffect(() => {
		series.forEach((series) => {
			fetch(
				`http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(series)}&page=1`
			)
				.then((res) => res.json())
				.then((res) => console.log(res));
		});
	}, []);

	return <div>a</div>;
};
