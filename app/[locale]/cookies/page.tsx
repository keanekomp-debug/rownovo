export default function CookiesPage() {
  return (
    <div className="container py-20 max-w-3xl">
      <h1 className="text-4xl font-heading mb-6">Cookie Policy</h1>

      <p className="text-muted mb-6">
        This site uses cookies to ensure basic functionality and, with consent,
        to collect analytics.
      </p>

      <h2 className="font-heading mt-6">Types of Cookies</h2>
      <ul className="text-muted list-disc ml-6">
        <li>Essential — required for site operation</li>
        <li>Analytics — usage insights (optional)</li>
        <li>Functional — preferences</li>
      </ul>

      <h2 className="font-heading mt-6">Managing Cookies</h2>
      <p className="text-muted">
        You can manage your preferences via the cookie banner.
      </p>
    </div>
  );
}
