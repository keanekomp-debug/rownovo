"use client";

import { useEffect, useState } from "react";
import { hasConsent, setConsent } from "@/lib/cookieConsent";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hasConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 z-50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            We use cookies to improve your experience. See our privacy policy.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setConsent({ essential: true, analytics: true, functional: true });
                setVisible(false);
              }}
              className="bg-primary text-black px-4 py-2 rounded"
            >
              Accept All
            </button>

            <button
              onClick={() => {
                setConsent({ essential: true, analytics: false, functional: false });
                setVisible(false);
              }}
              className="border border-border px-4 py-2 rounded"
            >
              Reject
            </button>

            <button onClick={() => setOpen(true)} className="underline text-sm">
              Manage
            </button>
          </div>
        </div>
      </div>

      {open && <CookiePreferencesModal onClose={() => setVisible(false)} />}
    </>
  );
}
