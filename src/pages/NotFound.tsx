import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-end justify-center overflow-hidden bg-background">
      <object
        type="image/svg+xml"
        data="/animations/not-found.svg"
        aria-hidden
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <h1 className="sr-only">404 — Page not found</h1>
      <a
        href="/"
        className="relative z-10 mb-16 rounded-full border border-primary/40 bg-background/70 px-8 py-3 font-display text-sm font-semibold text-primary backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
