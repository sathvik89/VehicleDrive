import { Marker, Polyline } from "react-leaflet";
import { TileLayer } from "react-leaflet";
export default function MyComponent({
  vehicleIcon,
  currPosition,
  vehicleRoute,
}) {
  return (
    <div>
      {/* map tiling */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* car icon */}
      <Marker
        position={[currPosition.latitude, currPosition.longitude]}
        icon={vehicleIcon}
      />

      {/* for the line  */}
      <Polyline
        positions={vehicleRoute.map((p) => {
          return [p.latitude, p.longitude];
        })}
        pathOptions={{ color: "blue " }}
      />
    </div>
  );
}
