import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { expect, test } from "vitest";

import DetailsRestaurant from "./DetailsRestaurant";
import restaurantReducer from "../store/restaurantSlice";

function renderWithStore(preloadedState) {
  const store = configureStore({
    reducer: { restaurant: restaurantReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <DetailsRestaurant />
    </Provider>,
  );
}

test("affiche le message si aucun restaurant n'est sélectionné", () => {
  renderWithStore({
    restaurant: { restaurantSelectionne: null },
  });

  expect(screen.getByText("Aucun restaurant sélectionné")).toBeInTheDocument();
});

test("affiche les détails et le bouton quand un restaurant est sélectionné", () => {
  renderWithStore({
    restaurant: {
      restaurantSelectionne: { display_name: "McDonald's Evry" },
    },
  });

  expect(screen.getByText("Restaurant sélectionné")).toBeInTheDocument();
  expect(screen.getByText("McDonald's Evry")).toBeInTheDocument();
  expect(screen.getByText("Continuer")).toBeInTheDocument();
});
