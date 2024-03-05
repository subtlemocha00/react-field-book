import React, { useState } from "react";

export default function SearchBar({ handleSubmit }) {
	const [searchInput, setSearchInput] = useState("");
	const handleChange = ({ target }) => {
		setSearchInput(target.value);
		// handleSubmit(target.value);
	};
	return (
		<form className="m-4">
			<label className="form-label visually-hidden" htmlFor="searchInput">
				Search
			</label>
			<button
				className="btn btn-primary"
				type="button"
				onClick={() => handleSubmit(searchInput)}
			>
				Search Jobs
			</button>
			<input
				className="form-control"
				type="text"
				placeholder="Job Name/Job Number/Date"
				value={searchInput}
				onChange={handleChange}
			/>
		</form>
	);
}
