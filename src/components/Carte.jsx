import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../index.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { rechercherRestaurants } from "../services/nominatimApi";
import CentreurMap from "./CentreurMap";
import styled from "styled-components";
import Geolocalisation from "./Geolocalisation";
import { useAppContext } from "../hook/useAppContext";


import { useDispatch } from "react-redux";
import { setRestaurantSelectionne } from "../store/restaurantSlice";

const PopupContenu = styled.div`

  width: 2459;
height: 1115;
top: -217px;
left: -547px;
angle: 0 deg;
opacity: 1;

  `


 const PopupTitre = styled.div`
width: 239;
height: 99;
top: 11px;
left: 16px;
angle: 0 deg;
opacity: 1;
font-weight: 400;
font-style: Regular;
font-size: 12px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;


`;


const PopupBoutton = styled.button`


width: 79;
height: 33;
top: 77px;
left: 12px;
angle: 0 deg;
opacity: 1;
border-radius: 8px;
padding-top: 8px;
padding-right: 16px;
padding-bottom: 8px;
padding-left: 16px;
gap: 10px;
background: #F0C900;


`;

const TexteBoutton = styled.span`

width: 47;
height: 17;
angle: 0 deg;
opacity: 1;
font-weight: 700;
font-style: Bold;
font-size: 14px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;


`;
function Carte() {

    const { villeSelectionnee } = useAppContext();
const dispatch = useDispatch();
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
        data-testid="map"
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
            <Marker key={restaurant.place_id} position={positionRest} data-testid="marker">
              <Popup>
                <PopupContenu>
                  <PopupTitre>
                    {restaurant.display_name}
                  </PopupTitre>
                  <PopupBoutton data-testid="choisir" onClick={() => 
                      dispatch(setRestaurantSelectionne(restaurant))}
                  ><TexteBoutton>Choisir</TexteBoutton></PopupBoutton>
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
