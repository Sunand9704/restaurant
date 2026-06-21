import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | LUMIÈRE" },
      { name: "description", content: "A century of culinary brilliance — meet Chef Julian Vane and discover the philosophy behind Lumière." },
      { property: "og:title", content: "Our Story | LUMIÈRE" },
      { property: "og:description", content: "A century of culinary brilliance — meet Chef Julian Vane and discover the philosophy behind Lumière." },
    ],
  }),
  component: AboutPage,
});

const KITCHEN_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBvz4wOhu1qBAAgUA_J9_aMz20ZfLHZCigKjGLmoamOZhhe1h2yrejWwb7ahYQJtpLMB54sxxhXhNwZ2WvlJYekp6oMxHYmqa1JjeJJlDgkJyzTxV5DkmoQ9RUOWzc5Wm7UMoWwgB5NdGJdXL_VfDqRC8KFds_FV2T0sN63OWkbgA69IqYK9g-kEo4jxbY0eQAvpbe3fVP6L2YMXgd4TtmOu2FPocftTUCDV1alONNAEnqyOo_HW3-jTOhguBTJWzhBeAYldWsUGMU4";
const CHEF = "https://lh3.googleusercontent.com/aida-public/AB6AXuAeB9ljIULS0nqSehAyYfHIa9UfihUeVQ5LtMhHvTKvTBf2p5JQEQZZds9k3eo4xh92P2HT29XCVDsn4TjNTdE-am0rovCH-4bC0uOCIwJi25ARIMyTLtbHJ2oSjpvuU8DlPDclxCSYhIWACUOdTOH1XMCV9kz6EQArjlpmM796J-SxfKjCdQuhKM4kEIXaYQosuxIu1HtFucbXpkMNDRaQzwycEbdNaEW1QFJ7rPtS223i3X_cpxIajctsmDFsxqXZ0UM_XTxA4qVk";
const GALLERY = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9v83CmAkf9XgzhucSBgNrOfnu0xLIiONTm5tk78yt1x6cmc3LGwk_yDru1fuu56-lWZdBVVBVY5l5bTRn5BPH63kLOUAJBQEoiHfWUg7bdosLYJRWJIXdavxmRBVUoqgX7tfulXeBLGz8LxzimVq77e1fVK1BiRjOVjWyHY9Cc2KDxBYv0xeYOgYAeuh4PiMQjeK0Z4xwz0AgoHNnpkb-HncMMGvsXlEn4yWsZjEwO6r2BRfsw8Bfr9FUwTj4QfDPA-WXVmZRRXGP", label: "Precision", tall: true },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCk8Xhi8IVO--u3pguykBML7s5-SdJ4zMQOfYjg8qYWA5_Vs4x2OnGAIGsVOvhQC0I_BLlL35Vc94bHPPvedp8w4rJVTonWZIaSxS703j1UN_Fzfaw8yk1afA4RW12R605RofuV12IvSNyxmIp9zl-m9Jf8gYorgxcBbeNFeTalFC3MY0je0KIkQu7saJIiNTLOtdXkbw6QzAz-CJHv-ZHX7rdAqjCVhSORp-rQ_ll151y68BAnTKlwmtnb-Rd7qHKfniSLotarPfD", label: "The Cellar" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLLxguFLjGA_AhSOf9bksLZM92tTCBzlSvZkVrnNIURJP6pXhDF-uWnDK7nxDwLRp9lxf2ocMQpiRvbvRAkFShU_HQF8njAEcl5kPwWHbtDh-ZjX8TNBalWNiWDya17888aldUzdDWqbcq2yJorstKyVt67hNGVLHXG4JXVpf9m0-HojJgp3G3UXK9lian7ptm0jmQkW5WocCCcFAj3S-dcRl613cKaDwryS2DUluCwToAWJt8c1-SiM0O5SzT9ziaHoUWWP0tIMZ2", label: "Ambiance", tall: true },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRXLb5TxwLO076NV_J5VqTss5g8rWSehC0I6tPlejm6FVQaj7IOTJhy_Ap4eaF_MQcHwm0Kh5jk-hcH5oW_SQ8amY545bZi_dpvCt2KOqPWOqfL7a5kjo24ekjk8ruvZg7JNRFQfGJUB-OsmB5g7G64FEGOw91rgNuPPEeZDqTeLO7NcsSn2mQDMJsG-sDBOLFQpGnmPJLcGYPfgSYn7KKMBj82LYRekQxebBLM3d1lTG0iotIL0OJF23JANOmfzb9fvWUTHsQmfUa", label: "Artistry" },
];

