import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${BEARER_TOKEN}`,
	},
});

const TriviaResults = () => {
	const [selectedMovie, setSelectedMovie] = useState();
	const { id, genre_id, resBool } = useParams();
	console.log(id);

	useEffect(() => {
		const test = async () => {
			const results = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}`);
			setSelectedMovie(results.data);
			console.log("???", results.data);
		};

		test();
	}, []);

	return (
		<div>
			<h2>{resBool === 1 ? "Correct!" : "Incorrect!"}</h2>
		</div>
	);
};

export default TriviaResults;
