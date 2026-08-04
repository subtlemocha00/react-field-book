import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./SignUpForm";

function renderSignUpForm() {
	return render(
		<MemoryRouter initialEntries={["/signup"]}>
			<Routes>
				<Route path="/signup" element={<SignUpForm />} />
				<Route path="/jobList" element={<div>job list</div>} />
			</Routes>
		</MemoryRouter>
	);
}

describe("SignUpForm", () => {
	it("renders email, password and confirmation fields", () => {
		renderSignUpForm();

		expect(screen.getByLabelText("Email address")).toHaveAttribute(
			"type",
			"email"
		);
		expect(screen.getByLabelText("Password")).toHaveAttribute(
			"type",
			"password"
		);
		expect(screen.getByLabelText("Confirm Password")).toHaveAttribute(
			"type",
			"password"
		);
	});

	it("accepts input in the confirmation field", async () => {
		const user = userEvent.setup();
		renderSignUpForm();

		await user.type(screen.getByLabelText("Confirm Password"), "hunter2");

		expect(screen.getByLabelText("Confirm Password")).toHaveValue("hunter2");
	});

	it("navigates to the job list on submit", async () => {
		const user = userEvent.setup();
		renderSignUpForm();

		await user.click(screen.getByRole("button", { name: "Sign Up" }));

		expect(screen.getByText("job list")).toBeInTheDocument();
	});
});
