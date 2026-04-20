export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  functional: boolean;
};

const KEY = "rowbot_cookie_consent";

export function getConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : null;
}

export function setConsent(prefs: ConsentPreferences) {
  localStorage.setItem(KEY, JSON.stringify(prefs));
}

export function hasConsent() {
  return getConsent() !== null;
}
