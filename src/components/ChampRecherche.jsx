import "./ChampRecherche.css";
import { useEffect, useState } from "react";
import { searchCity } from "../services/nominatimApi";
import Suggestion from "./Suggestion";

function ChampRecherche() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery || searchQuery.trim().length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const result = await searchCity(searchQuery);
        setSuggestions(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="recherche-input-group">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="recherche-input"
      />
      <button>🔍</button>
      <div className="suggestions-liste">
        {suggestions.map((suggestion) => (
          <Suggestion key={suggestion.place_id} villeSuggeree={suggestion} />
        ))}
      </div>
    </div>
  );
}
export default ChampRecherche;
