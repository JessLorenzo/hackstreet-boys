import "./TriviaPage.scss";
import HackstreetButton from "../../components/HackstreetButton/HackstreetButton.jsx";

function TriviaPage() {
  return (
    <div className="main">
      <div className="main_nav">
        <h1>Trivia Challenge</h1>
        <div className="main_text">
          <p>
            Answer correctly to start your win streak. Didn't make it to the
            next round? No problem! You can upgrade to Premium to continue
            playing or return in 24 hours to try again.
          </p>
        </div>
        <div className="main_buttons">
          <HackstreetButton>Start Game</HackstreetButton>
          <HackstreetButton>Return Home</HackstreetButton>
        </div>
      </div>
    </div>
  );
}

export default TriviaPage;
