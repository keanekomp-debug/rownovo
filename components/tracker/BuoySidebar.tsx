"use client";

import SensorDashboard from "./SensorDashboard";

export default function BuoySidebar({ buoy }: any) {
  if (!buoy) {
    return (
      <div className="p-6 text-muted">
        Select a buoy to view data
      </div>
    );
  }

  return (
    <div className="p-6 border-l border-border bg-surface h-full overflow-y-auto">
      <h2 className="text-xl font-heading">{buoy.name}</h2>
      <p className="text-muted text-sm mt-1">{buoy.river}</p>

      <div className="mt-4 text-xs text-muted">
        {new Date(buoy.lastUpdated).toLocaleString()}
      </div>

      {buoy.alertReason && (
        <div className="mt-4 text-alert text-sm">
          ⚠ {buoy.alertReason}
        </div>
      )}

      <SensorDashboard buoy={buoy} />
    </div>
  );
}
