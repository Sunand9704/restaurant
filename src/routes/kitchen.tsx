import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/kitchen")({
  head: () => ({
    meta: [
      { title: "The Kitchen | LUMIÈRE" },
      { name: "description", content: "Step inside the Lumière kitchen — where precision meets passion under Chef Julian Vane." },
      { property: "og:title", content: "The Kitchen | LUMIÈRE" },
      { property: "og:description", content: "Step inside the Lumière kitchen — where precision meets passion under Chef Julian Vane." },
    ],
  }),
  component: KitchenPage,
});

const HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuBvz4wOhu1qBAAgUA_J9_aMz20ZfLHZCigKjGLmoamOZhhe1h2yrejWwb7ahYQJtpLMB54sxxhXhNwZ2WvlJYekp6oMxHYmqa1JjeJJlDgkJyzTxV5DkmoQ9RUOWzc5Wm7UMoWwgB5NdGJdXL_VfDqRC8KFds_FV2T0sN63OWkbgA69IqYK9g-kEo4jxbY0eQAvpbe3fVP6L2YMXgd4TtmOu2FPocftTUCDV1alONNAEnqyOo_HW3-jTOhguBTJWzhBeAYldWsUGMU4";
const HANDS = "https://lh3.googleusercontent.com/aida-public/AB6AXuA9v83CmAkf9XgzhucSBgNrOfnu0xLIiONTm5tk78yt1x6cmc3LGwk_yDru1fuu56-lWZdBVVBVY5l5bTRn5BPH63kLOUAJBQEoiHfWUg7bdosLYJRWJIXdavxmRBVUoqgX7tfulXeBLGz8LxzimVq77e1fVK1BiRjOVjWyHY9Cc2KDxBYv0xeYOgYAeuh4PiMQjeK0Z4xwz0AgoHNnpkb-HncMMGvsXlEn4yWsZjEwO6r2BRfsw8Bfr9FUwTj4QfDPA-WXVmZRRXGP";
const CHEF = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ5zigVOfk2SjmbEX1SxNOgRlj2iul2D3ISkGdN6hJHeKQGV1gIlkLRsqureNdy3N6q4UVe6Cm407dR6lVAMaVeSWO_vwbeJqpGFFC4tMibjK-VqUItvv51cBMzHdYCWL-yVE5O_EvZaa5EApNG5T7Kcex0B3vKMEIY4RnK6FEaKmncPYX9ffFeHz1g7rbYuo2uNxDzSIYpSkmHvSILGh-pn5dDcvnxd9NjP-8f53k7X4gfRSJ7bOEoALAlUOddkjXmga60Fsx8bMV";

const PILLARS = [
  { icon: "local_fire_department", title: "Live Fire", desc: "Custom Josper grills and binchotan embers form the heart of every protein course." },
  { icon: "science", title: "Modern Technique", desc: "Sous-vide precision, fermentation labs, and centrifuge clarification refine every flavor." },
  { icon: "spa", title: "Seasonal Sourcing", desc: "Daily deliveries from artisan farms, divers and foragers across three continents." },
  { icon: "diversity_3", title: "The Brigade", desc: "Twenty-six chefs working in choreographed silence, each a specialist in their station." },
];

const STATIONS = [
  { name: "Garde Manger", lead: "Sous Chef Anaïs Roux", note: "Cold compositions, crudo, raw bar" },
  { name: "Saucier", lead: "Chef de Partie Idris Okafor", note: "Reductions, mother sauces, glace" },
  { name: "Pâtisserie", lead: "Pastry Chef Mei Tanaka", note: "Desserts, viennoiserie, sugar work" },
  { name: "Boulangerie", lead: "Baker Léo Marchetti", note: "Sourdough, naturally leavened breads" },
];

function KitchenPage() {
  return (
    <div className="min-h-screen bg-background text-[color:var(--on-surface)]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[80svh] min-h-[520px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${HERO}')` }} />
        </div>
        <div className="relative z-20 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 w-full max-w-[1280px] mx-auto">
          <span className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[color:var(--primary)] block mb-4">The Kitchen</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] max-w-3xl">
            Where <span className="italic text-[color:var(--primary)]">fire</span>, <span className="italic text-[color:var(--primary)]">precision</span> and <span className="italic text-[color:var(--primary)]">poetry</span> converge.
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mt-6 leading-relaxed">
            A choreography of twenty-six chefs, three open hearths, and one uncompromising standard — served nightly.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[color:var(--primary)]">Our Craft</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3">Four pillars of the Lumière kitchen</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PILLARS.map((p) => (
            <div key={p.title} className="p-6 md:p-8 bg-[color:var(--surface-container-low)] border border-[color:var(--outline-variant)]/30 hairline-gold transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-[color:var(--primary)] text-4xl mb-4 block">{p.icon}</span>
              <h3 className="font-display text-xl md:text-2xl mb-2">{p.title}</h3>
              <p className="text-sm md:text-base text-[color:var(--on-surface-variant)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chef portrait split */}
      <section className="py-20 md:py-28 bg-[color:var(--surface-container-low)]">
        <div className="px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img src={CHEF} alt="Executive Chef" className="w-full aspect-[4/5] object-cover hairline-gold" />
          <div className="space-y-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[color:var(--primary)]">The Pass</span>
            <h2 className="font-display text-3xl md:text-5xl italic leading-tight">"Every plate leaves my hands or it doesn't leave at all."</h2>
            <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] leading-relaxed">
              Chef Julian Vane personally inspects every course before service. It is a ritual of restraint — a final pause where instinct, memory and technique meet on a single warm plate.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { n: "26", l: "Chefs" },
                { n: "12", l: "Courses" },
                { n: "3", l: "Michelin Stars" },
              ].map((s) => (
                <div key={s.l} className="text-center border-l border-[color:var(--primary)]/30 first:border-l-0 px-2">
                  <div className="font-display text-3xl md:text-4xl text-[color:var(--primary)]">{s.n}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stations */}
      <section className="py-20 md:py-28 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[color:var(--primary)]">The Brigade</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 mb-6">Stations &amp; specialists</h2>
            <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] leading-relaxed">
              Each station is a discipline of its own — led by a chef who has spent a decade or more perfecting a single craft.
            </p>
            <img src={HANDS} alt="Chef hands plating" className="mt-8 w-full aspect-[4/3] object-cover hairline-gold" />
          </div>
          <div className="lg:col-span-7 divide-y divide-[color:var(--outline-variant)]/30 border-y border-[color:var(--outline-variant)]/30">
            {STATIONS.map((s) => (
              <div key={s.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 md:py-8">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl md:text-3xl text-[color:var(--primary)] truncate">{s.name}</h3>
                  <p className="text-sm md:text-base text-[color:var(--on-surface-variant)] mt-1">{s.lead}</p>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--outline)] mt-2">{s.note}</p>
                </div>
                <span className="material-symbols-outlined text-[color:var(--primary)] shrink-0">arrow_forward</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[color:var(--surface-container-low)] border-t border-[color:var(--outline-variant)]/30">
        <div className="px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl">Witness the craft from your table.</h2>
          <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] max-w-xl mx-auto">Reserve the Chef's Counter — eight seats facing the open pass — for the most intimate view of the Lumière kitchen.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
            <Link to="/reservations" className="bg-[color:var(--primary)] text-white px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] shimmer">Reserve the Counter</Link>
            <Link to="/menu" className="border border-[color:var(--primary)] text-[color:var(--primary)] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)]/10">Back to Menu</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}