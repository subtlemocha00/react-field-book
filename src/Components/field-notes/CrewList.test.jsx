import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CrewList from "./CrewList";

// The three crew roles render in a fixed order, each with its own -/+ pair.
const ROLES = ["Foremen", "Labourers", "Operators"];

const increment = (role) =>
	screen.getAllByRole("button", { name: "+" })[ROLES.indexOf(role)];
const decrement = (role) =>
	screen.getAllByRole("button", { name: "-" })[ROLES.indexOf(role)];

describe("CrewList", () => {
	it("starts every role at zero", () => {
		render(<CrewList />);

		ROLES.forEach((role) => {
			expect(screen.getByText(`${role}: 0`)).toBeInTheDocument();
		});
	});

	it("increments a role's count", async () => {
		const user = userEvent.setup();
		render(<CrewList />);

		await user.click(increment("Foremen"));
		await user.click(increment("Foremen"));

		expect(screen.getByText("Foremen: 2")).toBeInTheDocument();
	});

	it("decrements a role's count", async () => {
		const user = userEvent.setup();
		render(<CrewList />);

		await user.click(increment("Labourers"));
		await user.click(increment("Labourers"));
		await user.click(decrement("Labourers"));

		expect(screen.getByText("Labourers: 1")).toBeInTheDocument();
	});

	it("does not let a count go below zero", async () => {
		const user = userEvent.setup();
		render(<CrewList />);

		await user.click(decrement("Operators"));
		await user.click(decrement("Operators"));

		expect(screen.getByText("Operators: 0")).toBeInTheDocument();
	});

	it("tracks each role independently", async () => {
		const user = userEvent.setup();
		render(<CrewList />);

		await user.click(increment("Foremen"));
		await user.click(increment("Operators"));
		await user.click(increment("Operators"));

		expect(screen.getByText("Foremen: 1")).toBeInTheDocument();
		expect(screen.getByText("Labourers: 0")).toBeInTheDocument();
		expect(screen.getByText("Operators: 2")).toBeInTheDocument();
	});
});
