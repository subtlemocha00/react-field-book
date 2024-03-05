import React from "react";
import constructionProjects from "./constructionProjects";

export default function JobList() {
	console.log(constructionProjects);
	return (
		<ul>
			{constructionProjects.map((project) => {
				<li key={project.jobNumber}>{project.projectName}</li>;
			})}
		</ul>
	);
}
