import Link from "next/link";

export default function CTASection() {
  return (
    <section className="container py-20 text-center">
      <h2 className="text-3xl font-heading mb-6">
        Open-source. Deployable. Real.
      </h2>

      <Link href="/contact" className="bg-primary px-6 py-3 rounded text-black">
        Get involved →
      </Link>
    </section>
  );
}
