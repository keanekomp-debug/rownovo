"use client";

export default function DataCard({ label, value, unit, status }: any) {
  const color =
    status === "good"
      ? "text-success"
      : status === "warning"
      ? "text-alert"
      : "text-danger";

  return (
    <div className="bg-surface p-4 rounded border border-border">
      <div className="text-muted text-sm">{label}</div>
      <div className={`text-2xl font-mono ${color}`}>
        {value} {unit}
      </div>
    </div>
  );
}
