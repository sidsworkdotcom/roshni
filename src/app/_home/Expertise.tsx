const expertise = [
  {
    id: "01.",
    title: "Residential Architecture",
    description:
      "Private homes across London (refurbishments, extensions, and new-build houses), with an approach rooted in light, proportion, and materiality.",
    points: ["RIBA Stages 0–7", "Planning & Pre-Application", "Extensions & New Builds"]
  },
  {
    id: "02.",
    title: "Pre-Purchase Feasibility",
    description:
      "Understand what's possible before you commit to a property: opportunities, constraints, and a clear direction forward.",
    points: ["Site & Planning Review", "Space Planning Options", "Budget & Timeline Guidance"]
  },
  {
    id: "03.",
    title: "Wellness & Retreats",
    description:
      "Wellness-led retreats, resorts, and residential developments, applying residential-scale thinking to calm, restorative places.",
    points: ["Concept Studies", "Masterplanning", "Landscape Integration"]
  },
  {
    id: "04.",
    title: "Concept & International",
    description:
      "Residential, wellness, and boutique hospitality projects abroad, from early concept and feasibility through to delivery.",
    points: ["Concept Development", "Context & Climate Analysis", "Local Consultant Coordination"]
  },
  {
    id: "05.",
    title: "Measured Surveys & 3D Scanning",
    description:
      "Accurate measured surveys using 3D laser scanning across London, available as a standalone service.",
    points: ["Plans, Elevations & Sections", "Topographical Information", "As-Built Drawings"]
  },
  {
    id: "06.",
    title: "International Property Advisory",
    description:
      "Independent architectural guidance for overseas clients buying and renovating in London, from property search to construction.",
    points: ["Property Appraisal", "Trusted Advisor Network", "Seamless Design Transition"]
  }
];

export default function Expertise() {
  return (
    <section className="bg-sand-50 border-primary-foreground/5 border-y py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl">Our Expertise</h2>
          <div className="bg-primary mx-auto h-px w-24" />
        </div>

        <div className="border-charcoal/10 bg-charcoal/10 grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="group bg-sand-50 p-10 transition-all duration-300 hover:bg-white"
            >
              <span className="text-primary/40 group-hover:text-primary font-serif text-5xl transition-colors">
                {item.id}
              </span>
              <h3 className="mt-6 mb-4 font-serif text-2xl">{item.title}</h3>
              <p className="text-charcoal/80 mb-8 text-sm leading-relaxed">
                {item.description}
              </p>
              <ul className="text-charcoal/60 space-y-2 text-xs tracking-widest uppercase">
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