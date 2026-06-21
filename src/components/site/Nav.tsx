import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { DemoPanels, type DemoPanel } from "./DemoPanels";
import { useDemoStore } from "@/lib/demo-store";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/about", label: "About" },
  { to: "/kitchen", label: "Kitchen" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<DemoPanel>(null);
  const { user, selection } = useDemoStore();
  const selectionCount = selection.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-[color:var(--primary)]/15 shadow-sm">
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-16 py-4 w-full max-w-[1280px] mx-auto">
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl text-[color:var(--primary)] tracking-tight uppercase"
          >
            LUMIÈRE
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{
                  className:
                    "text-[color:var(--primary)] border-b border-[color:var(--primary)] pb-1",
                }}
                inactiveProps={{
                  className: "text-[color:var(--on-surface)]/70 hover:text-[color:var(--primary)]",
                }}
                className="text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPanel("selection")}
              aria-label={`Open selection with ${selectionCount} items`}
              className="relative min-w-11 min-h-11 text-[color:var(--primary)] inline-flex items-center justify-center"
            >
              <span className="material-symbols-outlined">room_service</span>
              {selectionCount > 0 && (
                <span className="absolute top-0 right-0 bg-[color:var(--primary)] text-white rounded-full min-w-4 h-4 px-1 text-[10px] flex items-center justify-center">
                  {selectionCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setPanel("account")}
              aria-label="Open account"
              className="min-w-11 min-h-11 text-[color:var(--primary)] inline-flex items-center justify-center"
            >
              <span className="material-symbols-outlined">{user ? "account_circle" : "login"}</span>
            </button>
            <button
              onClick={() => navigate({ to: "/reservations" })}
              className="hidden sm:inline-flex bg-[color:var(--primary)] text-white px-5 md:px-6 py-2.5 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.15em] hover:opacity-85 active:scale-95 transition-all shimmer"
            >
              Book a Table
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden text-[color:var(--primary)]"
            >
              <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-[color:var(--primary)]/15 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col px-5 py-4 gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[color:var(--on-surface)]/80 py-2"
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  navigate({ to: "/reservations" });
                }}
                className="sm:hidden bg-[color:var(--primary)] text-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.15em]"
              >
                Book a Table
              </button>
            </div>
          </div>
        )}
      </nav>
      <DemoPanels panel={panel} close={() => setPanel(null)} />
    </>
  );
}
