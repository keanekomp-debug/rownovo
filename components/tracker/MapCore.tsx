"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-leaflet components to avoid SSR issues [[21]][[27]]
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse" />
  }
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

// Import leaflet CSS only on client side
if (typeof window !== "undefined") {
  import("leaflet/dist/leaflet.css").then(() => {});
}

export default function MapCore({ buoys, onSelect }: { buoys: any[]; onSelect?: (b: any) => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show placeholder while mounting (prevents hydration mismatch)
  if (!isMounted) {
    return <div className="h-full w-full bg-gray-100" />;
  }

  return (
    <MapContainer 
      center={[39.5, -8] as [number, number]} 
      zoom={7} 
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {buoys.map((b: any) => (
        <Marker 
          key={b.id} 
          position={[b.lat, b.lng] as [number, number]}
          eventHandlers={{
            click: () => onSelect?.(b),
          }}
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
}"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-leaflet components to avoid SSR issues [[21]][[27]]
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse" />
  }
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

// Import leaflet CSS only on client side
if (typeof window !== "undefined") {
  import("leaflet/dist/leaflet.css").then(() => {});
}

export default function MapCore({ buoys, onSelect }: { buoys: any[]; onSelect?: (b: any) => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show placeholder while mounting (prevents hydration mismatch)
  if (!isMounted) {
    return <div className="h-full w-full bg-gray-100" />;
  }

  return (
    <MapContainer 
      center={[39.5, -8] as [number, number]} 
      zoom={7} 
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {buoys.map((b: any) => (
        <Marker 
          key={b.id} 
          position={[b.lat, b.lng] as [number, number]}
          eventHandlers={{
            click: () => onSelect?.(b),
          }}
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
