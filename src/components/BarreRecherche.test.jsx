import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChampRecherche from "./ChampRecherche";
import AppProvider from "../context/AppProvider";

import { expect, test } from "vitest";

test("affiche le champ de recherche", () => {

  render(
    <AppProvider>
      <ChampRecherche />
    </AppProvider>
  );

  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();

});