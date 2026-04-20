"use client";

import DataCard from "../ui/DataCard";
import { getStatus } from "@/lib/thresholds";

export default function SensorDashboard({ buoy }: any) {
  if (!buoy) return null;

  const r = buoy.readings;

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      <DataCard label="pH" value={r.ph} unit="" status={getStatus("ph", r.ph)} />
      <DataCard label="Temp" value={r.temperature} unit="°C" status={getStatus("temperature", r.temperature)} />
      <DataCard label="DO" value={r.dissolvedOxygen} unit="mg/L" status={getStatus("dissolvedOxygen", r.dissolvedOxygen)} />
      <DataCard label="Cond." value={r.conductivity} unit="µS" status={getStatus("conductivity", r.conductivity)} />
      <DataCard label="ORP" value={r.orp} unit="mV" status={getStatus("orp", r.orp)} />
      <DataCard label="Turb." value={r.turbidity} unit="NTU" status={getStatus("turbidity", r.turbidity)} />
    </div>
  );
}
