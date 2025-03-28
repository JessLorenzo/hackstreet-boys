import "./TriviaQuestion.scss";
import HackstreetButton from "../../components/HackstreetButton/HackstreetButton.jsx";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import TimerIcon from "../../assets/icons/timer.svg";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

function TriviaQuestion() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const navigate = useNavigate();
  const { page } = useParams();

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
    const getPopularMovies = async () => {
      const page = Math.floor(Math.random() * 251);
      const res = await axiosInstance.get("/movie/top_rated", {
        params: { language: "en-US", page },
      });
      return res.data;
    };

    const getMovieGenres = async () => {
      const res = await axiosInstance.get("/genre/movie/list");
      return res.data.genres;
    };

    const initialSetup = async () => {
      try {
        const res = await getPopularMovies();
        setMovies(res.results);

        const random = Math.floor(Math.random() * 21);
        setSelectedMovie(res.results[random]);

        const results = await getMovieGenres();
        console.log(results);
        const genreValue = results?.filter(
          (item) => item.id === res.results[random].genre_ids[0]
        );
        setGenre(genreValue[0]);
      } catch (err) {
        console.log(err);
      }
    };

    initialSetup();
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
      <h1 className="container__title">ACTION</h1>
      <div className="container__modal">
        <img src={TimerIcon} alt="timer icon" />
        <div className="container__text">
          <h1>
            {genre.name} trivia {page || "1"} of 3
          </h1>

          <div className="container__description">
            <p>Can you guess the movie?</p>
            <p> {selectedMovie.overview}</p>
          </div>
        </div>
        <div className="container__buttons">
          <HackstreetButton
            onClick={(e) => {
              console.log(e.target.innerHTML);
              if (e.target.innerHTML === selectedMovie?.title) {
                alert("Correct!");
              } else {
                alert("Fail!");
              }
            }}
          >
            {randomAnswer() || "Generic Movie"}
          </HackstreetButton>

          <div className="container__buttons">
            <HackstreetButton
              onClick={(e) => {
                console.log(e.target.innerHTML);
                if (e.target.innerHTML === selectedMovie?.title) {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/0`);
                } else {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/1`);
                }
              }}
            >
              {randomAnswer() || "Generic Movie"}
            </HackstreetButton>

            <HackstreetButton
              onClick={(e) => {
                console.log(e.target.innerHTML);
                if (e.target.innerHTML === selectedMovie?.title) {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/0`);
                } else {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/1`);
                }
              }}
            >
              {randomAnswer() || "Generic Movie"}
            </HackstreetButton>

            <HackstreetButton
              onClick={(e) => {
                console.log(e.target.innerHTML);
                if (e.target.innerHTML === selectedMovie?.title) {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/0`);
                } else {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/1`);
                }
              }}
            >
              {selectedMovie && selectedMovie?.title}
            </HackstreetButton>

            <HackstreetButton
              onClick={(e) => {
                console.log(e.target.innerHTML);
                if (e.target.innerHTML === selectedMovie?.title) {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/0`);
                } else {
                  navigate(`/results/${selectedMovie?.id}/${genre.name}/1`);
                }
              }}
            >
              {randomAnswer() || "Generic Movie"}
            </HackstreetButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TriviaQuestion;
