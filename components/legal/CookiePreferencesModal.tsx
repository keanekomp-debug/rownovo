"use client";

import { useState } from "react";
import { setConsent } from "@/lib/cookieConsent";

export default function CookiePreferencesModal({ onClose }: any) {
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);

  const save = () => {
    setConsent({
      essential: true,
      analytics,
      functional
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-surface p-6 rounded w-full max-w-md">
        <h2 className="font-heading text-lg mb-4">Cookie Preferences</h2>

        <div className="space-y-3 text-sm">
          <label className="flex justify-between">
            Essential <span>Always on</span>
          </label>

          <label className="flex justify-between">
            Analytics
            <input type="checkbox" onChange={(e) => setAnalytics(e.target.checked)} />
          </label>

          <label className="flex justify-between">
            Functional
            <input type="checkbox" onChange={(e) => setFunctional(e.target.checked)} />
          </label>
        </div>

        <button onClick={save} className="mt-6 w-full bg-primary text-black py-2 rounded">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
