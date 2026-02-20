import "./BarreRecherche.css";

import ChampRecherche from './ChampRecherche';


function BarreRecherche() {

    const rechercheVille = (ville) => {
    console.log("Ville  :", ville);
  };
  
     return (
      <div className="recherche-overlay">
        <span>Rechercher un restaurant</span>
       <ChampRecherche className="champ-recherche" onSelect={rechercheVille}></ChampRecherche>
      </div>
  );
}
export default BarreRecherche;
