import { NavLink } from "react-router-dom";
import { site } from "@/config/site";

export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand to-brand-alt" aria-hidden />
            <span className="text-base font-semibold">{site.name}</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Innovative, reliable, and community-driven ride hailing across Canada.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
            <li><NavLink to="/download">Download</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/faqs">FAQs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/drivers">Driver Signup</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/terms">Terms</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Made with care for Canadian communities.</p>
        </div>
      </div>
    </footer>
  );
};
