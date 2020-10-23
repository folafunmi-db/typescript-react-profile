import React, { useEffect, useState } from "react";
import { Movie } from "./Movie/movie.component";
import "./movies.style.css";

// interface Props {
// 	[x: string]: any;
// 	movie: Movie;
// }

// interface Movie {
// 	imdbID: string;
// 	title: string[];
// 	year: number;
// 	image: any;
// }

const series = ["avengers", "fast and furious", "iron man", "harry potter"];

// imdb api free key
const API_KEY = "95b26974";

export const Movies = () => {
	const [movies, setMovies] = useState<any>([]);
	useEffect(() => {
		const promises = series.map(async (series) => {
			const res = await fetch(
				`http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
					series
				)}&page=1`
			);
			return await res.json();
		});

		// After all promises get resolved
		Promise.all(promises).then((movies) => setMovies(movies));
	}, []);

	console.log(movies);

	return (
		<div className="movies">
			{movies
				.map((movie: any) => movie.Search)
				.flat(2)
				.map((movie: any) => {
					return (
						<Movie
							key={movie.imdbID}
							title={movie.Title}
							year={movie.Year}
							image={movie.Poster}
						/>
					);
				})}
		</div>
	);
};
