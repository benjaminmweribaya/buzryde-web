import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-brand to-brand-alt" aria-hidden />
          <span className="text-lg font-bold tracking-tight">{site.name}</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className={({ isActive }) =>
                `relative text-sm transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <span className="story-link pr-0.5">{item.label}</span>
            </NavLink>
          ))}
          <NavLink to="/contact">
            <Button variant="hero" size="sm">Contact</Button>
          </NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {site.nav.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className="text-sm">
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full" variant="hero" size="sm">Contact</Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
