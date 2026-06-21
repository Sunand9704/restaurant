import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUMIÈRE | Gastronomy Redefined" },
      { name: "description", content: "An immersive fine-dining journey through taste, texture and time." },
      { property: "og:title", content: "LUMIÈRE | Gastronomy Redefined" },
      { property: "og:description", content: "An immersive fine-dining journey through taste, texture and time." },
    ],
  }),
  component: Index,
});

const HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuAXYefCPD3gvtrW56LCQDRRxCamzGrD2QiZP94da3ZpvK80s5PnJO5Kw_BuBnklZOECOv_kAJOhvMGSfQUkO8B95ZqDz0FW3wdZQsOsCKqgM_Wq3KUwx0OI0O7HyFdb3hVccF0qCTzY-kt4sVdsnD0FHXsnYU3sUTQkjp_AiAVl7HUG7HdEFP9IBgU2XkxiN0FkruUN6ou2Ks0HbLGyRseuJWcOaK0dkFgqNCPbeTOFKTA2gix0OhywyDq-Ci7gco3oO3xMtZmV50AV";
const WAGYU = "https://lh3.googleusercontent.com/aida-public/AB6AXuCRLegNTrU9V1nsE11lh2YrJA1s1xvwyW8tpu6djM9Mnj9doxflIsf74BR9E7yPVSQgR1yg9lM1HXPO_kke65KNvxpul9zl_uhpBllAspgXVp6_QoiLiczBhpoxQGetI0PIUsg9L-2GJP1XEEppskkZBK53tKq3w3JvDidOhJl_Dq9VsRWPySc-QkU-rH8Tf9uh3ZnESFWt3YCFClr393X1wu6iBqOEwE_4UAPA4QG77h4Rv-yvqhB7-5i5oQuJZ-Z6bhujsv0w1EaU";
const COCOA = "https://lh3.googleusercontent.com/aida-public/AB6AXuDZWi7qx4WnUlDEVylAJQAjfmVqhEOB7LUAbpLuFOtoQ2HbjOImpg9Utg8MX3TWXHSrG7wNsRUhnS_713Rh_TsHzwZ3lSFO4-JZzDaM-PMQfLl-EjiW7nKODEo5NufOaq6iLY0DnUzbwH2YDbNJMwCqIdppUyM4jkmu61eYNB6vZ2JKzBL97ifddj1Djl-OE14srqSw8hNJlnHtQIaGcvXkihrR89uJ4_bpBTXMYXpl-dY_oOCHbFFgQ2hWlODfyuCgPRiuXSDdD_IB";
const CRUDO = "https://lh3.googleusercontent.com/aida-public/AB6AXuDlhSHzziBLPks24mK4a2zxdemiDWIHqmKFo7UEsjV1XJR-8UVrbkq_rQUbtsinteSfIgCD5VN1U4o6IAKPK60v7Pz_o4qsg9ylLGZ69mMgC76LWDxCyvOqtTLubG3g-TpaGMrIXr2QWya2jUoUsPYxlC0C9or3Jbj1AkzqQ1kG1hG2AuJnKdwXFYLrJtJJ7fOy6qgifY_-X6NiYKa7lXIWtQJsshMHfAXZlwC3uS2e8KYdxIdryYMVWHXSFS1QTFdNpWqxE7h-sFsy";
const CHEF = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ5zigVOfk2SjmbEX1SxNOgRlj2iul2D3ISkGdN6hJHeKQGV1gIlkLRsqureNdy3N6q4UVe6Cm407dR6lVAMaVeSWO_vwbeJqpGFFC4tMibjK-VqUItvv51cBMzHdYCWL-yVE5O_EvZaa5EApNG5T7Kcex0B3vKMEIY4RnK6FEaKmncPYX9ffFeHz1g7rbYuo2uNxDzSIYpSkmHvSILGh-pn5dDcvnxd9NjP-8f53k7X4gfRSJ7bOEoALAlUOddkjXmga60Fsx8bMV";

