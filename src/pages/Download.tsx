import { SEO } from "@/components/SEO";

const Download = () => (
  <div>
    <SEO title="Download BuzRyde – iOS & Android" description="Get the BuzRyde app for iOS and Android. Fast, safe ride hailing across Canada." path="/download" />
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Download the app</h1>
      <p className="text-muted-foreground mb-8">Start riding or earn as a driver—download BuzRyde today.</p>
      <div className="flex items-center justify-center gap-4">
        <a href="#" aria-label="Download on the App Store">
          <img src="/images/appstore-badge.svg" alt="Download on the App Store" className="h-14" loading="lazy" />
        </a>
        <a href="#" aria-label="Get it on Google Play">
          <img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-14" loading="lazy" />
        </a>
      </div>
    </section>
  </div>
);

export default Download;
