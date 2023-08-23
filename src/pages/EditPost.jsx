import { useParams } from "react-router-dom";

export const EditPost = () => {
	const { id } = useParams();
	return <div>Edit Post {id}</div>;
};