const TIMELINE = [
  { year: "1924", title: "The First Spark", desc: "Lumière opens as a small riverfront bistro specializing in forgotten regional techniques." },
  { year: "1958", title: "The First Star", desc: "Lumière receives its first Michelin star, marking its ascent into the culinary pantheon." },
  { year: "1992", title: "The Modern Rebirth", desc: "A complete architectural overhaul introduces the signature dark glass aesthetic." },
  { year: "Today", title: "The Golden Era", desc: "Named the world's most immersive dining destination four years running." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-[color:var(--on-surface)]">
      <Nav />

      <header className="pt-32 md:pt-40 pb-16 md:pb-20 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[color:var(--primary)] mb-4 italic">Our Story</h1>
        <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[color:var(--on-surface-variant)]">A Legacy of Culinary Brilliance</p>
      </header>

      {/* Genesis */}
      <section className="relative flex items-center mb-20 md:mb-32 overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center opacity-20 grayscale" style={{ backgroundImage: `url('${KITCHEN_BG}')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="relative z-10 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-display text-3xl md:text-5xl text-[color:var(--primary)] leading-tight">The genesis of a new era in gastronomy.</h2>
            <div className="space-y-5 text-base md:text-lg text-[color:var(--on-surface-variant)] max-w-xl leading-relaxed">
              <p>Founded in 1924 as a humble bistro on the edge of the Seine, Lumière was born from a singular vision: to illuminate the sensory experience through the precision of French technique and the soul of seasonal alchemy.</p>
              <p>Every ingredient is a character in our narrative, sourced from artisans who treat the earth with the same reverence we treat the plate. Over a century later, the original kitchen's spirit remains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-4 border border-[color:var(--primary)]/25 -z-10 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
              <img src={CHEF} alt="Chef Julian Vane" className="w-full aspect-[4/5] object-cover shadow-xl" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)] mb-3 md:mb-4 block">Executive Chef</span>
            <h2 className="font-display text-4xl md:text-6xl text-[color:var(--on-surface)] mb-6 md:mb-8">Chef Julian Vane</h2>
            <blockquote className="italic font-display text-xl md:text-3xl text-[color:var(--on-surface-variant)] mb-6 md:mb-8 border-l-4 border-[color:var(--primary)] pl-6 md:pl-8 py-1">
              "I don't cook food. I curate memories that dissolve on the tongue but remain in the heart."
            </blockquote>
            <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] leading-relaxed">
              With three Michelin stars and a decade leading the most prestigious kitchens in Tokyo and Paris, Chef Vane brings a philosophy of 'Essentialism' to Lumière.
            </p>
            <Link to="/kitchen" className="mt-8 inline-block border border-[color:var(--primary)] text-[color:var(--primary)] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)]/10 transition-all">
              Step Into the Kitchen
            </Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-24 bg-[color:var(--surface-container-low)] border-y border-[color:var(--outline-variant)]/30">
        <div className="px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.5em] text-center text-[color:var(--primary)]/80 mb-10 md:mb-16">Distinctions &amp; Accolades</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { icon: "stars", label: "3 Michelin Stars" },
              { icon: "military_tech", label: "World's 50 Best" },
              { icon: "rewarded_ads", label: "James Beard Award" },
              { icon: "restaurant", label: "Wine Spectator" },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-[color:var(--primary)] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] text-center">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-3xl md:text-5xl text-[color:var(--on-surface)] mb-4">The Lumière Timeline</h2>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--on-surface-variant)]">Defining excellence through the decades</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[color:var(--primary)]/30 md:-translate-x-1/2" />
          <div className="space-y-12 md:space-y-20">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:justify-between" : "md:flex-row-reverse md:justify-between"}`}>
                <div className={`pl-12 md:pl-0 md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h4 className="font-display text-3xl md:text-4xl text-[color:var(--primary)] mb-1">{t.year}</h4>
                  <p className="font-display text-xl md:text-2xl text-[color:var(--on-surface)]">{t.title}</p>
                  <p className="text-sm md:text-base text-[color:var(--on-surface-variant)] mt-2">{t.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[color:var(--primary)] rounded-full z-10 border-2 border-background shadow-[0_0_15px_rgba(212,175,55,.4)]" />
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end mb-10 md:mb-12 gap-4">
          <div className="min-w-0">
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[color:var(--primary)] block mb-2">Behind the scenes</span>
            <h2 className="font-display text-3xl md:text-5xl text-[color:var(--on-surface)]">Life at Lumière</h2>
          </div>
          <Link to="/kitchen" className="shrink-0 hidden md:inline-block border border-[color:var(--primary)] text-[color:var(--primary)] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)] hover:text-white transition-all">View Kitchen</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {GALLERY.map((g) => (
            <div key={g.src} className={`relative overflow-hidden group ${g.tall ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}>
              <img src={g.src} alt={g.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-white border-b border-white">{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}