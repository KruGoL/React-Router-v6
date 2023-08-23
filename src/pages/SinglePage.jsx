import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

export const SinglePage = () => {
	console.log(useParams());
	const [post, setPost] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => response.json())
			.then((json) => setPost(json));
	}, [id]);

	return (
		<div>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
			<Link to={`/posts/${id}/edit`}>Edit this post</Link>
		</div>
	);
};
