import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isActive = (path: string) => pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          data-ocid="nav.home.link"
          className="flex items-center gap-2.5 select-none group shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-lg">🐾</span>
          </div>
          <div className="leading-tight">
            <div className="text-[9px] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-none">
              Galactic
            </div>
            <div className="text-sm font-display font-extrabold text-foreground leading-tight tracking-tight">
              Dogs
            </div>
          </div>
        </Link>

        {/* Desktop Nav — explicit flex container prevents overlap */}
        <nav
          className="hidden sm:flex items-center gap-2"
          aria-label="Main navigation"
        >
          <Link
            to="/create"
            data-ocid="nav.create.link"
            className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              isActive("/create")
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-foreground hover:bg-muted/80 hover:text-primary"
            }`}
          >
            Create
          </Link>
          <Link
            to="/gallery"
            data-ocid="nav.gallery.link"
            className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
              isActive("/gallery")
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-foreground hover:bg-muted/80 hover:text-primary"
            }`}
          >
            My Dogs
          </Link>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* Desktop CTA */}
          <Link
            to="/create"
            data-ocid="nav.primary_button"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm whitespace-nowrap hover:bg-primary/90 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            + New Dog
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="sm:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1.5">
          <Link
            to="/create"
            data-ocid="nav.mobile.create.link"
            onClick={() => setMenuOpen(false)}
            className={`inline-flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              isActive("/create")
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            Create
          </Link>
          <Link
            to="/gallery"
            data-ocid="nav.mobile.gallery.link"
            onClick={() => setMenuOpen(false)}
            className={`inline-flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              isActive("/gallery")
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            My Dogs
          </Link>
          <Link
            to="/create"
            data-ocid="nav.mobile.primary_button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-bold mt-1"
          >
            + New Dog
          </Link>
        </div>
      )}
    </header>
  );
}
