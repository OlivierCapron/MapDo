import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";

import Carte from "./Carte";
import AppProvider from "../context/AppProvider";
import { Provider } from "react-redux";
import { store } from "../store/store";


// Mock Leaflet 
vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
  TileLayer: () => <div data-testid="tile-layer"></div>,
  Marker: ({ children }) => <div data-testid="marker">{children}</div>,
  Popup: ({ children }) => <div>{children}</div>,

  useMap: () => ({
    setView: vi.fn(),
    flyTo: vi.fn()
  })
}));


// Mock API restaurants
vi.mock("../services/nominatimApi", () => ({
  rechercherRestaurants: vi.fn().mockResolvedValue({
    data: [
      {
        place_id: 1,
        display_name: "Restaurant Test",
        lat: "48.85",
        lon: "2.35"
      }
    ]
  })
}));


test("affiche la carte", () => {

  render(
    <Provider store={store}>
      <AppProvider>
        <Carte />
      </AppProvider>
    </Provider>
  );

  const map = screen.getByTestId("map");

  expect(map).toBeInTheDocument();
});


test("affiche les restaurants sur la carte", async () => {

  render(
    <Provider store={store}>
      <AppProvider>
        <Carte />
      </AppProvider>
    </Provider>
  );

  const marker = await screen.findByTestId("marker");

  expect(marker).toBeInTheDocument();
});


test("affiche le bouton choisir dans le popup", async () => {

  render(
    <Provider store={store}>
      <AppProvider>
        <Carte />
      </AppProvider>
    </Provider>
  );

  const bouton = await screen.findByText("Choisir");

  expect(bouton).toBeInTheDocument();
});