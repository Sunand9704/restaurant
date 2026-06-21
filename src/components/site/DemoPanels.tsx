import { Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { useDemoStore } from "@/lib/demo-store";

export type DemoPanel = "account" | "selection" | null;

export function DemoPanels({ panel, close }: { panel: DemoPanel; close: () => void }) {
  if (panel === "account") return <AccountModal close={close} />;
  if (panel === "selection") return <SelectionModal close={close} />;
  return null;
}

function Modal({
  title,
  close,
  children,
}: {
  title: string;
  close: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/55 p-4 flex items-end sm:items-center justify-center"
      onMouseDown={close}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="bg-background w-full max-w-md max-h-[85svh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[color:var(--primary)]/30"
      >
        <div className="flex justify-between items-center gap-4 mb-6">
          <h2 className="font-display text-3xl text-[color:var(--primary)]">{title}</h2>
          <button onClick={close} aria-label="Close" className="min-w-11 min-h-11">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

function AccountModal({ close }: { close: () => void }) {
  const { user, signIn, signOut } = useDemoStore();
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (name.length < 2 || !email.includes("@"))
      return setError("Enter a valid name and email address.");
    signIn({ name, email });
  };
  return (
    <Modal title={user ? "Your Account" : "Guest Sign In"} close={close}>
      {user ? (
        <div className="space-y-5">
          <p className="text-[color:var(--on-surface-variant)]">
            Signed in as <strong>{user.name}</strong>
            <br />
            {user.email}
          </p>
          <p className="text-sm text-[color:var(--outline)]">
            Demo account details are stored only in this browser.
          </p>
          <button
            onClick={() => {
              signOut();
              close();
            }}
            className="w-full py-3.5 border border-[color:var(--primary)] text-[color:var(--primary)] uppercase text-xs font-semibold tracking-widest"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-5">
          <p className="text-sm text-[color:var(--on-surface-variant)]">
            Use any valid details. No password or network request is required in demo mode.
          </p>
          <input name="name" autoFocus placeholder="Full name" className="demo-input" />
          <input name="email" type="email" placeholder="Email address" className="demo-input" />
          {error && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
          <button className="w-full py-4 bg-[color:var(--primary)] text-white uppercase text-xs font-semibold tracking-widest">
            Continue
          </button>
        </form>
      )}
    </Modal>
  );
}

function SelectionModal({ close }: { close: () => void }) {
  const { selection, changeQuantity, clearSelection } = useDemoStore();
  const [reference, setReference] = useState("");
  const total = selection.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = () => {
    setReference(`LM-${Date.now().toString().slice(-6)}`);
    clearSelection();
  };
  if (reference)
    return (
      <Modal title="Order Received" close={close}>
        <div className="text-center space-y-4 py-5">
          <span className="material-symbols-outlined text-6xl text-[color:var(--primary)]">
            check_circle
          </span>
          <p>
            Your demo kitchen order <strong>{reference}</strong> has been placed.
          </p>
          <button
            onClick={close}
            className="w-full py-3.5 bg-[color:var(--primary)] text-white uppercase text-xs font-semibold tracking-widest"
          >
            Done
          </button>
        </div>
      </Modal>
    );
  return (
    <Modal title="Your Selection" close={close}>
      {selection.length === 0 ? (
        <div className="text-center py-8">
          <span className="material-symbols-outlined text-5xl text-[color:var(--primary)]/50">
            room_service
          </span>
          <p className="mt-3 text-[color:var(--on-surface-variant)]">
            Add dishes from the menu to start an order.
          </p>
          <Link
            to="/menu"
            onClick={close}
            className="inline-block mt-5 text-[color:var(--primary)] border-b border-current"
          >
            Explore the menu
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {selection.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 border-b pb-4">
              <div className="min-w-0">
                <h3 className="font-display text-lg truncate">{item.name}</h3>
                <p className="text-sm text-[color:var(--primary)]">${item.price * item.quantity}</p>
              </div>
              <div className="flex items-center border">
                <button onClick={() => changeQuantity(item.name, -1)} className="w-10 h-10">
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button onClick={() => changeQuantity(item.name, 1)} className="w-10 h-10">
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-display text-xl">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <p className="text-xs text-[color:var(--outline)]">
            Demo checkout only. No payment is collected.
          </p>
          <button
            onClick={order}
            className="w-full py-4 bg-[color:var(--primary)] text-white uppercase text-xs font-semibold tracking-widest"
          >
            Place Demo Order
          </button>
        </div>
      )}
    </Modal>
  );
}
