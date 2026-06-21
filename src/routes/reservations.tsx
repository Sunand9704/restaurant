import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations | LUMIÈRE" },
      {
        name: "description",
        content:
          "Secure your table at Lumière for an unparalleled journey through contemporary gastronomy.",
      },
      { property: "og:title", content: "Reservations | LUMIÈRE" },
      {
        property: "og:description",
        content:
          "Secure your table at Lumière for an unparalleled journey through contemporary gastronomy.",
      },
    ],
  }),
  component: ReservationsPage,
});

const BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCP4Prfr3JslpjNN73A_Y-jmx3pfHeO8q2dhSADlzGrd0h_k-bxXLTc0mhu_bv5_fPnk3KlQM9q64IHyBHQ5oROEBB8F7AXhDPLk1KBFXNs8TYe0KROKUGDGM5v_Vv3AgpzapkIVdNWXsrXwQb4dM_Xhccs2xDJVKjG3q67BOfL3Khi7Wn1zAljAgpQ_8rcuQ2GLrBn6j4oNS5-oDbpvf_Pxwns8r7RxmxpwSpI0WZWZ_oWrGL2tNev-LPlyo61h1rCRon_Dr860jOJ";

const TIMES = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

const toDateInput = (date: Date) => date.toISOString().slice(0, 10);
const today = new Date();
const LAST_BOOKING_DATE = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());

