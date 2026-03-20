export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/", icon: "𝕏" },
  { label: "Discord", href: "https://discord.gg/", icon: "💬" },
  { label: "Instagram", href: "https://instagram.com/", icon: "📸" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const CAFFEINE_CREDIT = {
  label: "caffeine.ai",
  href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
};
