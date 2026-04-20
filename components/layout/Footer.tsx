import LanguageToggle from "./LanguageToggle";
import Link from "next/link";

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

        <div className="text-sm text-muted space-y-1">
          <Link href="/about">About</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/hardware">Hardware</Link>
          <Link href="/tracker">Tracker</Link>
        </div>

        <div className="flex justify-end">
          <LanguageToggle />
        </div>
      </div>

      <div className="text-center text-xs text-muted pb-6">
        <Link href="/privacy">Privacy</Link> |{" "}
        <Link href="/cookies">Cookies</Link> <br />
        © 2024 Aditya (aditya.pt)
      </div>
    </footer>
  );
}
