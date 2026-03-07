import styled from "styled-components";
import { useSelector } from "react-redux";

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

const DetailsRestaurantBoutton = styled.button`
  align-self: flex-start;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background: #f0c900;
  color: black;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background: #e0ba00;
  }
`;

const DetailsRestaurantTexte = styled.div``;

function DetailsRestaurant() {

  const restaurantSelectionne = useSelector(
    state => state.restaurant.restaurantSelectionne
  );

  const titre = restaurantSelectionne
    ? "Restaurant sélectionné"
    : "Aucun restaurant sélectionné";

  return (
    <DetailsRestaurantOverlay>

      <DetailsRestaurantTitre>
        {titre}
      </DetailsRestaurantTitre>

      {restaurantSelectionne && (
        <>
          <DetailsRestaurantTexte>
            {restaurantSelectionne.display_name}
          </DetailsRestaurantTexte>

          <DetailsRestaurantBoutton>
            Continuer
          </DetailsRestaurantBoutton>
        </>
      )}

    </DetailsRestaurantOverlay>
  );
}

export default DetailsRestaurant;