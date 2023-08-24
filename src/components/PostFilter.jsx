import { useState } from "react";

export const PostFilter = ({postQuery, latest, setSearchParams}) => {
	const [search, setSearch] = useState(postQuery);
	const [checked, setChecked] = useState(latest);
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;

		const query = form.search.value;
		const isLatests = form.latest.checked;

		const params = {};

		if (query.length) {
			params.post = query;
		}

		if (isLatests) {
			params.latest = true;
		}

		setSearchParams(params);
	};
	return (
		<form autoComplete="off" onSubmit={handleSubmit}>
			<input
				type="search"
				name="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<label>
				<input
					type="checkbox"
					name="latest"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>{" "}
				New only
			</label>
			<button type="submit" style={{ marginLeft: "20px" }}>
				Search
			</button>
		</form>
	);
};
