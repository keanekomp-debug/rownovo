"use client";

import dynamic from "next/dynamic";

const MapCore = dynamic(() => import("./MapCore"), {
  ssr: false
});

export default function BuoyMap({ buoys, onSelect }: any) {
  return <MapCore buoys={buoys} onSelect={onSelect} />;
}
