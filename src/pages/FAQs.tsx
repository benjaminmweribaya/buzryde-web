import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I request a ride?", a: "Open the app, enter your destination, review the upfront price, and tap Request. A nearby driver will be matched instantly." },
  { q: "What payment methods are accepted?", a: "We accept major credit and debit cards. Cashless payments keep trips fast and secure." },
  { q: "How does BuzRyde ensure safety?", a: "All drivers are verified. Trips are GPS-tracked with easy in-app safety tools and 24/7 support." },
  { q: "How do I become a driver?", a: "Submit your interest on our Drivers page. We’ll follow up with steps for onboarding and document checks." },
];

const FAQs = () => (
  <div>
    <SEO title="BuzRyde FAQs – Using the App, Safety, Payments" description="Find answers about BuzRyde rides, payments, safety features, and driver onboarding in Canada." path="/faqs" />
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </div>
);

export default FAQs;
