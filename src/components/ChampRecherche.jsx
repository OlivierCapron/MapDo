import { useState, useMemo, useCallback } from "react";
import { rechercherVille } from "../services/nominatimApi";
import Suggestion from "./Suggestion";
import styled from "styled-components";
import { useAppContext } from "../hook/useAppContext";

const RechercheOverlay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;



const RechercheButton = styled.div`

  `;

const RechercheInput = styled.input`
  flex: 1;
  height: 26px;
  top: 35px;
left: 13px;
  padding: 0 14px;
  border-radius: 4px;
  angle: 0 deg;
opacity: 1;
border-width: 1px;

  border: 1px solid #7D7D7
  background: #ffffff;
  color: #333;
  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;
`;






const SuggestionsListe = styled.div`
  margin-top: 0px;
  width: 100%;
  overflow-y: auto;
`;

const MessageErreur = styled.div`
  width: 100%;
  margin-top: 6px;
  color: #d32f2f;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

function ChampRecherche() {
  const { setVilleSelectionnee } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [erreur, setErreur] = useState("");

  const suggestionsMemo = useMemo(() => {
    return suggestions;
  }, [suggestions]);

  const recupererSuggestions = useCallback(async (e) => {
    setSearchQuery(e);

    if (!e || e.trim().length < 3) {
      setErreur(
        "Veuillez saisir au moins 3 caractères pour lancer la recherche",
      );
      setSuggestions([]);
      return;
    }

    setErreur("");

    try {
      const result = await rechercherVille(e);
      setSuggestions(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const rechercher = useCallback(async () => {
    if (!searchQuery || searchQuery.trim().length < 3) {
      setErreur(
        "Veuillez saisir au moins 3 caractères pour lancer la recherche",
      );
      setSuggestions([]);
      return;
    }

    try {
      const result = await rechercherVille(searchQuery);
      setSuggestions(result.data);
    } catch (error) {
      console.error(error);
    }
  }, [searchQuery]);
  const villeSelectionnee = (suggestion) => {
    console.log("Ville selectionnee");
    console.log(suggestion);

    // Forward au parebt
    setVilleSelectionnee?.(suggestion);

    setSearchQuery(suggestion.display_name);

    setSuggestions([]);
  };

  return (
    <RechercheOverlay>
      <RechercheInput
        type="text"
        value={searchQuery}
        onChange={(e) => recupererSuggestions(e.target.value)}
      ></RechercheInput>

  <RechercheButton  onClick={rechercher}
        disabled={!searchQuery || searchQuery.trim().length < 3}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="26" height="26" rx="8" fill="#F0C900"/>
<path d="M12.7917 17.4583C15.9213 17.4583 18.4583 14.9213 18.4583 11.7917C18.4583 8.66205 15.9213 6.125 12.7917 6.125C9.66205 6.125 7.125 8.66205 7.125 11.7917C7.125 14.9213 9.66205 17.4583 12.7917 17.4583Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.875 18.875L16.7938 15.7938" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </RechercheButton>
      
      
        
      <SuggestionsListe>
        {suggestionsMemo.map((suggestion) => (
          <Suggestion
            key={suggestion.place_id}
            villeSuggeree={suggestion}
            onSelect={villeSelectionnee}
          />
        ))}
      </SuggestionsListe>
      {erreur && <MessageErreur data-testid="MessageErreur">{erreur}</MessageErreur>}
    </RechercheOverlay>
  );
}
export default ChampRecherche;
