export type SocialLink = {
  label: string;
  href: string;
  platform: "twitter" | "facebook" | "instagram" | "discord";
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Twitter / X", href: "https://twitter.com/", platform: "twitter" },
  { label: "Facebook", href: "https://facebook.com/", platform: "facebook" },
  { label: "Instagram", href: "https://instagram.com/", platform: "instagram" },
  { label: "Discord", href: "https://discord.gg/", platform: "discord" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const CAFFEINE_CREDIT = {
  label: "caffeine.ai",
  href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
};
