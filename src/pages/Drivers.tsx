import { SEO } from "@/components/SEO";
import { DriverInterestForm } from "@/components/forms/DriverInterestForm";
import { CheckCircle2 } from "lucide-react";

const Drivers = () => (
  <div>
    <SEO title="Drive with BuzRyde – Register Your Interest" description="Earn on your schedule with BuzRyde. Register your interest to drive in Canadian cities." path="/drivers" />
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Drive with BuzRyde</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">Flexible hours, fair earnings, and tools built to help you succeed. Register your interest and we’ll reach out with next steps.</p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-3">
          {["Fair, transparent fees", "Flexible schedule", "Fast payouts", "In-app safety features"].map((b) => (
            <div key={b} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /><span>{b}</span></div>
          ))}
        </div>
        <div className="max-w-md">
          <DriverInterestForm />
        </div>
      </div>
    </section>
  </div>
);

export default Drivers;
