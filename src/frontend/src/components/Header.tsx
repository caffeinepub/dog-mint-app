import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isActive = (path: string) => pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-5 h-18 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          data-ocid="nav.home.link"
          className="flex items-center gap-3 select-none group"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-xl">🐾</span>
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-bold text-muted-foreground tracking-[0.18em] uppercase">
              Galactic
            </div>
            <div className="text-base font-display font-extrabold text-foreground leading-none tracking-tight">
              Dogs
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden sm:flex items-center gap-1"
          aria-label="Main navigation"
        >
          <Link
            to="/create"
            data-ocid="nav.create.link"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/create")
                ? "bg-primary text-primary-foreground shadow-card"
                : "text-foreground hover:bg-muted"
            }`}
          >
            Create
          </Link>
          <Link
            to="/gallery"
            data-ocid="nav.gallery.link"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/gallery")
                ? "bg-primary text-primary-foreground shadow-card"
                : "text-foreground hover:bg-muted"
            }`}
          >
            My Dogs
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Link
            to="/create"
            data-ocid="nav.primary_button"
            className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all duration-200 shadow-card hover:shadow-hero hover:-translate-y-0.5"
          >
            + New Dog
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="sm:hidden p-2 rounded-xl hover:bg-muted transition-colors"
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
        <div className="sm:hidden border-t border-border bg-card px-5 py-4 flex flex-col gap-2 animate-slide-in">
          <Link
            to="/create"
            data-ocid="nav.mobile.create.link"
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
              isActive("/create")
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            Create
          </Link>
          <Link
            to="/gallery"
            data-ocid="nav.mobile.gallery.link"
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
              isActive("/gallery")
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            My Dogs
          </Link>
          <Link
            to="/create"
            data-ocid="nav.mobile.primary_button"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-3 rounded-2xl bg-primary text-primary-foreground text-sm font-bold text-center"
          >
            + New Dog
          </Link>
        </div>
      )}
    </header>
  );
}
