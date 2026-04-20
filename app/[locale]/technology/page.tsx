export default function TechnologyPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading mb-10">Technology</h1>

      <section className="max-w-3xl text-muted space-y-6">
        <p>
          Rowbot is a distributed environmental sensing system built around
          semi-autonomous, solar-powered buoys.
        </p>

        <p>
          Each unit integrates a Raspberry Pi CM4 control system, GNSS positioning,
          inertial sensing, and a multi-parameter water quality probe capable of
          measuring pH, dissolved oxygen, conductivity, ORP, and temperature.
        </p>

        <p>
          Data is collected locally, processed onboard, and transmitted via open
          protocols to ensure full accessibility and interoperability.
        </p>

        <p>
          The architecture prioritizes:
        </p>

        <ul className="list-disc ml-6">
          <li>Low-cost deployment at scale</li>
          <li>Open data standards</li>
          <li>Energy autonomy via solar + LiFePO4 storage</li>
          <li>Modular hardware for repairability</li>
        </ul>
      </section>
    </div>
  );
}
