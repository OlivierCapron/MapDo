import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../index.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { rechercherRestaurants } from "../services/nominatimApi";
import CentreurMap from "./CentreurMap";
import styled from "styled-components";
import Geolocalisation from "./Geolocalisation";
import { useAppContext } from "../hook/useAppContext";
const PopupContenu = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 180px;`


 const PopupTitre = styled.div`
  font-weight: 600;
  font-size: 14px;`


const PopupBoutton = styled.button`
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
function Carte() {

    const { villeSelectionnee, setRestaurantSelectionne } = useAppContext();

  const position = [48.858, 2.357];
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (!villeSelectionnee) return;

    const listeRestaurants = async () => {
      try {
        console.log("Nouvelle ville reçue pour listeRestaurants :", villeSelectionnee);

        const restaurantsTrouvesApi = await rechercherRestaurants(villeSelectionnee);
        setRestaurants(restaurantsTrouvesApi.data);

      } catch (error) {
        console.error(error);
      }
    };

    listeRestaurants();
  }, [villeSelectionnee]);

  return (
    <div className="leaflet-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <CentreurMap restaurants={restaurants} />
        <Geolocalisation/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurants.map((restaurant) => {
          const positionRest = [
            parseFloat(restaurant.lat),
            parseFloat(restaurant.lon),
          ];
          console.log(positionRest);

          return (
            <Marker key={restaurant.place_id} position={positionRest}>
              <Popup>
                <PopupContenu>
                  <PopupTitre>
                    {restaurant.display_name}
                  </PopupTitre>
                  <PopupBoutton  onClick={() => 
                      setRestaurantSelectionne(restaurant)}
                  >Choisir</PopupBoutton>
                </PopupContenu>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
export default Carte;
