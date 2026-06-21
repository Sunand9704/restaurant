import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useDemoStore } from "@/lib/demo-store";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu | LUMIÈRE" },
      {
        name: "description",
        content:
          "Explore Lumière's seasonal culinary masterpieces — starters, mains, desserts and our curated wine list.",
      },
      { property: "og:title", content: "The Menu | LUMIÈRE" },
      {
        property: "og:description",
        content:
          "Explore Lumière's seasonal culinary masterpieces — starters, mains, desserts and our curated wine list.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = {
  name: string;
  price: string;
  desc: string;
  cat: "Starters" | "Mains" | "Desserts" | "Wine List";
  img: string;
  popular?: boolean;
  tag: "veg" | "nonveg" | "drink";
};

const ITEMS: Item[] = [
  {
    name: "Golden Truffle Scallops",
    price: "$48",
    desc: "Pan-seared Atlantic scallops adorned with 24k gold leaf, parsnip purée and black winter truffle essence.",
    cat: "Starters",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5D8IjxR8_LLjhT5UFMYZi4qJUQ3lgofj_t55v-ryV4ZOv_wWoe_oD9yrqh0HLwqmdb7qVABWYA7kjhAaItclhjS5ckSQ7w36HniZvkfts6VoenpdN__TZR8A3J5noUGuZaFUCGFxytDZGndSZTkc3kWiLgZiSSftgmfVB3gkdjl1QAvQFwqOFdg2qBL6cTYrtu4gj2eZdxq6Yav7ScCtXHgtiKtFt8WwgHI3P-xjOSvWOz5AneFJuf1G_Xv6GcwiUCaHOs_s5IpbN",
    popular: true,
    tag: "nonveg",
  },
  {
    name: "Heirloom Gazpacho",
    price: "$24",
    desc: "Cold-pressed organic heirloom tomatoes with cucumber ribbons, basil crystal and smoked aged balsamic.",
    cat: "Starters",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKmy8C9M9JMgujTV0lVE2aqBx_BJlm5G-n3yyEgH917nwmkJevVX7khEGaNVPMALnaakHrYR1gGuJN9IdWB2VUWhwDQgquwhlxixjip1-CAx58FNvy5lQ8pe3gw0nLa8OXP9CG7wAXPX0Vgi34tel6m9fPKgzf2d4-MkAzl52jOFx42bB_cYRvaxeHkr_q2QKlQfIVDTSfZlrc5lDGYeTYMrNBDUOuKCitvhoMPub6GXrFzqAmKIoHHV5rJ-DYUQxVCeUIB2l1t4Rl",
    tag: "veg",
  },
  {
    name: "A5 Wagyu Carpaccio",
    price: "$62",
    desc: "Paper-thin A5 Wagyu, pickled shallots, wild arugula and 36-month aged Parmigiano Reggiano.",
    cat: "Mains",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfTLyJal-6r2q7_A-I8qzJsW8Eq-BQZNuOmutQRo7R3PNM5J6h6A663N0zD92QXz0KvJbmiCDrHXPZozCE2yh-2cmmR36V2uIpLzLlc73SlVXwQXm-OIGueqA2AurVKSBCtnqg6vTljUzwQ-r3N_I1yjYQyExOxSBdMU0WDha1FVnhATU77sD-z4prrYUdFhXfvuWBduvwTo9H6KziMJipiQgWiZFvwNvHmbCE8IJjwIf2YL0Fq6ZPF_W0hqNYiANMp-ICltmKvyY3",
    popular: true,
    tag: "nonveg",
  },
  {
    name: "Persian Saffron Risotto",
    price: "$36",
    desc: "Creamy Carnaroli rice slow-cooked with Grade 1 Persian saffron, clarified butter and roasted pistachios.",
    cat: "Mains",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl1sq-jORAOpTvhvfixIt4ATP3hejz9LNY6v5aihPgfOiSjTkXcpiHFCeYHaURVcjsO5eKJZk8PHnVvrYq4FXw-p2IxQcs8dUw9SF_eEegNVB21BNU2iXAbqcq2mYZzblnM5x1ZySvyy3Aq4CdE6NkJmn1h8F6YmFBGD0jgex-yVDrozHdazOKKvgKX_4d38NezOvh6co5cp98oLa6fbuAnSCYY-FiXEn7rinZxR919VDFVthggZbpDgd_fF1_pxkyQ_dA8RKrjuQ8",
    tag: "veg",
  },
  {
    name: "Obsidian Sphere",
    price: "$28",
    desc: "Dark Belgian chocolate sphere, fleur de sel caramel and a hidden heart of Madagascar vanilla bean mousse.",
    cat: "Desserts",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Pr-VYiX0dtHRnieL6uhgjzaY3V7t3FOaHSqz8RnyT5_5Y-bwljCNi3C6Xebi7tfBlbmCyWAZBdWGK_FiNEMFwZpu4FBtpbZNrOeVAwqhoOg9sGrIVcu2KT9XGNPe_Gt98HS09ahfnCFRTTxMuwdlZAkkAd2cEOhHcRVtIhz5WNTmUDXcyCFBbtN2HaEglkUpy9-K028e0cTRPEYnkTXXmcezaa-q2Sy__2jiwpqeYm5zPfbcyhWjbo4FvoRefoHEyJfjUOXxI7pr",
    tag: "veg",
  },
  {
    name: "Grand Cru Flight",
    price: "$110",
    desc: "A vertical tasting of three exceptional Bordeaux vintages, curated by our Head Sommelier.",
    cat: "Wine List",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFsm57EKNgxl787fFGTYjL6UfCnoUryZ8lsxzh7Dfcz13eA9zTbmaAfbpA_ncG5KxecykSi6_0uPE1sko_PcEMjom1UBpSnDxjxBOXiASSmxBqLynt4O-uow0XQpaW1redlK6A6jRNNzV7OPwOqRzpEDxVHSiPhJBaf2zFrDHBQXgE-luZr8FK1XyLU1nMazIqiay2nsYLgzuXvYqoNH21lkM282E5aVfirH2LBtt-VIWBo3cBzdrNCJah-OWxX7j3C12CKaZZ5CVT",
    tag: "drink",
  },
];

