"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function BuoyMap({ buoys, onSelect }: any) {
  return (
    <MapContainer
      center={[39.5, -8.0]}
      zoom={7}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {buoys.map((b: any) => (
        <Marker
          key={b.id}
          position={[b.lat, b.lng]}
          eventHandlers={{
            click: () => onSelect(b)
          }}
        />
      ))}
    </MapContainer>
  );
}
