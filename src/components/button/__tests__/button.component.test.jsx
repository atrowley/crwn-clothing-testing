import {render, screen} from '@testing-library/react'
import Button from "../button.component";

describe("Button tests", () => {
  test("should render base button when nothing is passed (query by text)", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toHaveStyle('background-color: black')
  })

  test("should render base button when nothing is passed (query by role)", () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: black')
  })

})