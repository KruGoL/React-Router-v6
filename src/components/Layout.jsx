import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { CustomLink } from "./CustomLink";
import { useAuth } from "../hook/useAuth";

//const setActive = ({ isActive }) => (isActive ? "active-link" : "");

export const Layout = () => {
	const { signOut, user } = useAuth();
	const navigate = useNavigate();
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
				{user ? (
					<div>
						{user}
						<button
							onClick={() =>
								signOut(() => navigate("/", { replace: true }))
							}
						>
							Log Out
						</button>
					</div>
				) : (
					<Link to={"/login"}>
						<button>Sign In</button>
					</Link>
				)}
			</div>

			<main className="container">
				<Outlet />
			</main>

			<Footer />
		</>
	);
};
