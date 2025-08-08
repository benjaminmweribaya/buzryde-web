import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/forms/ContactForm";

const Contact = () => (
  <div>
    <SEO title="Contact BuzRyde – Support & Inquiries" description="Get in touch with BuzRyde for support, feedback, or partnerships. We’re here to help." path="/contact" />
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact us</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">Questions or feedback? Send us a message—we usually respond within one business day.</p>
      <div className="max-w-xl">
        <ContactForm />
      </div>
    </section>
  </div>
);

export default Contact;
