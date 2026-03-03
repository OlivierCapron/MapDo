import { useEffect } from "react";
import { useMap } from "react-leaflet";

function Geolocalisation() {
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Pas de Géolocalisation possible ");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Position  :", lat, lon);

        map.setView([lat, lon], 14); 
      },
      (error) => {
        console.log("Permission refusée ou erreur :", error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, [map]);

  return null;
}

export default Geolocalisation;