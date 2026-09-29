const expertise = [
  {
    id: "01.",
    title: "Residential Design",
    description:
      "Bespoke private residences designed to reflect the unique lifestyle and aspirations of our clients, with a focus on sustainable luxury.",
    points: ["New Builds", "Major Renovations", "Interior Architecture"],
    bordered: true
  },
  {
    id: "02.",
    title: "Wellness Environments",
    description:
      "Creating restorative spaces including private spas, meditation retreats, and boutique hospitality concepts that prioritize health.",
    points: ["Spa Design", "Lighting Bio-optimization", "Acoustic Planning"],
    bordered: true
  },
  {
    id: "03.",
    title: "Feasibility Studies",
    description:
      "Detailed analysis of potential sites, zoning, and project constraints to ensure a solid foundation for your architectural vision.",
    points: ["Site Analysis", "Zoning Compliance", "Budgeting & Strategy"],
    bordered: false
  }
];

export default function Expertise() {
  return (
    <section className="bg-sand-50 border-primary-foreground/5 border-y py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl">
            Our Expertise
          </h2>
          <div className="bg-primary mx-auto h-px w-24" />
        </div>

        <div className="border-charcoal/10 grid grid-cols-1 border md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.id}
              className={`group p-10 transition-all duration-300 hover:bg-white ${item.bordered ? "border-charcoal/10 dark:border-sand/10 border-b md:border-r md:border-b-0" : ""} `}
            >
              <span className="text-primary/40 group-hover:text-primary font-display font-serif text-5xl transition-colors">
                {item.id}
              </span>

              <h3 className="mt-6 mb-4 font-serif text-2xl">{item.title}</h3>

              <p className="text-charcoal/80 dark:text-sand/60 mb-8 text-sm leading-relaxed">
                {item.description}
              </p>

              <ul className="text-charcoal/60 dark:text-sand/40 space-y-2 text-xs tracking-widest uppercase">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
