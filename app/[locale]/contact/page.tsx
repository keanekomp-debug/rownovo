export default function ContactPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading mb-10">Contact</h1>

      <form className="max-w-xl space-y-4">
        <input
          placeholder="Name"
          className="w-full p-3 bg-surface border border-border"
        />
        <input
          placeholder="Email"
          className="w-full p-3 bg-surface border border-border"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 bg-surface border border-border h-40"
        />

        <button className="bg-primary text-black px-6 py-3 rounded">
          Send
        </button>
      </form>

      <div className="mt-10 text-muted">
        <p>Email: me@aditya.pt</p>
        <p>Portugal</p>
      </div>
    </div>
  );
}
