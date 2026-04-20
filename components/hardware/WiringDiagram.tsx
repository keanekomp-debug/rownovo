"use client";

export default function WiringDiagram() {
  const items = [
    { label: "PWM → ESC", color: "text-alert" },
    { label: "UART → GNSS", color: "text-primary" },
    { label: "I2C → IMU", color: "text-success" },
    { label: "GPIO → UV-C", color: "text-purple-400" },
    { label: "ADC → Sensor", color: "text-danger" }
  ];

  return (
    <div className="bg-surface p-6 rounded-xl border border-border mt-6">
      <h3 className="mb-4 font-heading">Signal Map</h3>
      <ul className="space-y-2 text-sm">
        {items.map((i, idx) => (
          <li key={idx} className={i.color}>
            {i.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
