import { Toaster } from "@/components/ui/sonner";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { WizardPage } from "./pages/WizardPage";

function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-xs">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link
          to="/"
          data-ocid="nav.home.link"
          className="flex items-center gap-2 select-none"
        >
          <span className="text-2xl">🐾</span>
          <div className="leading-tight">
            <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
              Dog
            </div>
            <div className="text-sm font-extrabold text-foreground leading-none">
              Mint
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/create"
            data-ocid="nav.create.link"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/create")
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            Create
          </Link>
          <Link
            to="/gallery"
            data-ocid="nav.gallery.link"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/gallery")
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            My Dogs
          </Link>
        </nav>

        <Link
          to="/create"
          data-ocid="nav.primary_button"
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-all duration-200"
        >
          + New Dog
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);
  return (
    <footer className="border-t border-border bg-card py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐾</span>
          <span className="text-sm font-bold text-foreground">Dog Mint</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          &copy; {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const createWizardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create",
  component: WizardPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  createWizardRoute,
  galleryRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
