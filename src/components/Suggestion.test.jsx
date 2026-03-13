import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";

import Suggestion from "./Suggestion";

test("affiche le nom de la ville suggérée", () => {
  render(
    <Suggestion
      villeSuggeree={{ place_id: 1, display_name: "Paris, France" }}
      onSelect={vi.fn()}
    />,
  );

  expect(screen.getByText("Paris, France")).toBeInTheDocument();
});

test("appelle onSelect au clic avec la ville suggérée", () => {
  const onSelect = vi.fn();
  const villeSuggeree = { place_id: 2, display_name: "Lyon, France" };

  render(<Suggestion villeSuggeree={villeSuggeree} onSelect={onSelect} />);

  fireEvent.click(screen.getByRole("button"));

  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith(villeSuggeree);
});
