"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getBuoys } from "@/lib/api";
import BuoySidebar from "@/components/tracker/BuoySidebar";
import DemoModeBadge from "@/components/ui/DemoModeBadge";

const BuoyMap = dynamic(() => import("@/components/tracker/BuoyMap"), {
  ssr: false
});

export default function TrackerPage() {
  const [buoys, setBuoys] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    getBuoys().then(setBuoys);
  }, []);

  return (
    <div className="h-[calc(100vh-64px)] flex">
      <div className="flex-1 relative">
        <BuoyMap buoys={buoys} onSelect={setSelected} />
        <DemoModeBadge />
      </div>

      <div className="w-[400px]">
        <BuoySidebar buoy={selected} />
      </div>
    </div>
  );
}
