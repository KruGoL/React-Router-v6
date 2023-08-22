import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./Homepage";
import { AboutPage } from "./AboutPage";
import { PostsPage } from "./PostsPage";
import { NotFoundPage } from "./NotFoundPage";

export const Navbar = () => {
	return (
		<>
			<header>
				<Link to="/">Home</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
			</header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/Posts" element={<PostsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
		</>
	);
};
