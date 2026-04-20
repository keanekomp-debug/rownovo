"use client";

import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";

export default function MapCore({ buoys, onSelect }: any) {
  return (
    <MapContainer center={[39.5, -8]} zoom={7} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {buoys.map((b: any) => (
        <CircleMarker
          key={b.id}
          center={[b.lat, b.lng]}
          radius={10}
          pathOptions={{
            color: b.status === "alert" ? "#E63946" : "#52B788"
          }}
          eventHandlers={{
            click: () => onSelect(b)
          }}
        />
      ))}
    </MapContainer>
  );
}
