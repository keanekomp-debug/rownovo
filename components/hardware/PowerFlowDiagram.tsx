"use client";

export default function PowerFlowDiagram() {
  const flow = [
    "Solar Array",
    "MPPT Controller",
    "Battery (24V)",
    "PDB",
    "Regulators / ESC / Actuator"
  ];

  return (
    <div className="bg-surface p-6 rounded-xl border border-border">
      <h3 className="mb-6 font-heading">Power Architecture</h3>

      <div className="flex flex-wrap gap-4 items-center">
        {flow.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="px-4 py-2 border border-border">{f}</div>
            {i < flow.length - 1 && <span className="text-primary">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
