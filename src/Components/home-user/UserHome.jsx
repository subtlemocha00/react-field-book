import { useState } from "react";
import SearchBar from "./SearchBar";
import JobList from "./JobList";

export default function UserHome() {
	const [isSearched, setIsSearched] = useState(false);
	// start with all results, numerically ordered
	/* eslint-disable-next-line no-unused-vars --
	   Scaffolding for the not-yet-implemented search; see handleSubmit below. */
	const [searchResults, setSearchResults] = useState(null);
	/* eslint-disable-next-line no-unused-vars --
	   Not wired up until search results have somewhere to render. */
	const toggleIsSearched = () => {
		setIsSearched(!isSearched);
	};
	const handleSubmit = (searchInput) => {
		// set up to search the DB of jobs based on 3 headings: name, number, date
		// if name is searched, display alphabetically ordered
		// if number is searched, display numerically ordered
		// if date is searched, display most recent to least
		console.log(searchInput);
	};

	return (
		<section className="container mt-5">
			<div>
				<h1>{isSearched ? "Search Results" : "All Jobs"}</h1>
			</div>
			<SearchBar handleSubmit={handleSubmit} />
			<JobList />
		</section>
	);
}
