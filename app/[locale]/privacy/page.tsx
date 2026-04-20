export default function PrivacyPage() {
  return (
    <div className="container py-20 max-w-3xl">
      <h1 className="text-4xl font-heading mb-6">Privacy Policy</h1>

      <p className="text-muted mb-6">
        Data Controller: Aditya (aditya.pt), Portugal — me@aditya.pt
      </p>

      <h2 className="font-heading mt-6">Data Collected</h2>
      <ul className="text-muted list-disc ml-6">
        <li>Contact form: name, email, message</li>
        <li>Tracker: environmental data only (no personal data)</li>
        <li>Analytics (if consented)</li>
        <li>Server logs (IP, browser)</li>
      </ul>

      <h2 className="font-heading mt-6">Legal Basis</h2>
      <p className="text-muted">
        GDPR Article 6(1)(a) consent for analytics, 6(1)(f) legitimate interest for logs.
      </p>

      <h2 className="font-heading mt-6">Retention</h2>
      <ul className="text-muted list-disc ml-6">
        <li>Contact: not stored</li>
        <li>Logs: 30 days</li>
        <li>Analytics: 24 months</li>
      </ul>

      <h2 className="font-heading mt-6">Rights</h2>
      <p className="text-muted">
        Access, rectification, erasure, portability, objection.
      </p>

      <h2 className="font-heading mt-6">Complaints</h2>
      <p className="text-muted">
        CNPD — cnpd.pt — +351 213 928 400
      </p>
    </div>
  );
}
