import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "var(--gradient-primary)",
            filter: "blur(60px)",
            opacity: 0.35,
          }}
          aria-hidden
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="space-y-6 animate-enter">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/80">
              <Sparkles className="h-3.5 w-3.5" /> Fast. Safe. Community-driven.
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Ride smarter with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-alt"> BuzRyde</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Seamlessly connect with nearby drivers and get where you’re going—reliably and affordably—anytime, anywhere in Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/download" className="hover-scale">
                <Button variant="hero" size="lg" className="group">
                  Get the app
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="/services" className="hover-scale">
                <Button variant="outline" size="lg">Explore services</Button>
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Safety-first platform</div>
              <div className="hidden md:block">•</div>
              <div>Transparent pricing</div>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <img src="/images/appstore-badge.svg" alt="Download BuzRyde on the App Store" className="h-12" loading="lazy" />
              <img src="/images/google-play-badge.png" alt="Get BuzRyde on Google Play" className="h-12" loading="lazy" />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border bg-card p-6 shadow-[var(--shadow-elegant)] backdrop-blur-sm animate-scale-in">
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-brand/15 to-brand-alt/15" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                <div className="rounded-lg border p-3">Upfront fares</div>
                <div className="rounded-lg border p-3">24/7 support</div>
                <div className="rounded-lg border p-3">Real-time tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