const CATS = ["Starters", "Mains", "Desserts", "Wine List"] as const;

function MenuPage() {
  const [cat, setCat] = useState<(typeof CATS)[number] | "All">("All");
  const [q, setQ] = useState("");
  const [added, setAdded] = useState("");
  const { addItem } = useDemoStore();
  const navigate = useNavigate();
  const items = useMemo(
    () =>
      ITEMS.filter(
        (i) =>
          (cat === "All" || i.cat === cat) &&
          (q === "" || i.name.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, q],
  );

  return (
    <div className="min-h-screen bg-background text-[color:var(--on-surface)]">
      <Nav />

      {/* Hero */}
      <header className="pt-32 md:pt-40 pb-12 md:pb-16 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[color:var(--primary)] mb-4">
          Culinary Masterpieces
        </h1>
        <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
          Explore our meticulously curated selection of seasonal flavors, where every dish is a
          testament to the art of fine dining.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => navigate({ to: "/kitchen" })}
            className="bg-[color:var(--primary)] text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] shimmer inline-flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">soup_kitchen</span>
            Visit the Kitchen
          </button>
          <Link
            to="/reservations"
            className="border border-[color:var(--primary)] text-[color:var(--primary)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)]/10 transition-all"
          >
            Book a Table
          </Link>
        </div>
      </header>

      {/* Filters */}
      <section className="sticky top-[64px] z-40 bg-background/95 backdrop-blur-md py-4 md:py-6 border-y border-[color:var(--outline-variant)]/20 mb-10 md:mb-12">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between">
          <div className="relative w-full md:w-1/3 group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--outline)]">
              search
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-[color:var(--surface-container-low)] border-b border-[color:var(--outline)]/30 focus:border-[color:var(--primary)] focus:outline-none py-3 pl-12 pr-4 placeholder:text-[color:var(--outline)]/60 text-[13px] uppercase tracking-wider"
              placeholder="Search dishes..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-5 md:gap-8 overflow-x-auto pb-1 no-scrollbar w-full md:w-auto justify-start md:justify-center">
            {(["All", ...CATS] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-[12px] font-semibold uppercase tracking-[0.2em] pb-2 whitespace-nowrap transition-all ${cat === c ? "text-[color:var(--primary)] border-b-2 border-[color:var(--primary)]" : "text-[color:var(--on-surface-variant)] hover:text-[color:var(--primary)]"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((i) => (
            <article
              key={i.name}
              className="group flex flex-col h-full overflow-hidden bg-[color:var(--surface-container-lowest)] border border-[color:var(--outline-variant)]/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={i.img}
                  alt={i.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {i.popular && (
                  <div className="absolute top-4 left-4 bg-[color:var(--primary)] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md p-2 rounded-full border border-[color:var(--primary)]/20">
                  <span className="material-symbols-outlined text-[color:var(--primary)] text-sm">
                    {i.tag === "veg" ? "eco" : i.tag === "drink" ? "wine_bar" : "restaurant"}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 md:mb-4 gap-3">
                  <h3 className="font-display text-xl md:text-2xl text-[color:var(--primary)] leading-tight min-w-0">
                    {i.name}
                  </h3>
                  <span className="font-display text-xl md:text-2xl text-[color:var(--on-surface)] shrink-0">
                    {i.price}
                  </span>
                </div>
                <p className="text-[15px] text-[color:var(--on-surface-variant)]/90 mb-6 md:mb-8 flex-grow leading-relaxed">
                  {i.desc}
                </p>
                <button
                  onClick={() => {
                    addItem({ name: i.name, price: Number(i.price.replace("$", "")) });
                    setAdded(i.name);
                    window.setTimeout(() => setAdded(""), 1400);
                  }}
                  className="w-full min-h-12 py-3.5 border border-[color:var(--outline-variant)]/60 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] transition-all"
                >
                  {added === i.name ? "Added to Selection" : "Add to Selection"}
                </button>
              </div>
            </article>
          ))}
        </div>
        {items.length === 0 && (
          <p className="text-center text-[color:var(--on-surface-variant)] py-16">
            No dishes match your search.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
