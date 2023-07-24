import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function Map() {

  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const mapRef = useRef();

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/6395/6395324.png",
    iconSize: [30, 30]
  });

  const markers = [
    {
      geo: [13.09, 80.248],
      title: "Bus : 8"
    },
    {
      geo: [13.08, 80.247],
      title: "Bus : 16"
    },
    {
      geo: [13.07, 80.246],
      title: "Bus : 24"
    },
  ];

  return (
      <MapContainer className="h-[94vh] w-screen" center={center} zoom={13} scrollWheelZoom={true} ref={mapRef}>
        <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=4XXuUwm83IdgokJ3bh3T"
        />

        <MarkerClusterGroup>
          {markers.map((m) => (
            <Marker position={m.geo} icon={customIcon} key={m.title}>
              <Popup><p className="font-semibold">{m.title}</p></Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
  )
}
