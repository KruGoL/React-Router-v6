import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PostsPage } from './pages/PostsPage';
import { NotFoundPage } from './pages/NotFoundPage';


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
