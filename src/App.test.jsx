import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
	beforeEach(() => {
		window.history.pushState({}, "", "/");
	});

	it("renders the sign in page at the root route", () => {
		render(<App />);

		expect(screen.getByRole("heading", { name: "Sign In" })).toBeInTheDocument();
		expect(screen.getByLabelText("Email address")).toBeInTheDocument();
	});

	it("renders the sign in page at /signin", () => {
		window.history.pushState({}, "", "/signin");
		render(<App />);

		expect(screen.getByRole("heading", { name: "Sign In" })).toBeInTheDocument();
	});

	it("renders the job list at /jobList", () => {
		window.history.pushState({}, "", "/jobList");
		render(<App />);

		expect(screen.getByText("Job Name")).toBeInTheDocument();
		expect(screen.getByText("Garden Street Reconstruction")).toBeInTheDocument();
	});

	it("renders the field book for a job number route param", () => {
		window.history.pushState({}, "", "/fieldBook/224001");
		render(<App />);

		expect(screen.getByText("Garden Street Reconstruction")).toBeInTheDocument();
		expect(screen.getByText("Job Number: 224001")).toBeInTheDocument();
	});

	it("toggles to the sign up form from the sign in page", async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.click(
			screen.getByRole("button", { name: "Don't have an account? Sign Up" })
		);

		expect(screen.getByRole("heading", { name: "Sign Up" })).toBeInTheDocument();
		expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
	});
});
