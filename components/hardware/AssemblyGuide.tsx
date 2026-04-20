"use client";

export default function AssemblyGuide() {
  const phases = [
    {
      title: "Fabrication",
      steps: ["Print parts", "Prepare hull", "Install inserts"]
    },
    {
      title: "Wiring",
      steps: ["Connect solar", "Route cables", "Seal connectors"]
    },
    {
      title: "Bring-up",
      steps: ["Test voltage", "Boot CM4", "Calibrate sensors"]
    },
    {
      title: "Assembly",
      steps: ["Mount thruster", "Seal hatch", "Test system"]
    }
  ];

  return (
    <div className="mt-10">
      {phases.map((p, i) => (
        <div key={i} className="mb-6">
          <h4 className="font-heading">{p.title}</h4>
          <ul className="text-muted text-sm mt-2">
            {p.steps.map((s, j) => (
              <li key={j}>• {s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
