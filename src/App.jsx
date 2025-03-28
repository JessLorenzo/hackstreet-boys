import "./App.scss";
import TriviaPage from "./pages/TriviaPage/TriviaPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import TriviaQuestion from "./pages/TriviaQuestions/TriviaQuestion.jsx";
import TriviaResults from "./pages/TriviaResults/TriviaResults.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TriviaPage />} />
        <Route path="/question" element={<TriviaQuestion />} />
        <Route path="/results" element={<TriviaResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
