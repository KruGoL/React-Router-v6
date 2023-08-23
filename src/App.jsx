import { Layout } from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PostsPage } from "./pages/PostsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SinglePage } from "./pages/SinglePage";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route
						path="about-us"
						element={<Navigate to="/about" replace />}
					/>
					{/*forwarding*/}
					<Route path="posts" element={<PostsPage />} />
					<Route path="posts/:id" element={<SinglePage />} />
					<Route
						path="posts/new"
						element={
							<RequireAuth>
								<CreatePost />
							</RequireAuth>
						}
					/>
					<Route path="posts/:id/edit" element={<EditPost />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
