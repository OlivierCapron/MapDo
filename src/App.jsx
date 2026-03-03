import "./index.css";

import Carte from './components/Carte'
import BarreRecherche from './components/BarreRecherche';
import DetailsRestaurant from './components/DetailsRestaurant';
import { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
 font-family: sans-serif;
  height: 100%;  
  width: 100%;
 `
function App() {

  const [villeSelectionnee, setVilleSelectionnee] = useState(null);
  const [restaurantSelectionne, setRestaurantSelectionne] = useState(null);

  return (
    <Overlay>
      <BarreRecherche onVilleSelectionnee={setVilleSelectionnee}></BarreRecherche>
      <Carte villeSelectionnee={villeSelectionnee} setRestaurantSelectionne={setRestaurantSelectionne}></Carte>
      <DetailsRestaurant restaurantSelectionne={restaurantSelectionne}></DetailsRestaurant>
    </Overlay>
  )
}

export default App
