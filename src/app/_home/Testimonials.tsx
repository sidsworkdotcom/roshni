import { PiQuotesFill } from "react-icons/pi";

const TESTIMONIALS = [
  {
    quote:
      "Roshni Studio were the interior designers for my boutique personal training studio in West London and I am thrilled with the result. The design process flowed smoothly to a very short timeline and fixed budget. Ritika maximised the use of the space and she was always available and open to discussing and incorporating feedback. The final design is contemporary, beautiful and practical - it surpassed my expectations. I would definitely recommend Roshni Studio.",
    client: "Jozef Jurik",
    location: "Blackline EMS Personal Training Studio White City"
  },
  {
    quote:
      "Roshni Studio were the architects for my investment project. My project was a new build development in London with apartments. They provided me with a full service and were very efficient and transparent with their work. They were helpful in connecting me with other consultants and their cad designs were practical. I would highly recommend them.",
    client: "Samara Adams",
    location: "New Build Development in London"
  },
  {
    quote:
      "RS was the architect for my home in North London. The project included a loft conversion, ground floor rear and side extension. They got the approvals I needed from the council, did the construction drawings and found me a good builder. There were difficulties with and hurdles that came up within the projects, but they handled it very well and provided good solutions. I am very happy with the outcome.",
    client: "Mark Robson",
    location: "North London"
  },
  {
    quote:
      "An architectural partner who listens as much as they design. The result exceeded our vision.",
    client: "Private Client",
    location: "Heritage Renovation, London"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-sand-50 overflow-hidden py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-8">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-serif text-4xl leading-[1.1] md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="bg-primary mx-auto h-px w-24" />
        </div>

        {/* Staggered Grid */}
        <div className="grid gap-x-16 md:grid-cols-2">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                // index % 2 !== 0 targets the 2nd column (1, 3, etc.)
                // We add top margin to the right column and bottom margin to the left
                index % 2 !== 0 ? "mb-12 md:mt-32 md:mb-0" : "mb-12 md:mb-32"
              }`}
            >
              {/* Phosphor Filled Icon */}
              <PiQuotesFill
                className="text-primary mb-6 text-4xl opacity-60"
                aria-hidden="true"
              />

              <blockquote className="text-charcoal/90 mb-8 font-serif text-2xl leading-snug font-light">
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="border-primary mt-auto border-l-2 pl-6">
                <p className="text-charcoal text-xs md:text-sm">
                  {item.client}
                </p>
                <p className="text-charcoal/60 text-xs md:text-sm">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
