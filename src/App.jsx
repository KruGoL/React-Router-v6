import "./App.css";
import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PostsPage } from "./components/PostsPage";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="Posts" element={<PostsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
