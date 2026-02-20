import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../index.css";
import "leaflet/dist/leaflet.css";

function Carte() {
  const position = [48.858, 2.357];



  return (
    <div className="leaflet-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Carte;
