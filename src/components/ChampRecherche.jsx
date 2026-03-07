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

const RechercheInput = styled.input`
  flex: 1;
  height: 42px;
  padding: 0 14px;
  border-radius: 10px;
  border: 2px solid #9b9b9b;
  background: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 14px;
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
      <button
        onClick={rechercher}
        disabled={!searchQuery || searchQuery.trim().length < 3}
      >
        🔍
      </button>
      <SuggestionsListe>
        {suggestionsMemo.map((suggestion) => (
          <Suggestion
            key={suggestion.place_id}
            villeSuggeree={suggestion}
            onSelect={villeSelectionnee}
          />
        ))}
      </SuggestionsListe>
      {erreur && <MessageErreur>{erreur}</MessageErreur>}
    </RechercheOverlay>
  );
}
export default ChampRecherche;
