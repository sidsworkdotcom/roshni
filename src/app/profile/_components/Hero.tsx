import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <header className="pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Badge>roshni studio profile</Badge>
          <h1 className="text-charcoal text-balancel mx-auto max-w-4xl font-serif text-5xl leading-[1.1] font-light md:text-6xl">
            A considered studio for thoughtful clients and meaningful places.
          </h1>
          <p className="text-charcoal/70 max-w-2xl text-lg leading-relaxed font-light">
            We believe in the power of architecture to shape a better way of
            living. Our practice is focused on long-term resonance over
            short-term trends.
          </p>
        </div>
      </div>
    </header>
  );
}
