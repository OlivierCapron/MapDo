import { useEffect, useState } from "react";
import styled from "styled-components";

const DetailsRestaurantOverlay = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;

  background: rgba(255, 255, 255, 0.9);
  padding: 20px 24px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0 -8px 3px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  width: 100%;
    box-sizing: border-box;
`;

const DetailsRestaurantTitre = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  
`;

const DetailsRestaurantTexte = styled.div`

`
function DetailsRestaurant({restaurantSelectionne}) {

    console.log("DetailsRestaurant init ; "+restaurantSelectionne)
    const titre = restaurantSelectionne
    ? "Restaurant sélectionné"
    : "Aucun restaurant sélectionné";
        const [detailRestaurant,setDetailRestaurant] = useState("");


      useEffect(() => {
        if (!restaurantSelectionne) return;
    
        const afficherDetails = () => {
            console.log("useEffect de DetailsRestaurant "+restaurantSelectionne)
            setDetailRestaurant(restaurantSelectionne);
        };
    
        afficherDetails();

      }, [restaurantSelectionne,titre]);


    return(
        <DetailsRestaurantOverlay>
            <DetailsRestaurantTitre>{titre}</DetailsRestaurantTitre>
            <DetailsRestaurantTexte>{detailRestaurant.display_name}</DetailsRestaurantTexte>
        </DetailsRestaurantOverlay>
    )
}
export default DetailsRestaurant;