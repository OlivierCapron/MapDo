import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";

import BarreRecherche from "./BarreRecherche";

vi.mock("./ChampRecherche", () => ({
  default: () => <div data-testid="champ-recherche">Champ Recherche</div>,
}));

test("affiche le titre de la barre de recherche", () => {
  render(<BarreRecherche />);

  expect(screen.getByText("Rechercher un restaurant")).toBeInTheDocument();
});

test("affiche le composant ChampRecherche", () => {
  render(<BarreRecherche />);

  expect(screen.getByTestId("champ-recherche")).toBeInTheDocument();
});
