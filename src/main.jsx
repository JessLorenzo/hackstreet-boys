import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
// import App from "./App.jsx";
import Test from "./Test.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Test />
	</StrictMode>
);
