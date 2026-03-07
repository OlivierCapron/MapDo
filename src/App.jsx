import "./index.css";

import Carte from "./components/Carte";
import BarreRecherche from "./components/BarreRecherche";
import DetailsRestaurant from "./components/DetailsRestaurant";
import styled from "styled-components";
import AppProvider from "./context/AppProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Overlay = styled.div`
  font-family: sans-serif;
  height: 100%;
  width: 100%;
`;
function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Overlay>
          <BarreRecherche></BarreRecherche>
          <Carte></Carte>
          <DetailsRestaurant></DetailsRestaurant>
        </Overlay>
      </AppProvider>
    </Provider>
  );
}

export default App;
