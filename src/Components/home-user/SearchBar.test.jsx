import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
	it("renders an accessible search field", () => {
		render(<SearchBar handleSubmit={vi.fn()} />);

		expect(screen.getByLabelText("Search")).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText("Job Name/Job Number/Date")
		).toBeInTheDocument();
	});

	it("updates the input as the user types", async () => {
		const user = userEvent.setup();
		render(<SearchBar handleSubmit={vi.fn()} />);

		await user.type(screen.getByLabelText("Search"), "Garden");

		expect(screen.getByLabelText("Search")).toHaveValue("Garden");
	});

	it("passes the current input to handleSubmit when searching", async () => {
		const user = userEvent.setup();
		const handleSubmit = vi.fn();
		render(<SearchBar handleSubmit={handleSubmit} />);

		await user.type(screen.getByLabelText("Search"), "224001");
		await user.click(screen.getByRole("button", { name: "Search Jobs" }));

		expect(handleSubmit).toHaveBeenCalledWith("224001");
	});

	it("does not submit while the user is only typing", async () => {
		const user = userEvent.setup();
		const handleSubmit = vi.fn();
		render(<SearchBar handleSubmit={handleSubmit} />);

		await user.type(screen.getByLabelText("Search"), "Elm");

		expect(handleSubmit).not.toHaveBeenCalled();
	});

	it("submits an empty string when nothing was typed", async () => {
		const user = userEvent.setup();
		const handleSubmit = vi.fn();
		render(<SearchBar handleSubmit={handleSubmit} />);

		await user.click(screen.getByRole("button", { name: "Search Jobs" }));

		expect(handleSubmit).toHaveBeenCalledWith("");
	});
});
