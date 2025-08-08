import { SEO } from "@/components/SEO";
import { CheckCircle2, Clock, ShieldCheck, Smartphone } from "lucide-react";

const Feature = ({ icon: Icon, title, text }: any) => (
  <div className="rounded-lg border p-6 bg-card shadow-sm">
    <Icon className="h-5 w-5 text-primary mb-3" />
    <h3 className="text-base font-semibold mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

const Services = () => {
  return (
    <div>
      <SEO title="BuzRyde Services – For Riders and Drivers" description="Explore BuzRyde features for riders and drivers: safe trips, upfront pricing, and fair earnings." path="/services" />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Built to move with you—whether you’re catching a ride or growing your driving business.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">For Riders</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Feature icon={Smartphone} title="One-tap booking" text="Find a nearby driver in seconds with live ETAs." />
              <Feature icon={CheckCircle2} title="Upfront pricing" text="Know the fare before you go—no surprises." />
              <Feature icon={ShieldCheck} title="Safety-first" text="Verified drivers, trip tracking, and 24/7 support." />
              <Feature icon={Clock} title="On your schedule" text="Ride anytime—day or night—across Canadian cities." />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">For Drivers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Feature icon={CheckCircle2} title="Fair earnings" text="Transparent fees and fast payouts you can count on." />
              <Feature icon={Clock} title="Flexible hours" text="Drive when it works for you—your schedule, your goals." />
              <Feature icon={ShieldCheck} title="Safety tools" text="In-app safety features and dedicated support." />
              <Feature icon={Smartphone} title="Powerful app" text="Smart navigation and demand insights built-in." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
