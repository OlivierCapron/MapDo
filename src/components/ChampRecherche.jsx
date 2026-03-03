import {  useState } from "react";
import { rechercherVille } from "../services/nominatimApi";
import Suggestion from "./Suggestion";
import styled from "styled-components";


 const RechercheOverlay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;  `

 const RechercheInput = styled.input`
  flex: 1;
  height: 42px;
  padding: 0 14px;
  border-radius: 10px;
  border: 2px solid #9b9b9b;
  background: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #333;
  transition: border 0.2s ease, box-shadow 0.2s ease;`

  const SuggestionsListe = styled.div`
    margin-top: 0px;
  width: 100%;
  overflow-y: auto;`




function ChampRecherche({ onVilleSelectionnee }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

const recupererSuggestions = async (e) => {
      setSearchQuery(e)
      if (!searchQuery || searchQuery.trim().length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const result = await rechercherVille(e);
      console.log("Suggestions de villes :");
      console.log(result.data);

        setSuggestions(result.data);
      } catch (error) {
        console.error(error);
      }
    };
 
  const rechercher = async () => {
      if (!searchQuery || searchQuery.trim().length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const result = await rechercherVille(searchQuery);
        console.log("Suggestions de villes :" +result.data);

        setSuggestions(result.data);
      } catch (error) {
        console.error(error);
      }
    };

const villeSelectionnee = (suggestion) => {
  console.log("Ville selectionnee");
  console.log(suggestion);

  // Forward au parebt
  onVilleSelectionnee?.(suggestion);

  setSearchQuery(suggestion.display_name);

  setSuggestions([]);
};

  return (
    <RechercheOverlay>
      <RechercheInput
        type="text"
        value={searchQuery}
        onChange={(e) => recupererSuggestions(e.target.value)}
      
      >
        </RechercheInput>
            <button onClick={rechercher}>🔍</button>
      <SuggestionsListe >
        {suggestions.map((suggestion) => (
          <Suggestion
          key={suggestion.place_id}
          villeSuggeree={suggestion}
          onSelect={villeSelectionnee}
        />
        ))}
      </SuggestionsListe>
    </RechercheOverlay>
  );
}
export default ChampRecherche;
