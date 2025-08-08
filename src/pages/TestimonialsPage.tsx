import { SEO } from "@/components/SEO";
import { Testimonials } from "@/components/sections/Testimonials";

const TestimonialsPage = () => (
  <div>
    <SEO title="BuzRyde Testimonials – Rider & Driver Reviews" description="Read real reviews from riders and drivers who trust BuzRyde across Canada." path="/testimonials" />
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
      <p className="text-muted-foreground mb-8">See what our community is saying.</p>
      <Testimonials />
    </section>
  </div>
);

export default TestimonialsPage;
