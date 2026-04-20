"use client";

export default function SensorCard({ label, value, status }: any) {
  const color =
    status === "good"
      ? "border-success"
      : status === "warning"
      ? "border-alert"
      : "border-danger";

  return (
    <div className={`p-4 border ${color} rounded bg-surface`}>
      <div className="text-muted text-sm">{label}</div>
      <div className="text-2xl font-mono">{value}</div>
    </div>
  );
}
