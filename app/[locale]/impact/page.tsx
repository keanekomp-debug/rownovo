import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ImpactPage() {
  return (
    <div className="container py-20 max-w-5xl">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-5xl font-heading mb-6">
          Turning rivers into real-time infrastructure
        </h1>

        <p className="text-muted max-w-2xl">
          Rowbot is building a distributed, low-cost sensing network that enables
          continuous environmental monitoring at a fraction of the cost of
          traditional systems.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="mb-16">
        <h2 className="text-2xl font-heading mb-6">The Problem</h2>

        <Card>
          <ul className="space-y-3 text-muted">
            <li>• Most rivers are monitored infrequently (monthly or less)</li>
            <li>• Pollution events go undetected in real time</li>
            <li>• Monitoring infrastructure is expensive and centralized</li>
            <li>• Communities lack direct access to environmental data</li>
          </ul>
        </Card>
      </section>

      {/* SOLUTION */}
      <section className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Our Solution</h2>

        <Card>
          <p className="text-muted">
            A network of autonomous, solar-powered buoys delivering continuous,
            real-time environmental data directly to the public and institutions.
          </p>
        </Card>
      </section>

      {/* IMPACT METRICS */}
      <section className="mb-16 grid md:grid-cols-3 gap-6">
        <Card>
          <div className="text-3xl text-data font-mono">10×</div>
          <p className="text-muted text-sm">
            increase in temporal resolution vs manual sampling
          </p>
        </Card>

        <Card>
          <div className="text-3xl text-data font-mono">80%</div>
          <p className="text-muted text-sm">
            lower cost than traditional monitoring stations
          </p>
        </Card>

        <Card>
          <div className="text-3xl text-data font-mono">24/7</div>
          <p className="text-muted text-sm">
            continuous monitoring capability
          </p>
        </Card>
      </section>

      {/* FUNDING ASK */}
      <section className="mb-16">
        <h2 className="text-2xl font-heading mb-6">Funding Request</h2>

        <Card>
          <p className="text-muted mb-4">
            We are seeking funding to deploy an initial network of 10 buoys
            across Portuguese river systems.
          </p>

          <ul className="text-muted space-y-2">
            <li>• Hardware build: $5,202 × 10 units</li>
            <li>• Deployment & testing</li>
            <li>• Data infrastructure</li>
          </ul>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Button>Download Full Proposal →</Button>
      </section>

    </div>
  );
}
