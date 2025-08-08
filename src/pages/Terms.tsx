import { SEO } from "@/components/SEO";

const Terms = () => (
  <div>
    <SEO title="BuzRyde Terms of Service" description="Read BuzRyde’s Terms of Service covering use of the app by riders and drivers." path="/terms" />
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <p>Welcome to BuzRyde. These Terms govern your access to and use of our services. By using BuzRyde, you agree to these Terms.</p>
        <h2>Use of Services</h2>
        <p>Users must comply with local laws and maintain accurate account information. We may update these Terms from time to time.</p>
        <h2>Payments</h2>
        <p>Fares are displayed upfront before booking. Additional charges may apply for tolls or surcharges.</p>
        <h2>Safety</h2>
        <p>We prioritize safety with verified drivers and in-app tools. Misuse of the platform may result in account suspension.</p>
      </article>
    </section>
  </div>
);

export default Terms;