function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(
    toDateInput(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)),
  );
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [done, setDone] = useState(false);
  const [reference, setReference] = useState("");
  const [formError, setFormError] = useState("");
  const formattedDate = new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingReference = `LR-${Date.now().toString().slice(-7)}`;
    const booking = { reference: bookingReference, date, time, guests, ...form };
    const existing = JSON.parse(window.localStorage.getItem("lumiere-reservations") || "[]");
    window.localStorage.setItem("lumiere-reservations", JSON.stringify([...existing, booking]));
    setReference(bookingReference);
    setDone(true);
  };

  const preview = () => {
    if (form.name.trim().length < 2 || !form.email.includes("@") || form.phone.trim().length < 7) {
      setFormError("Please enter a valid name, email and phone number.");
      return;
    }
    setFormError("");
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-background text-[color:var(--on-surface)]">
      <Nav />
      <main className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-12 px-5 md:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background z-10" />
          <div className="absolute inset-0 bg-background/55 z-10" />
          <div
            className="w-full h-full bg-cover bg-center scale-105"
            style={{ backgroundImage: `url('${BG}')` }}
          />
        </div>
        <div className="relative z-20 w-full max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[color:var(--primary)] mb-3 md:mb-4">
              The Art of Dining
            </h1>
            <p className="text-base md:text-lg text-[color:var(--on-surface-variant)] max-w-lg mx-auto">
              Secure your table for an unparalleled journey through contemporary gastronomy.
            </p>
          </div>

          <div className="bg-[color:var(--surface-container-lowest)]/85 backdrop-blur-xl p-6 md:p-12 shadow-2xl border border-[color:var(--outline-variant)]/30">
            {done ? (
              <div className="text-center py-10 space-y-4">
                <span className="material-symbols-outlined text-[color:var(--primary)] text-6xl">
                  check_circle
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-[color:var(--primary)]">
                  Reservation Received
                </h2>
                <p className="text-[color:var(--on-surface-variant)] max-w-md mx-auto">
                  Thank you, {form.name || "guest"}. Your demo table for {guests} on {formattedDate}{" "}
                  at {time} is saved in this browser.
                </p>
                <p className="font-semibold text-[color:var(--primary)]">Reference: {reference}</p>
                <button
                  onClick={() => {
                    setDone(false);
                    setStep(1);
                    setForm({ name: "", email: "", phone: "", notes: "" });
                  }}
                  className="mt-4 border border-[color:var(--primary)] text-[color:var(--primary)] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-[color:var(--primary)]/10"
                >
                  New Reservation
                </button>
              </div>
            ) : (
              <>
                {/* Progress */}
                <div className="flex justify-between items-center mb-10 md:mb-12 relative">
                  <div className="absolute top-5 left-0 w-full h-px bg-[color:var(--outline-variant)]/40 -z-10" />
                  <div
                    className="absolute top-5 left-0 h-px bg-[color:var(--primary)] transition-all duration-500 -z-10"
                    style={{ width: `${step === 1 ? 0 : step === 2 ? 50 : 100}%` }}
                  />
                  {[
                    { n: 1, label: "Time & Date", icon: "event" },
                    { n: 2, label: "Guest Detail", icon: "groups" },
                    { n: 3, label: "Confirmation", icon: "check_circle" },
                  ].map((s) => (
                    <button
                      key={s.n}
                      type="button"
                      onClick={() => s.n < step && setStep(s.n)}
                      className="flex flex-col items-center gap-2"
                      aria-current={step === s.n ? "step" : undefined}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${step >= s.n ? "bg-[color:var(--primary)] text-white shadow" : "bg-[color:var(--surface-container-high)] border border-[color:var(--outline-variant)] text-[color:var(--on-surface-variant)]"}`}
                      >
                        <span className="material-symbols-outlined text-base">{s.icon}</span>
                      </div>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-tight ${step >= s.n ? "text-[color:var(--primary)]" : "text-[color:var(--on-surface-variant)]"}`}
                      >
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>

                <form onSubmit={submit}>
                  {step === 1 && (
                    <div className="space-y-8 md:space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] block mb-3">
                            Select Date
                          </label>
                          <div className="bg-[color:var(--surface-container-low)] p-4 border border-[color:var(--outline-variant)]/50">
                            <input
                              type="date"
                              required
                              min={toDateInput(today)}
                              max={toDateInput(LAST_BOOKING_DATE)}
                              value={date}
                              onChange={(event) => setDate(event.target.value)}
                              className="w-full min-h-12 bg-transparent border-b border-[color:var(--primary)] px-2 text-base outline-none"
                            />
                            <p className="mt-3 text-sm text-[color:var(--on-surface-variant)]">
                              Selected: {formattedDate}
                            </p>
                          </div>
                        </div>
                        <div>
                          <label className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] block mb-3">
                            Select Time
                          </label>
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            {TIMES.map((t) => (
                              <button
                                type="button"
                                key={t}
                                onClick={() => setTime(t)}
                                className={`py-3 px-4 text-sm border transition-all ${t === time ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-white font-semibold" : "border-[color:var(--outline-variant)]/60 text-[color:var(--on-surface-variant)] hover:border-[color:var(--primary)]"}`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] block mb-3">
                          Guests
                        </label>
                        <div className="flex gap-3 md:gap-4">
                          <button
                            type="button"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                            className="w-12 h-12 flex items-center justify-center border border-[color:var(--outline-variant)]/60 text-[color:var(--primary)] hover:bg-[color:var(--primary)]/10"
                          >
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <div className="flex-1 border border-[color:var(--outline-variant)]/60 flex items-center justify-center font-display text-2xl text-[color:var(--primary)] bg-[color:var(--surface-container-lowest)]">
                            {guests}
                          </div>
                          <button
                            type="button"
                            onClick={() => setGuests(Math.min(12, guests + 1))}
                            className="w-12 h-12 flex items-center justify-center border border-[color:var(--outline-variant)]/60 text-[color:var(--primary)] hover:bg-[color:var(--primary)]/10"
                          >
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full sm:w-auto bg-[color:var(--primary)] text-white px-10 md:px-12 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] shadow-md shimmer"
                        >
                          Next Details
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8 md:space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                          {[
                            {
                              key: "name",
                              label: "Full Name",
                              type: "text",
                              placeholder: "ALEXANDER VANCE",
                            },
                            {
                              key: "email",
                              label: "Email Address",
                              type: "email",
                              placeholder: "vance@lumiere.com",
                            },
                            {
                              key: "phone",
                              label: "Phone Number",
                              type: "tel",
                              placeholder: "+1 (555) 000-0000",
                            },
                          ].map((f) => (
                            <div key={f.key}>
                              <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--outline)] mb-2 block">
                                {f.label}
                              </label>
                              <input
                                required
                                value={form[f.key as keyof typeof form]}
                                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                                type={f.type}
                                placeholder={f.placeholder}
                                className="w-full bg-transparent border-b border-[color:var(--outline-variant)] focus:border-[color:var(--primary)] outline-none py-2 text-[color:var(--on-surface)] placeholder:text-[color:var(--outline)]/40 uppercase tracking-widest"
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--outline)] mb-2 block">
                            Special Requests
                          </label>
                          <textarea
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                            rows={8}
                            placeholder="Tell us about your preferences..."
                            className="w-full bg-[color:var(--surface-container-low)] border border-[color:var(--outline-variant)]/60 focus:border-[color:var(--primary)] outline-none p-4 text-sm resize-none"
                          />
                        </div>
                      </div>
                      {formError && (
                        <p role="alert" className="text-sm text-red-700">
                          {formError}
                        </p>
                      )}
                      <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-[color:var(--outline)] hover:text-[color:var(--primary)] text-[12px] font-semibold uppercase tracking-[0.2em] flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                        <button
                          type="button"
                          onClick={preview}
                          className="bg-[color:var(--primary)] text-white px-10 md:px-12 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] shadow-md shimmer"
                        >
                          Preview Booking
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8 md:space-y-10">
                      <div className="border border-[color:var(--primary)]/25 bg-[color:var(--primary)]/5 p-6 md:p-8">
                        <h3 className="font-display text-2xl md:text-3xl text-[color:var(--primary)] mb-6 md:mb-8 border-b border-[color:var(--primary)]/15 pb-4">
                          Reservation Summary
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
                          <Field label="Date" value={formattedDate} />
                          <Field label="Time" value={time} />
                          <Field label="Guests" value={`${guests} People`} />
                          <Field label="Name" value={form.name || "—"} />
                        </div>
                        <div className="pt-4 border-t border-[color:var(--primary)]/15">
                          <p className="text-[10px] uppercase text-[color:var(--outline)] mb-1 tracking-[0.2em]">
                            Special Instruction
                          </p>
                          <p className="italic text-[color:var(--on-surface-variant)]">
                            {form.notes || "—"}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="text-[color:var(--outline)] hover:text-[color:var(--primary)] text-[12px] font-semibold uppercase tracking-[0.2em] flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-sm">arrow_back</span> Edit
                        </button>
                        <button
                          type="submit"
                          className="bg-[color:var(--primary)] text-white px-12 md:px-16 py-5 text-[12px] font-semibold uppercase tracking-[0.25em] shadow-lg shimmer"
                        >
                          Confirm Reservation
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          <p className="text-center mt-10 md:mt-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--outline)]/70 max-w-lg mx-auto leading-relaxed">
            Cancellations must be made 24 hours in advance. No-shows are subject to a nominal fee.
            Smart-elegant dress code strictly enforced.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase text-[color:var(--outline)] mb-1 tracking-[0.2em]">
        {label}
      </p>
      <p className="text-[color:var(--on-surface)]">{value}</p>
    </div>
  );
}
