import React, { useState, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import L from "leaflet";
import icon from "../Icons/car.png";
import MyComponent from "./MyComponent";

const vehicleIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [30, 30],
  iconAnchor: [19, 28],
});

const vehicleRoute = [
  { latitude: 17.385044, longitude: 78.486671 },
  { latitude: 17.3855, longitude: 78.4868 },
  { latitude: 17.386, longitude: 78.487 },
  { latitude: 17.3865, longitude: 78.4872 },
  { latitude: 17.387, longitude: 78.487 },
  { latitude: 17.3875, longitude: 78.4868 },
  { latitude: 17.388, longitude: 78.4866 },
  { latitude: 17.3885, longitude: 78.4868 },
  { latitude: 17.389, longitude: 78.487 },
  { latitude: 17.3895, longitude: 78.4872 },
  { latitude: 17.39, longitude: 78.487 },
  { latitude: 17.3905, longitude: 78.4868 },
  { latitude: 17.391, longitude: 78.4866 },
  { latitude: 17.3915, longitude: 78.4868 },
  { latitude: 17.392, longitude: 78.493671 },
];
export default function Map() {
  const [currPosition, setCurrPosition] = useState(vehicleRoute[0]);
  const [index, setIndex] = useState(0); //start count from 0

  useEffect(() => {
    const id = setInterval(() => {
      if (index < vehicleRoute.length - 1) {
        //checking if index count is lesser than remaining rout to cover
        const newPosition = vehicleRoute[index + 1];
        setCurrPosition(newPosition);
        setIndex(index + 1);
      } else {
        clearInterval(id);
      }
    }, 3000); // Update every 3 seconds
    return () => clearInterval(id); 
  }, [index]); //everytime index updates to +1 useEffect runs ..

  return (
    <MapContainer
      center={[currPosition.latitude, currPosition.longitude]}
      zoom={16}
      scrollWheelZoom={false}
      style={{
        height: "100vh",
        width: "100%",
        border: "2px solidblack",
      }}
    >
      <MyComponent
        vehicleIcon={vehicleIcon}
        currPosition={currPosition}
        vehicleRoute={vehicleRoute}
      />
    </MapContainer>
  );
}
