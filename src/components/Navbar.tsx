import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sheet when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/case-studies", label: "CASE STUDIES" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/certifications", label: "CERTIFICATIONS" },
    { to: "/", hash: "experience", label: "EXPERIENCE" },
    { to: "/", hash: "contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:px-6 sm:py-4">
        <Link
          to="/"
          className="min-w-0 truncate font-mono text-[10px] text-paper/70 transition-colors hover:text-signal sm:text-[11px]"
        >
          NITHIN PRANAV — PRODUCT
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Desktop navigation"
          className="hidden items-center gap-6 font-mono text-[11px] sm:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              {...(link.hash ? { hash: link.hash } : {})}
              className={cn(
                "transition-colors hover:text-signal",
                location.pathname === link.to && !link.hash ? "text-signal" : "text-paper/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex shrink-0 items-center gap-2 sm:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="min-h-11 min-w-11 rounded-none border border-paper/20 text-paper/80 hover:border-signal hover:bg-panel hover:text-signal"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-none border-paper/10 bg-ink p-0 pt-16 sm:max-w-sm">
              <SheetTitle className="sr-only">Portfolio navigation</SheetTitle>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-2 px-5">
                <div className="mb-4 border-b border-paper/10 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper/30">
                    Navigation
                  </span>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    {...(link.hash ? { hash: link.hash } : {})}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group flex min-h-14 items-center justify-between border-b border-paper/10 py-4 font-mono text-base transition-colors hover:text-signal",
                      location.pathname === link.to && !link.hash ? "text-signal" : "text-paper/80"
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-paper/20 group-hover:text-signal">→</span>
                  </Link>
                ))}
                
                <div className="mt-8 flex flex-col gap-4">
                   <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center border border-signal bg-signal/10 px-4 py-3 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink"
                  >
                    BACK TO HOME
                  </Link>
                </div>
              </nav>
              
               <div className="absolute bottom-8 left-5 right-5">
                <div className="flex flex-col gap-1 font-mono text-[10px] text-paper/30">
                  <span>NITHIN PRANAV — PRODUCT MONOGRAPH</span>
                  <span>BERLIN / 2026</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
