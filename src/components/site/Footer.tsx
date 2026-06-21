import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 bg-[color:var(--surface-container-low)] border-t border-[color:var(--outline-variant)]/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 px-5 md:px-10 lg:px-16 max-w-[1280px] mx-auto">
        <div className="space-y-5">
          <div className="font-display text-3xl md:text-4xl text-[color:var(--primary)]">LUMIÈRE</div>
          <p className="text-sm md:text-base text-[color:var(--on-surface-variant)] max-w-xs leading-relaxed">
            Redefining the boundaries of culinary art through precision, passion, and unparalleled luxury.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)] mb-1">Explore</h4>
          <Link to="/menu" className="text-sm text-[color:var(--on-surface-variant)] hover:text-[color:var(--primary)]">Menu</Link>
          <Link to="/about" className="text-sm text-[color:var(--on-surface-variant)] hover:text-[color:var(--primary)]">About Us</Link>
          <Link to="/kitchen" className="text-sm text-[color:var(--on-surface-variant)] hover:text-[color:var(--primary)]">The Kitchen</Link>
          <Link to="/reservations" className="text-sm text-[color:var(--on-surface-variant)] hover:text-[color:var(--primary)]">Reservations</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)] mb-1">Connect</h4>
          <p className="text-sm text-[color:var(--on-surface-variant)]">128 Rue de la Paix, Paris</p>
          <p className="text-sm text-[color:var(--on-surface-variant)]">+33 1 42 61 50 00</p>
          <p className="text-sm text-[color:var(--on-surface-variant)]">hello@lumiere.dining</p>
        </div>
      </div>
      <div className="mt-12 md:mt-16 text-center px-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]/70">© 2024 LUMIÈRE GASTRONOMY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}