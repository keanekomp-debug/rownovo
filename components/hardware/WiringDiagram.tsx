"use client";

export default function WiringDiagram() {
  const items = [
    "PWM → ESC",
    "UART → GNSS",
    "I2C → IMU",
    "GPIO → UV-C",
    "ADC → Sensor"
  ];

  return (
    <div className="bg-surface p-6 rounded mt-6">
      <h3 className="mb-4">Data Connections</h3>
      <ul className="space-y-2 text-sm">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
