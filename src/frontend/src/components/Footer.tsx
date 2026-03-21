import { Link } from "@tanstack/react-router";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { CAFFEINE_CREDIT, LEGAL_LINKS, SOCIAL_LINKS } from "../config/links";
import type { SocialLink } from "../config/links";

const PLATFORM_ICONS = {
  twitter: FaXTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  discord: FaDiscord,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground w-full">
      {/* Main footer content */}
      <div className="w-full max-w-6xl mx-auto px-5 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center sm:justify-items-start">
          {/* Brand column */}
          <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-lg font-display font-extrabold text-footer-foreground tracking-tight">
                Galactic Dogs
              </span>
            </div>
            <p className="text-sm text-footer-foreground/60 leading-relaxed max-w-[220px]">
              Mint your custom dog on the Internet Computer. Yours forever,
              on-chain.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-footer-foreground/40">
              Community
            </h4>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link: SocialLink) => {
                const Icon = PLATFORM_ICONS[link.platform];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm font-semibold text-footer-foreground/70 hover:text-footer-foreground transition-colors"
                  >
                    <Icon size={16} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-footer-foreground/40">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href as "/privacy" | "/terms"}
                  className="text-sm font-semibold text-footer-foreground/70 hover:text-footer-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/10 w-full">
        <div className="w-full max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-xs text-footer-foreground/40">
            &copy; {year} Galactic Dogs. All rights reserved.
          </p>
          <a
            href={CAFFEINE_CREDIT.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-footer-foreground/40 hover:text-footer-foreground/60 transition-colors"
          >
            Built with ❤️ using {CAFFEINE_CREDIT.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
