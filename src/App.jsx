import "./App.scss";
import HackstreetButton from "./components/HackstreetButton/HackstreetButton.jsx";

function App() {
  return (
    <div className="container">
      <div className="container__modal">
        <h1>What is your favorite movie</h1>
        <div className="container__buttons">
          <HackstreetButton>choice 1</HackstreetButton>
          <HackstreetButton>choice 2</HackstreetButton>
          <HackstreetButton>choice 3</HackstreetButton>
          <HackstreetButton>choice 4</HackstreetButton>
        </div>
      </div>
    </div>
  );
}

export default App;
