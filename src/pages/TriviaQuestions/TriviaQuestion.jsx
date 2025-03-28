import "./TriviaQuestion.scss";
import HackstreetButton from "../../components/HackstreetButton/HackstreetButton.jsx";
import { useEffect, useState } from "react";
import { movieApi } from "../../utils/movieApi";

function TriviaQuestion() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState();
	const [answers, setAnswers] = useState();

	const randomAnswer = () => {
		if (!movies.length) {
			return;
		} else {
			let random = Math.floor(Math.random() * 21);
			let answer = movies[random];
			if (answer === selectedMovie) {
				random = Math.floor(Math.random() * 21);
				answer = movies[random];
			} else {
				return answer["title"];
			}
		}
	};

	useEffect(() => {
		const test = async () => {
			try {
				const res = await movieApi.getPopularMovies();
				setMovies(res.results);
				const random = Math.floor(Math.random() * 21);
				setSelectedMovie(res.results[random]);
			} catch (err) {
				console.log(err);
			}
		};

		test();
	}, []);

	if (!movies.length || !selectedMovie) {
		return (
			<section>
				<h1>Loading...</h1>
			</section>
		);
	}

	return (
		<div className="container">
			<div className="container__modal">
				<h1>Guess this movie:</h1>

				<div>
					<p>{selectedMovie.overview}</p>
				</div>

				<div className="container__buttons">
					<HackstreetButton
						onClick={(e) => {
							console.log(e.target.innerHTML);
							if (e.target.innerHTML === selectedMovie.title) {
								alert("Correct!");
							} else {
								alert("Fail!");
							}
						}}
					>
						{randomAnswer() || "Generic Movie"}
					</HackstreetButton>

					<HackstreetButton
						onClick={(e) => {
							console.log(e.target.innerHTML);
							if (e.target.innerHTML === selectedMovie.title) {
								alert("Correct!");
							} else {
								alert("Fail!");
							}
						}}
					>
						{randomAnswer() || "Generic Movie"}
					</HackstreetButton>

					<HackstreetButton
						onClick={(e) => {
							console.log(e.target.innerHTML);
							if (e.target.innerHTML === selectedMovie.title) {
								alert("Correct!");
							} else {
								alert("Fail!");
							}
						}}
					>
						{randomAnswer() || "Generic Movie"}
					</HackstreetButton>

					<HackstreetButton
						onClick={(e) => {
							console.log(e.target.innerHTML);
							if (e.target.innerHTML === selectedMovie.title) {
								alert("Correct!");
							} else {
								alert("Fail!");
							}
						}}
					>
						{randomAnswer() || "Generic Movie"}
					</HackstreetButton>
				</div>
			</div>
		</div>
	);
}

export default TriviaQuestion;