function Index() {
  return (
    <div className="min-h-screen bg-background text-[color:var(--on-surface)]">
      <Nav />
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/40 z-10" />
          <div className="w-full h-full bg-cover bg-center scale-105" style={{ backgroundImage: `url('${HERO}')` }} />
        </div>
        <div className="relative z-20 px-5 md:px-10 lg:px-16 w-full max-w-[1280px] mx-auto">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[color:var(--on-surface)]">
              Gastronomy <br /> <span className="italic font-light text-[color:var(--primary)]">Redefined</span>
            </h1>
            <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] max-w-lg leading-relaxed">
              Experience an immersive journey through taste, texture, and time. Lumière brings artisanal precision to every bite in an atmosphere of whispered elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link to="/reservations" className="bg-[color:var(--primary)] text-white px-8 md:px-10 py-4 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.2em] shimmer text-center">
                Reserve a Table
              </Link>
              <Link to="/menu" className="border border-[color:var(--primary)] text-[color:var(--primary)] px-8 md:px-10 py-4 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)]/10 transition-all text-center">
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[color:var(--primary)]/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-14 bg-gradient-to-b from-[color:var(--primary)]/50 to-transparent" />
        </div>
      </section>

      {/* Signature Plates */}
      <section className="py-20 md:py-32 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 md:flex md:flex-row md:justify-between md:items-end mb-12 md:mb-16">
          <div className="min-w-0 space-y-3 md:space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[color:var(--primary)]">Signature Plates</h2>
            <p className="text-sm md:text-base text-[color:var(--on-surface-variant)] max-w-md">
              Our seasonal selection curated by Executive Chef Julian Thorne, focusing on rare ingredients and avant-garde techniques.
            </p>
          </div>
          <Link to="/menu" className="shrink-0 self-end text-[12px] font-semibold text-[color:var(--primary)] uppercase border-b border-[color:var(--primary)]/30 pb-1 hover:border-[color:var(--primary)] whitespace-nowrap">View Full Menu</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 group relative h-[380px] md:h-[500px] overflow-hidden hairline-gold">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${WAGYU}')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="flex justify-between items-end gap-4">
                <div className="text-white min-w-0">
                  <span className="text-[color:var(--primary)] text-[11px] font-semibold uppercase tracking-[0.2em] block mb-2">Entrée</span>
                  <h3 className="font-display text-2xl md:text-3xl mb-2">Miyazaki Wagyu A5</h3>
                  <p className="text-white/80 text-sm max-w-sm">Truffle emulsion, charred heirloom leeks, aged balsamic reduction.</p>
                </div>
                <span className="text-[color:var(--primary)] font-display text-2xl md:text-3xl shrink-0">$145</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {[{ img: COCOA, title: "Midnight Cocoa", desc: "70% Tanzanian chocolate.", price: "$28" }, { img: CRUDO, title: "Kingfish Crudo", desc: "Citrus pearls, chili oil.", price: "$34" }].map((d) => (
              <div key={d.title} className="group relative h-[220px] md:h-[238px] overflow-hidden hairline-gold">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${d.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full flex justify-between items-end gap-3">
                  <div className="text-white min-w-0">
                    <h3 className="font-display text-xl md:text-2xl truncate">{d.title}</h3>
                    <p className="text-white/70 text-sm">{d.desc}</p>
                  </div>
                  <span className="text-[color:var(--primary)] font-display text-lg md:text-xl shrink-0">{d.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Vision */}
      <section className="relative bg-[color:var(--surface-container-low)] overflow-hidden py-20 md:py-32">
        <div className="px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center hairline-gold grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ backgroundImage: `url('${CHEF}')` }}
            />
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 w-36 h-36 md:w-48 md:h-48 bg-[color:var(--primary)]/10 backdrop-blur-xl p-6 md:p-8 border border-[color:var(--primary)]/25 hidden md:flex flex-col justify-center items-center text-center">
              <span className="font-display text-4xl md:text-5xl text-[color:var(--primary)] leading-none">20+</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] mt-2">Years of Artistry</span>
            </div>
          </div>
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-5 md:space-y-6">
              <span className="text-[color:var(--primary)] text-[12px] font-semibold uppercase tracking-[0.25em]">The Vision</span>
              <h2 className="font-display text-3xl md:text-5xl italic leading-tight">"A plate is a canvas where memory meets innovation."</h2>
              <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] leading-relaxed">
                Our philosophy at Lumière is rooted in the reverence for raw materials. We don't just cook; we translate the terroir of our local producers into a sensory language that speaks to the soul.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-[color:var(--primary)]">Chef Julian Thorne</p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] mt-1">Executive Chef &amp; Founder</p>
            </div>
            <Link to="/about" className="inline-block border border-[color:var(--primary)] text-[color:var(--primary)] px-8 md:px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)]/10 transition-all">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-32 bg-background">
        <div className="px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto text-center">
          <span className="material-symbols-outlined text-[color:var(--primary)] text-6xl mb-6 opacity-40">format_quote</span>
          <p className="font-display text-2xl md:text-4xl leading-relaxed max-w-4xl mx-auto">
            "The tasting menu was a revelation. Each course told a distinct story, balanced with a precision I've rarely encountered outside of Paris."
          </p>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)] mt-8">— Eleanor Vance, Gastronome Weekly</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
