"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false, loading: () => <div className="h-full w-full bg-gray-100" /> }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function MapCore({ buoys, onSelect }: { buoys: any[]; onSelect?: (b: any) => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-full w-full bg-gray-100" />;
  }

  return (
    // @ts-ignore - react-leaflet types are overly strict; this is safe
    <MapContainer center={[39.5, -8]} zoom={7} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {buoys.map((b: any) => (
        // @ts-ignore - react-leaflet types are overly strict; this is safe
        <Marker
          key={b.id}
          position={[b.lat, b.lng]}
          eventHandlers={{ click: () => onSelect?.(b) }}
        >
          <Popup>
            <div className="p-2 min-w-[200px]">
              <h3 className="font-semibold">{b.name}</h3>
              {b.description && <p className="text-sm text-gray-600 mt-1">{b.description}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
