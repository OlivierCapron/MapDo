import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {

  const [villeSelectionnee, setVilleSelectionnee] = useState(null);
  const [restaurantSelectionne, setRestaurantSelectionne] = useState(null);

  return (
    <AppContext.Provider
      value={{
        villeSelectionnee,
        setVilleSelectionnee,
        restaurantSelectionne,
        setRestaurantSelectionne
      }}
    >
      {children}
    </AppContext.Provider>
  );
}