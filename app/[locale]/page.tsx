export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section" style={{minHeight: '80vh'}}>
        <h1 style={{fontSize: '3.5rem', fontWeight: 700}}>
          Rivers made visible.
        </h1>
        <p style={{marginTop: '1rem', color: 'var(--color-muted)'}}>
          A solar-powered network of autonomous buoys delivering real-time
          environmental intelligence to communities.
        </p>

        <div style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
          <a className="card" href="/en/tracker">Track Live →</a>
          <a className="card" href="/en/technology">How it works →</a>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem'}}>
          <div className="card">Buoys Online: 3</div>
          <div className="card">Data Points Today: 14,823</div>
          <div className="card">Build Cost: $5,202</div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <h2>Why this exists</h2>
        <p style={{color: 'var(--color-muted)', marginTop: '1rem'}}>
          Rivers are still treated as black boxes. Rowbot turns them into open,
          continuous data streams—accessible to anyone, not just scientists.
        </p>
      </section>
    </main>
  );
}
