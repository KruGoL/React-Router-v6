import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";

export const SinglePage = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate(null);

	const goBack = () => navigate(-1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => response.json())
			.then((json) => setPost(json));
	}, [id]);

	return (
		<div>
			<button onClick={goBack}>Go back</button>
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
