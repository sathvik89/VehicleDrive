import React, { useState, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import L from "leaflet";
import icon from "../Icons/car.png";
import MyComponent from "./MyComponent";
const vehicleIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [38, 38], // icon size
  iconAnchor: [10, 35], // icon point touching line
});
export default function Map() {
  const vehicleRoute = [
    { latitude: 17.38044, longitude: 78.486671 }, // Starting point
    { latitude: 17.38044, longitude: 78.487671 }, // Move 1 km north-east
    { latitude: 17.38044, longitude: 78.488671 }, // Move another 1 km north-east
    { latitude: 17.388044, longitude: 78.489671 }, // Continue moving
    { latitude: 17.389044, longitude: 78.490671 },
    { latitude: 17.390044, longitude: 78.491671 },
    { latitude: 17.391044, longitude: 78.492671 },
    { latitude: 17.392044, longitude: 78.493671 },
    { latitude: 17.393044, longitude: 78.494671 },
    { latitude: 17.394044, longitude: 78.495671 },
  ];
  const [currPosition, setCurrPosition] = useState(vehicleRoute[0]);
  const [path, setPath] = useState([vehicleRoute[0]]);

  const [index, setIndex] = useState(0); //start count from 0

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < vehicleRoute.length - 1) {
        //checking if index count is lesser than remaining routs to cover
        const newPosition = vehicleRoute[index + 1];
        setCurrPosition(newPosition);
        setPath((prevPath) => [...prevPath, newPosition]);
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [index]); //everytime index updates to +1 useEffect runs ..

  return (
    <MapContainer
      center={[currPosition.latitude, currPosition.longitude]}
      zoom={23}
      style={{ height: "100vh", width: "100%" }}
    >
      <MyComponent
        vehicleIcon={vehicleIcon}
        currPosition={currPosition}
        vehicleRoute={vehicleRoute}
      />
    </MapContainer>
  );
}
