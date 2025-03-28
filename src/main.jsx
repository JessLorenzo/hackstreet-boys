import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import TriviaQuestion from "./pages/TriviaQuestions/TriviaQuestion.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TriviaQuestion />
	</StrictMode>
);
