import { SEO } from "@/components/SEO";

const Privacy = () => (
  <div>
    <SEO title="BuzRyde Privacy Policy" description="Learn how BuzRyde collects and protects your data across our rider and driver apps." path="/privacy" />
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <p>We respect your privacy. This policy explains what data we collect, how we use it, and your choices.</p>
        <h2>Information We Collect</h2>
        <p>Account details, trip information, and device data to provide and improve our services.</p>
        <h2>How We Use Information</h2>
        <p>To enable bookings, ensure safety, provide support, and comply with legal obligations.</p>
        <h2>Your Choices</h2>
        <p>You can access, correct, or delete your data by contacting support.</p>
      </article>
    </section>
  </div>
);

export default Privacy;
