import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
	return (
		<>
			<header>
				<Link to="/">Home</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
			</header>

			<main className="container">
				<Outlet />
			</main>

			<Footer></Footer>
		</>
	);
};
