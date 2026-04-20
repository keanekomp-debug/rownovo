import BOMTable from "@/components/hardware/BOMTable";
import PowerFlowDiagram from "@/components/hardware/PowerFlowDiagram";
import WiringDiagram from "@/components/hardware/WiringDiagram";
import AssemblyGuide from "@/components/hardware/AssemblyGuide";

export default function HardwarePage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading mb-10">Hardware</h1>

      <section className="mb-16">
        <h2 className="text-2xl mb-4">Bill of Materials</h2>
        <BOMTable />
      </section>

      <section className="mb-16">
        <PowerFlowDiagram />
        <WiringDiagram />
      </section>

      <section>
        <h2 className="text-2xl mb-4">Assembly Guide</h2>
        <AssemblyGuide />
      </section>
    </div>
  );
}
