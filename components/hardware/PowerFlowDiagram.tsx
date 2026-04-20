"use client";

export default function PowerFlowDiagram() {
  const nodes = [
    "Solar",
    "MPPT",
    "Battery",
    "PDB",
    "12V",
    "5V",
    "ESC",
    "Actuator"
  ];

  return (
    <div className="bg-surface p-6 rounded">
      <h3 className="mb-4">Power Flow</h3>
      <div className="flex flex-wrap gap-4">
        {nodes.map((n, i) => (
          <div key={i} className="px-4 py-2 border border-border">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
