import { Marker, Polyline } from "react-leaflet";
import { TileLayer } from "react-leaflet";
export default function MyComponent({
  vehicleIcon,
  currPosition,
  vehicleRoute,
}) {
  return (
    <div>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={[currPosition.latitude, currPosition.longitude]}
        icon={vehicleIcon}
      />

      <Polyline
        positions={vehicleRoute.map((point) => [
          point.latitude,
          point.longitude,
        ])}
        pathOptions={{ color: "red" }}
      />
    </div>
  );
}
