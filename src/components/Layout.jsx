import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { CustomLink } from "./CustomLink";

//const setActive = ({ isActive }) => (isActive ? "active-link" : "");

export const Layout = () => {
	return (
		<>
			<div className="navbar">
				{/* <NavLink to="/" className={setActive}>
					Home
				</NavLink>
				<NavLink to="/posts" className={setActive}>
					Posts
				</NavLink>
				<NavLink to="/about" className={setActive}>
					About
				</NavLink> */}
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/posts">Posts</CustomLink>
				<CustomLink to="/about">About</CustomLink>
			</div>

			<main className="container">
				<Outlet />
			</main>

			<Footer/>
		</>
	);
};
