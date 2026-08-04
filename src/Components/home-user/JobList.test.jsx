import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import JobList from "./JobList";
import constructionProjects from "./constructionProjects";

describe("home-user JobList", () => {
	it("renders a list item for every construction project", () => {
		render(<JobList />);

		expect(screen.getAllByRole("listitem")).toHaveLength(
			constructionProjects.length
		);
	});

	it("renders the name of each project", () => {
		render(<JobList />);

		constructionProjects.forEach((project) => {
			expect(screen.getByText(project.projectName)).toBeInTheDocument();
		});
	});

	it("renders the projects inside a single list", () => {
		render(<JobList />);

		expect(screen.getAllByRole("list")).toHaveLength(1);
	});
});
