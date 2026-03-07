import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChampRecherche from "./ChampRecherche";
import AppProvider from "../context/AppProvider";

import { expect, test, vi } from "vitest";

vi.mock("../services/nominatimApi", () => ({
  rechercherVille: vi.fn().mockResolvedValue({
    data: [
      { place_id: 1, display_name: "Paris, France" },
      { place_id: 2, display_name: "Paris, Texas, USA" }
    ]
  })
}));


test("affiche le champ de recherche", () => {

  render(
    <AppProvider>
      <ChampRecherche />
    </AppProvider>
  );

  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();
   expect(input).toHaveTextContent("");

});


test("affiche erreur si nb char < 3", async () => {

  render(
    <AppProvider>
      <ChampRecherche />
    </AppProvider>
  );

  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "az" } });

  const suggestion = await screen.getByTestId("MessageErreur");

  expect(suggestion).toBeInTheDocument();
  expect(suggestion).toHaveTextContent("Veuillez saisir au moins 3 caractères pour lancer la recherche");
});

test("affiche les suggestions après saisie", async () => {

  render(
    <AppProvider>
      <ChampRecherche />
    </AppProvider>
  );

  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "par" } });

  //findByText car on attend que le composant des suggestions s'affiche (et comme on est dnas une async ..)
  const suggestion = await screen.findByText("Paris, France");

  expect(suggestion).toBeInTheDocument();

});