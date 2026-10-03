import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6">
        <Link
          to="/"
          className="font-mono text-[11px] text-paper/70 transition-colors hover:text-signal"
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
              hash={link.hash}
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
        <div className="flex items-center gap-4 sm:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="flex items-center justify-center p-1 text-paper/70 transition-colors hover:text-signal"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="border-paper/10 bg-ink p-0 pt-16">
              <nav className="flex flex-col gap-2 px-6">
                <div className="mb-4 border-b border-paper/10 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper/30">
                    Navigation
                  </span>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    hash={link.hash}
                    className={cn(
                      "group flex items-center justify-between border-b border-paper/5 py-4 font-mono text-sm transition-colors hover:text-signal",
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
                    className="flex w-full items-center justify-center border border-signal bg-signal/10 px-4 py-3 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink"
                  >
                    BACK TO HOME
                  </Link>
                </div>
              </nav>
              
              <div className="absolute bottom-8 left-6 right-6">
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
