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

export const movieApi = {
	getPopularMovies: async () => {
		const page = Math.floor(Math.random() * 500) + 1;
		const res = await axiosInstance.get("/movie/top_rated", {
			params: { language: "en-US", page },
		});
		return res.data;
	},

	findMovieByName: async (name, page = 1) => {
		const res = await axiosInstance.get("/search/movie", {
			params: {
				query: name,
				include_adult: "false",
				language: "en-US",
				page,
				sort_by: "popularity.desc",
			},
		});
		return res.data;
	},

	getMovieGenres: async () => {
		const res = await axiosInstance.get("/genre/movie/list");
		return res.data.genres;
	},

	getMoviePoster: (imgUrl) => {
		return `https://image.tmdb.org/t/p/original${imgUrl}`;
	},
};
