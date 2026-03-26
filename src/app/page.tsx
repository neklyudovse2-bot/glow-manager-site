"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Phone mockup ─── */
function PhoneFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      <div
        className="w-[240px] rounded-[20px] border border-[#252525] bg-[#181818] p-4"
        style={{ scrollSnapAlign: "center" }}
      >
        {children}
      </div>
      <span className="text-sm text-[#999]">{label}</span>
    </div>
  );
}

/* ─── Bars inside phone frames ─── */
function UiBars({ count = 4 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-5 pt-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-2 rounded bg-[#252525]"
          style={{ width: i === 0 ? "70%" : i === count - 1 ? "55%" : "80%" }}
        />
      ))}
    </div>
  );
}

/* ─── Feature card ─── */
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-[#252525] bg-[#181818] p-7 transition-colors duration-200 hover:border-[#333]">
      <span className="text-2xl">{icon}</span>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[#999]">{desc}</p>
    </div>
  );
}

/* ─── Stats bar ─── */
function StatsBar() {
  const stats = [
    { num: "5+", label: "Service Categories" },
    { num: "∞", label: "Clients in Database" },
    { num: "24/7", label: "Access to Your Data" },
    { num: "Free", label: "Starter Plan" },
  ];
  return (
    <section className="bg-[#141414] py-12">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-y-10 px-5 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="text-4xl font-bold text-[#E9C6FF]">{s.num}</span>
            <span className="text-sm text-[#999]">{s.label}</span>
            {/* vertical divider on desktop */}
            {i < 3 && (
              <span className="pointer-events-none absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#252525] md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════ */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {/* ───── NAVBAR ───── */}
      <nav className="sticky top-0 z-50 border-b border-[#252525] bg-[rgba(13,13,13,0.95)] backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E9C6FF]">
              <span className="text-xs font-bold text-[#0D0D0D]">G</span>
            </span>
            <span className="font-semibold">Glow Manager</span>
          </Link>

          {/* desktop links */}
          <div className="hidden items-center gap-8 text-sm text-[#999] md:flex">
            <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
            <a href="#screenshots" className="hover:text-white transition-colors duration-200">Screenshots</a>
            <a href="#download" className="hover:text-white transition-colors duration-200">Download</a>
          </div>

          {/* hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-[#252525] px-5 py-4 text-sm text-[#999] md:hidden">
            <a href="#features" className="hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#screenshots" className="hover:text-white" onClick={() => setMenuOpen(false)}>Screenshots</a>
            <a href="#download" className="hover:text-white" onClick={() => setMenuOpen(false)}>Download</a>
          </div>
        )}
      </nav>

      {/* ───── HERO ───── */}
      <section className="flex min-h-[90vh] items-center">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 px-5 py-20 md:flex-row md:justify-between">
          {/* left */}
          <div className="max-w-lg text-center md:text-left">
            <span className="inline-block rounded-full border border-[#252525] bg-[#252525] px-4 py-1.5 text-sm text-[#E9C6FF]">
              ✨ CRM for Beauty Professionals
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Your Business Under Control
            </h1>
            <p className="mt-4 text-lg text-[#999]">
              Glow Manager helps nail, lash, brow and barber professionals manage
              clients, appointments and income. All in one app.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#"
                className="rounded-lg bg-[#E9C6FF] px-6 py-3 text-sm font-semibold text-[#0D0D0D] transition-opacity duration-200 hover:opacity-90"
              >
                App Store
              </a>
              <a
                href="#"
                className="rounded-lg bg-[#E9C6FF] px-6 py-3 text-sm font-semibold text-[#0D0D0D] transition-opacity duration-200 hover:opacity-90"
              >
                Google Play
              </a>
            </div>
          </div>

          {/* right: phone mockup */}
          <div className="w-[240px] rounded-[20px] border border-[#252525] bg-[#181818] p-4">
            <div className="mt-5 h-2 w-4/5 rounded bg-[#252525]" />
            <div className="mt-5 h-2 w-4/5 rounded bg-[#252525]" />
            <div className="mt-5 h-2 w-4/5 rounded bg-[#252525]" />
          </div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <StatsBar />

      {/* ───── SCREENSHOTS ───── */}
      <section id="screenshots" className="py-20">
        <div className="mx-auto max-w-[1120px] px-5 text-center">
          <h2 className="text-3xl font-bold">App Screenshots</h2>
          <p className="mt-2 text-[#999]">
            Take a look inside Glow Manager
          </p>
        </div>
        <div
          className="mx-auto mt-12 flex max-w-[1120px] gap-6 overflow-x-auto px-5 pb-4"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {["Main", "Profile", "Appointments", "Client", "Portfolio", "Income", "Settings"].map(
            (label) => (
              <PhoneFrame key={label} label={label}>
                <UiBars count={label === "Appointments" ? 4 : 3} />
              </PhoneFrame>
            )
          )}
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-[1120px] px-5 text-center">
          <h2 className="text-3xl font-bold">Everything a Professional Needs</h2>
          <p className="mt-2 text-[#999]">
            Forget notebooks and Excel — manage your business from your phone
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon="👥" title="Client CRM" desc="Client cards with phone numbers, visit history and notes." />
            <FeatureCard icon="📅" title="Online Booking" desc="Calendar with scheduling. Create appointments in just a few taps." />
            <FeatureCard icon="💰" title="Income Tracking" desc="Stats by day, week and month. Visual charts for your revenue." />
            <FeatureCard icon="📸" title="Portfolio" desc="Before &amp; after photos. Attract clients with your results." />
            <FeatureCard icon="💅" title="Service Categories" desc="Nails, Lashes, Brows, Barber — all in one place." />
            <FeatureCard icon="🔔" title="Reminders" desc="Push notifications for appointments. Clients never miss a visit." />
          </div>
        </div>
      </section>

      {/* ───── HOW TO START ───── */}
      <section className="py-20">
        <div className="mx-auto max-w-[1120px] px-5 text-center">
          <h2 className="text-3xl font-bold">How to Get Started</h2>
        </div>
        <div className="mx-auto mt-12 max-w-[1120px] px-5">
          <div className="relative border-l border-[#252525] pl-10">
            {[
              {
                num: "1",
                title: "Download the App",
                desc: "Available on the App Store and Google Play.",
              },
              {
                num: "2",
                title: "Add Your Services",
                desc: "Set up categories, pricing and treatment durations.",
              },
              {
                num: "3",
                title: "Start Booking",
                desc: "Add clients and manage your schedule.",
              },
              {
                num: "4",
                title: "Watch Your Growth",
                desc: "Track revenue and business analytics.",
              },
            ].map((step) => (
              <div key={step.num} className="relative mb-10 last:mb-0">
                {/* dot */}
                <span className="absolute -left-[53px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#252525] bg-[#0D0D0D]">
                  <span className="h-2 w-2 rounded-full bg-[#E9C6FF]" />
                </span>
                <span className="text-5xl font-bold text-[#E9C6FF]">{step.num}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-[#999]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY GLOW MANAGER ───── */}
      <section className="py-20">
        <div className="mx-auto max-w-[1120px] px-5 text-center">
          <h2 className="text-3xl font-bold">Why Glow Manager</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon="⏱️" title="Save Time" desc="All client info on your phone. No more notebooks." />
            <FeatureCard icon="📈" title="Grow Revenue" desc="Analytics show what works. Optimise your pricing." />
            <FeatureCard icon="❤️" title="Client Loyalty" desc="Reminders mean fewer no-shows and more repeat visits." />
            <FeatureCard icon="☁️" title="Always With You" desc="Cloud sync. Access from any device, anytime." />
          </div>
        </div>
      </section>

      {/* ───── DOWNLOAD CTA ───── */}
      <section id="download" className="bg-[#E9C6FF] py-20">
        <div className="mx-auto max-w-[1120px] px-5 text-center">
          <h2 className="text-3xl font-bold text-[#0D0D0D]">Ready to Glow?</h2>
          <p className="mt-2 text-[#333]">
            Download the app and start managing your business today
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-lg bg-[#0D0D0D] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              App Store
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#0D0D0D] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-[#252525] py-8">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-4 px-5 text-sm text-[#999] md:flex-row md:justify-between">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E9C6FF]">
              <span className="text-xs font-bold text-[#0D0D0D]">G</span>
            </span>
            <span className="font-semibold">Glow Manager</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/account-deletion" className="hover:text-white transition-colors duration-200">Account Deletion</Link>
            <a href="mailto:support@glowmanager.app" className="hover:text-white transition-colors duration-200">Support</a>
          </div>
          <span>© 2026 Glow Manager</span>
        </div>
      </footer>
    </main>
  );
}
