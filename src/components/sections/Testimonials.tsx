import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "BuzRyde is my go-to for daily commutes—always on time and super friendly drivers.",
    author: "Amelia, Toronto",
  },
  {
    quote: "As a driver, I love the transparency and fair earnings.",
    author: "Noah, Vancouver",
  },
  {
    quote: "Booking is so fast. The app just works—exactly what I need.",
    author: "Sofia, Calgary",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Loved by riders and drivers</h2>
          <p className="text-muted-foreground mt-2">Real stories from early adopters across Canada.</p>
        </div>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <p className="text-base leading-relaxed">“{t.quote}”</p>
                      <p className="mt-4 text-sm font-medium text-muted-foreground">{t.author}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
