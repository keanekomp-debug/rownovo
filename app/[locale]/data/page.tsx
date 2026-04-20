export default function DataPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading mb-10">Open Data</h1>

      <p className="text-muted max-w-2xl mb-8">
        All Rowbot data is open and accessible. You can download datasets or
        connect directly via API.
      </p>

      <div className="space-y-6">
        <div className="border border-border p-4 rounded">
          <h3 className="font-heading">Dataset — Tejo River</h3>
          <p className="text-muted text-sm">CSV, updated daily</p>
          <button className="mt-2 px-4 py-2 bg-primary text-black rounded">
            Download
          </button>
        </div>

        <div className="border border-border p-4 rounded">
          <h3 className="font-heading">API Access</h3>
          <p className="text-muted text-sm">
            GET /api/buoys → returns live sensor data
          </p>
        </div>
      </div>
    </div>
  );
}
