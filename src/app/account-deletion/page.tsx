import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion — Glow Manager",
};

export default function AccountDeletionPage() {
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
        <h1 className="text-3xl font-bold">Account Deletion</h1>

        {/* Instructions */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">How to Delete Your Account</h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-[#999] leading-relaxed">
            <li>Open the Glow Manager app.</li>
            <li>Go to <strong className="text-white">Settings</strong> (gear icon).</li>
            <li>Tap <strong className="text-white">&ldquo;Delete Account&rdquo;</strong>.</li>
            <li>Confirm the deletion.</li>
          </ol>
        </section>

        {/* What gets deleted */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">What Will Be Deleted</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#999] leading-relaxed">
            <li>All your clients and their data</li>
            <li>Appointment history</li>
            <li>Financial records</li>
            <li>Portfolio photos</li>
            <li>Profile settings</li>
          </ul>
        </section>

        {/* Important notes */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Please Note</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#999] leading-relaxed">
            <li><strong className="text-white">Deletion is irreversible.</strong> Once confirmed, your data cannot be recovered.</li>
            <li>We recommend exporting your data before deleting your account.</li>
            <li>Deletion takes effect immediately.</li>
          </ul>
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
