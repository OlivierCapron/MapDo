import { useEffect } from "react";
import { useMap } from "react-leaflet";

function CentreurMap({ restaurants }) {
  const map = useMap();

  useEffect(() => {
    if (!restaurants || restaurants.length === 0) return;


    const bounds = restaurants.map(r => [
      parseFloat(r.lat),
      parseFloat(r.lon)
    ]);

    map.fitBounds(bounds, { padding: [100, 100] });

  }, [restaurants, map]);

  return null;
}

export default CentreurMap;