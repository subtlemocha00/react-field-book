import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useParams } from "react-router";
import JobList from "./JobList";
import jobInfo from "./jobInfo";

function FieldBookStub() {
	const { jobNumber } = useParams();
	return <div>field book for {jobNumber}</div>;
}

function renderJobList() {
	return render(
		<MemoryRouter initialEntries={["/jobList"]}>
			<Routes>
				<Route path="/jobList" element={<JobList />} />
				<Route path="/fieldBook/:jobNumber" element={<FieldBookStub />} />
			</Routes>
		</MemoryRouter>
	);
}

describe("JobList", () => {
	it("renders the column headings", () => {
		renderJobList();

		expect(screen.getByText("Job Name")).toBeInTheDocument();
		expect(screen.getByText("Job Number")).toBeInTheDocument();
		expect(screen.getByText("Days Left")).toBeInTheDocument();
	});

	it("renders a row for every job", () => {
		renderJobList();

		jobInfo.forEach((job) => {
			expect(screen.getByText(job.name)).toBeInTheDocument();
			expect(screen.getByText(job.number)).toBeInTheDocument();
		});
	});

	it("shows the working days remaining for a job", () => {
		renderJobList();

		const [firstJob] = jobInfo;
		const row = screen.getByText(firstJob.name).closest("button");

		expect(row).toHaveTextContent(String(firstJob.workingDaysRemaining));
	});

	it("navigates to the field book for the clicked job", async () => {
		const user = userEvent.setup();
		renderJobList();

		await user.click(screen.getByText("Elm Street Sewer Expansion"));

		expect(screen.getByText(/field book for 224003/)).toBeInTheDocument();
	});
});
