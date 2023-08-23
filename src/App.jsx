import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PostsPage } from "./pages/PostsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SinglePage } from "./pages/SinglePage";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="posts" element={<PostsPage />} />
					<Route path="posts/:id" element={<SinglePage />} />
					<Route path="posts/new" element={<CreatePost />} />
					<Route path="posts/:id/edit" element={<EditPost />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
