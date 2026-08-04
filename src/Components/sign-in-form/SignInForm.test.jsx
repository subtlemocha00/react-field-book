import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import SignInForm from "./SignInForm";

function renderSignInForm() {
	return render(
		<MemoryRouter initialEntries={["/signin"]}>
			<Routes>
				<Route path="/signin" element={<SignInForm />} />
				<Route path="/jobList" element={<div>job list</div>} />
			</Routes>
		</MemoryRouter>
	);
}

describe("SignInForm", () => {
	it("renders email and password fields", () => {
		renderSignInForm();

		expect(screen.getByLabelText("Email address")).toHaveAttribute(
			"type",
			"email"
		);
		expect(screen.getByLabelText("Password")).toHaveAttribute(
			"type",
			"password"
		);
	});

	it("keeps the email and password inputs controlled", async () => {
		const user = userEvent.setup();
		renderSignInForm();

		await user.type(screen.getByLabelText("Email address"), "crew@example.com");
		await user.type(screen.getByLabelText("Password"), "hunter2");

		expect(screen.getByLabelText("Email address")).toHaveValue(
			"crew@example.com"
		);
		expect(screen.getByLabelText("Password")).toHaveValue("hunter2");
	});

	it("navigates to the job list on submit", async () => {
		const user = userEvent.setup();
		renderSignInForm();

		await user.type(screen.getByLabelText("Email address"), "crew@example.com");
		await user.type(screen.getByLabelText("Password"), "hunter2");
		await user.click(screen.getByRole("button", { name: "Sign In" }));

		expect(screen.getByText("job list")).toBeInTheDocument();
	});
});
