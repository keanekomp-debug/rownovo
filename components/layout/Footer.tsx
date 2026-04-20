import LanguageToggle from "./LanguageToggle";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-primary font-heading text-lg">Rowbot</h3>
          <p className="text-muted text-sm mt-2">
            Rivers made visible.
          </p>
        </div>

        <div className="text-sm text-muted">
          <p>About</p>
          <p>Technology</p>
          <p>Hardware</p>
          <p>Tracker</p>
        </div>

        <div className="flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      <div className="text-center text-xs text-muted pb-6">
        © 2024 Aditya Neil Banerjee (aditya.pt)
      </div>
    </footer>
  );
}
