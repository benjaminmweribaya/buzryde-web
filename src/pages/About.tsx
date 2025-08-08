import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div>
      <SEO title="About BuzRyde – Our Mission & Story" description="Discover BuzRyde’s mission to connect Canadian communities with fast, safe, and reliable ride hailing." path="/about" />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">About BuzRyde</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          We’re building Canada’s most trusted ride-hailing network—made for everyday commuters and professional drivers. Our mission is to create safer, more reliable urban mobility through technology and community.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Mission", text: "Seamlessly connect riders and drivers while prioritizing safety, fairness, and accessibility." },
            { title: "Vision", text: "Empower every Canadian city with reliable mobility and sustainable driver earnings." },
            { title: "Values", text: "Safety, transparency, reliability, and community impact guide every decision we make." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border p-6 bg-card shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
