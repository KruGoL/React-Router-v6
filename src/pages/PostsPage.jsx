import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PostsPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, []);

	return (
		<div>
			<h1>Posts</h1>
			<Link to={`/posts/new`}>Create New</Link>
			{posts.map((post) => (
				<Link key={post.id} to={`/posts/${post.id}`}>
					<li>{post.title}</li>
				</Link>
			))}
		</div>
	);
};
