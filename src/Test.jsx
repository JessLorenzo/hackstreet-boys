import HackstreetButton from "./components/HackstreetButton/HackstreetButton";
import { movieApi } from "./utils/movieApi";
import { useEffect, useState } from "react";

function Test() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const test = async () => {
			try {
				const res = await movieApi.getPopularMovies();
				setMovies(res.results);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		test();
	}, []);

	return (
		<>
			<div>
				<HackstreetButton>Test</HackstreetButton>
				<p>{movies && JSON.stringify(movies)}</p>
			</div>
		</>
	);
}

export default Test;
