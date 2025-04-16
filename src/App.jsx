import React from "react";
import Map from "./Components/Map";

export default function App() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Vehicle Moving</h1>
      <Map />
    </div>
  );
}
