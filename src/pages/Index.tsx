import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { Car, Handshake, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-extrabold">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const Index = () => {
  return (
    <div>
      <SEO title="BuzRyde – Reliable Ride Hailing in Canada" description="BuzRyde connects riders and drivers with fast, safe, and reliable ride hailing across Canada. Download on iOS and Android." path="/" />
      <Hero />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Car, title: "Seamless rides", text: "Book in seconds with live ETAs and upfront pricing you can trust." },
            { icon: ShieldCheck, title: "Safety built-in", text: "Verified drivers, trip tracking, and 24/7 support on every ride." },
            { icon: Handshake, title: "Community first", text: "We’re building fair, reliable mobility for Canadian cities." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border p-6 bg-card shadow-sm">
              <f.icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="text-base font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-8">
          <Stat value="50+" label="Canadian cities (and growing)" />
          <Stat value="24/7" label="Support availability" />
          <Stat value="4.9★" label="Community rating" />
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <NavLink to="/download"><Button variant="hero" size="lg">Download the app</Button></NavLink>
          <NavLink to="/drivers"><Button variant="outline" size="lg">Drive with BuzRyde</Button></NavLink>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Index;
