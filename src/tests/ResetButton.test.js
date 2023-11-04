import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ResetButton from "../components/ResetButton";

test("renders a reset button with text", () => {
  const renderResult = render(<ResetButton text="Reset" />);
  const buttonElement = renderResult.getByText("Reset");
  expect(buttonElement).toBeInTheDocument();
});

test("calls the provided function when the reset button is clicked", () => {
  const mockOnClick = jest.fn();
  const renderResult = render(<ResetButton text="Reset" onClick={mockOnClick} />);
  const buttonElement = renderResult.getByText("Reset");
  fireEvent.click(buttonElement);
  expect(mockOnClick).toHaveBeenCalled();
});
