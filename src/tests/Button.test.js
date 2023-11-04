import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/ui/Button";

test("renders a button with text", () => {
  const { getByText } = render(<Button text="Increment" />);
  const buttonElement = getByText("Increment");
  expect(buttonElement).toBeInTheDocument();
});

test("calls the provided function when the button is clicked", () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Button text="Increment" onClick={mockOnClick} />);
  const buttonElement = getByText("Increment");
  fireEvent.click(buttonElement);
  expect(mockOnClick).toHaveBeenCalled();
});
