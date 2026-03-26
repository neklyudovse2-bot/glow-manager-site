"use client";

import Link from "next/link";
import { useState } from "react";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {/* top bar */}
      <nav className="border-b border-[#252525] bg-[rgba(13,13,13,0.95)] backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center px-5 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-[#999] hover:text-white transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-[800px] px-5 py-16">
        <h1 className="text-3xl font-bold">Delete Account</h1>
        <p className="mt-4 text-[#999] leading-relaxed">
          Enter your email address below to request account deletion. Once submitted, all your data (including clients, appointments, and portfolio) will be permanently deleted from our servers within 24 hours.
        </p>

        <section className="mt-10 rounded-2xl border border-[#252525] bg-[#181818] p-8">
          <h2 className="text-xl font-semibold mb-6">Request Deletion</h2>
          
          {status === "success" ? (
             <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
               <h3 className="text-green-400 font-semibold mb-2">Request Received</h3>
               <p className="text-sm text-[#999]">
                 Your account deletion request has been submitted. All data will be removed within 24 hours.
               </p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#999] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#252525] bg-[#0D0D0D] px-4 py-3 text-white placeholder-[#666] focus:border-[#E9C6FF] focus:outline-none focus:ring-1 focus:ring-[#E9C6FF] transition-all"
                  placeholder="name@example.com"
                  disabled={status === "loading"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="w-full rounded-xl bg-[#E9C6FF] px-4 py-3 font-semibold text-[#0D0D0D] transition-all duration-200 hover:opacity-90 disabled:opacity-50 flex justify-center items-center h-[52px]"
              >
                {status === "loading" ? (
                  <span className="w-5 h-5 border-2 border-[#0D0D0D]/30 border-t-[#0D0D0D] rounded-full animate-spin"></span>
                ) : (
                  "Delete My Account"
                )}
              </button>
              <p className="text-xs text-[#666] text-center mt-4">
                This action is irreversible. All data will be permanently removed.
              </p>
            </form>
          )}
        </section>

        {/* Support */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Need Help?</h2>
          <p className="mt-3 text-[#999] leading-relaxed">
            If you experience any issues deleting your account, please contact us at{" "}
            <a href="mailto:support@glowmanager.app" className="text-[#E9C6FF] underline hover:text-white transition-colors duration-200">
              support@glowmanager.app
            </a>
          </p>
        </section>
      </article>

      {/* footer */}
      <footer className="border-t border-[#252525] py-8">
        <div className="mx-auto flex max-w-[800px] justify-between px-5 text-sm text-[#999]">
          <Link href="/" className="hover:text-white transition-colors duration-200">← Back to Home</Link>
          <span>© 2026 Glow Manager</span>
        </div>
      </footer>
    </main>
  );
}
