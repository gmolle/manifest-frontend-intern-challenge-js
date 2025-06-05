import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { vi } from "vitest";

describe("Button component", () => {
  test("renders with primary variant by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("Primary");
    expect(btn).toHaveClass("bg-[#3B968B]");
  });

  test("renders secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-[#3B968B]");
  });

  test("renders text variant", () => {
    render(<Button variant="text">Text</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-[#3B968B]");
  });

  test("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies inverted class when inverted is true", () => {
    render(
      <Button variant="secondary" inverted>
        Secondary Inverted
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-[#3B968B]", "text-white");
  });
  test("button has disabled attribute when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });
});
