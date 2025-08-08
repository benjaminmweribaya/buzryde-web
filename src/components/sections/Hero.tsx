import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Clock } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: `linear-gradient(135deg, ${brandTeal}33, ${brandGold}33, transparent)`,
            backgroundSize: "200% 200%",
          }}
        />
        {/* Blurred accents */}
        <div
          className="h-full w-full"
          style={{
            background: `radial-gradient(circle at top right, ${brandGold}22, transparent 60%), 
                     radial-gradient(circle at bottom left, ${brandTeal}22, transparent 60%)`,
            filter: "blur(100px)",
            opacity: 0.25,
          }}
        />
        {/* Dark overlay for left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 text-black">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left */}
          <div className="space-y-6 animate-fade-up">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{
                border: `1px solid ${brandGold}`,
                backgroundColor: `${brandTeal}dd`,
                color: brandLight,
              }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: brandGold }} />
              Fast. Safe. Community-driven.
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-black">Ride smarter with </span>
              <span
                className="bg-clip-text text-transparent animate-text-shine"
                style={{
                  backgroundImage: `linear-gradient(to right, ${brandTeal}, ${brandGold})`,
                }}
              >
                BuzRyde
              </span>
            </h1>

            <p
              className="text-base sm:text-lg max-w-xl leading-relaxed text-gray-900"
            >
              Seamlessly connect with nearby drivers and get where you’re going —
              reliably, affordably, and safely — anytime, anywhere in Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/download" className="hover-scale">
                <Button
                  size="lg"
                  className="group shadow-lg hover:shadow-brand/40 transition"
                  style={{
                    backgroundColor: brandGold,
                    color: "#1E1E1E",
                  }}
                >
                  Get the app
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/services" className="hover-scale">
                <Button
                  size="lg"
                  className="transition-colors hover:bg-black/70"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: brandGold,
                    border: `1px solid ${brandGold}`,
                  }}
                >
                  Explore services
                </Button>
              </a>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap items-center gap-4 text-sm pt-2">
              {[
                { icon: <ShieldCheck className="h-4 w-4" style={{ color: brandGold }} />, label: "Safety-first platform" },
                { icon: <Clock className="h-4 w-4" style={{ color: brandGold }} />, label: "Transparent pricing" },
                { icon: <MapPin className="h-4 w-4" style={{ color: brandGold }} />, label: "Nationwide coverage" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full px-3 py-1 bg-black/50 text-white shadow-sm"
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>

            {/* App Badges */}
            <div className="flex items-center gap-4 pt-3">
              <img src="/images/appstore-badge.svg" alt="App Store" className="h-12" loading="lazy" />
              <img src="/images/google-play-badge.png" alt="Google Play" className="h-12" loading="lazy" />
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-fade-in">
            <div
              className="rounded-2xl p-6 shadow-xl backdrop-blur-md"
              style={{
                border: `1px solid ${brandGold}55`,
                backgroundColor: `${brandTeal}ee`,
              }}
            >
              <div
                className="aspect-[4/3] w-full rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${brandTeal}33, ${brandGold}33)`,
                }}
              >
                <img
                  src="/images/phone-mockup.png"
                  alt="BuzRyde App Preview"
                  className="w-3/4 drop-shadow-lg"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg p-3 text-center bg-white/10 text-white">
                  Upfront fares
                </div>
                <div className="rounded-lg p-3 text-center" style={{ backgroundColor: `${brandGold}33`, color: brandLight }}>
                  24/7 support
                </div>
                <div className="rounded-lg p-3 text-center bg-black/30 text-white">
                  Real-time tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


