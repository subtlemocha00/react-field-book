import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TitleBlock from "./TitleBlock";

describe("Title Block", () => {
	it("Renders the title block with job name, number and date", () => {
		render(<TitleBlock />);

		expect(screen.getByText("Job: Mornington")).toBeInTheDocument();
		expect(screen.getByText("Job #: 224000")).toBeInTheDocument();
		expect(screen.getByText("Date: 04/15/2024")).toBeInTheDocument();
	});

	it("Renders the current weather alongside the job info", () => {
		render(<TitleBlock />);

		expect(screen.getByText("Weather: Sunny")).toBeInTheDocument();
		expect(screen.getByText("Low: 15 C")).toBeInTheDocument();
		expect(screen.getByText("High: 32 C")).toBeInTheDocument();
	});
});
