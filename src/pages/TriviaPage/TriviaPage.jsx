import "./TriviaPage.scss";
import HackstreetButton from "../../components/HackstreetButton/HackstreetButton.jsx";
import { Link } from "react-router-dom";

function TriviaPage() {
  return (
    <>
      <div className="main">
        <h1 className="main__title">ACTION</h1>
        <h2 className="main__subtitle">Trivia Challenge</h2>
        <span>
          <p className="main__text">
            Answer 3 questions correctly to start you win streak. Didn’t make it
            to the next round? No problem! You can upgrade to Premium to
            continue or return in 24 hours to try again.
          </p>
        </span>
        <div className="main__buttons">
          <Link to="/question/1">
            <HackstreetButton>Start Game</HackstreetButton>
          </Link>
          <HackstreetButton>Return Home</HackstreetButton>
        </div>
      </div>
    </>
  );
}

export default TriviaPage;
