import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import FieldBook from "./FieldBook";

function renderFieldBook(jobNumber) {
	return render(
		<MemoryRouter initialEntries={[`/fieldBook/${jobNumber}`]}>
			<Routes>
				<Route path="/fieldBook/:jobNumber" element={<FieldBook />} />
				<Route path="/jobList" element={<div>job list</div>} />
			</Routes>
		</MemoryRouter>
	);
}

describe("FieldBook", () => {
	it("renders the job matching the route parameter", () => {
		renderFieldBook("224002");

		expect(
			screen.getByText("Riverside Drive Watermain Replacement")
		).toBeInTheDocument();
		expect(screen.getByText("Job Number: 224002")).toBeInTheDocument();
	});

	it("renders the weather inputs", () => {
		renderFieldBook("224001");

		expect(screen.getByPlaceholderText("Sunny")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("-3 C")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("33 C")).toBeInTheDocument();
	});

	it("renders the crew list", () => {
		renderFieldBook("224001");

		expect(screen.getByText("Foremen: 0")).toBeInTheDocument();
		expect(screen.getByText("Labourers: 0")).toBeInTheDocument();
		expect(screen.getByText("Operators: 0")).toBeInTheDocument();
	});

	it("records weather entered by the user", async () => {
		const user = userEvent.setup();
		renderFieldBook("224001");

		await user.type(screen.getByPlaceholderText("Sunny"), "Overcast");

		expect(screen.getByPlaceholderText("Sunny")).toHaveValue("Overcast");
	});

	it("navigates back to the job list", async () => {
		const user = userEvent.setup();
		renderFieldBook("224001");

		// The header's back arrow is the first button on the page; the rest
		// belong to the crew list counters.
		await user.click(screen.getAllByRole("button")[0]);

		expect(screen.getByText("job list")).toBeInTheDocument();
	});
});
