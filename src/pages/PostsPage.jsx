import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { PostFilter } from "../components/PostFilter";

export const PostsPage = () => {
	const [posts, setPosts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const postQuery = searchParams.get("post") || "";
	const latest = searchParams.has("latest");

	const startsFrom = latest ? 80 : 1;

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, []);

	return (
		<div>
			<h1>Posts</h1>
			<PostFilter
				postQuery={postQuery}
				latest={latest}
				setSearchParams={setSearchParams}
			/>
			<Link to={`/posts/new`}>
				<button style={{ backgroundColor: "green", margin: "20px" }}>
					Create New
				</button>
			</Link>
			{posts
				.filter(
					(post) =>
						post.title.includes(postQuery) && post.id >= startsFrom
				)
				.map((post) => (
					<Link key={post.id} to={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))}
		</div>
	);
};
