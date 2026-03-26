import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Glow Manager",
};

const sections = [
  {
    title: "Introduction",
    body: `Glow Manager is a personal CRM application designed for beauty professionals — nail technicians, lash artists, brow specialists, barbers and cosmetologists. This Privacy Policy explains what data we collect, how we use it and what rights you have.`,
  },
  {
    title: "Data We Collect",
    body: `All data you enter into the app — clients, appointments, income records, portfolio photos and profile settings — is stored locally on your device.\n\nWe do NOT collect names, email addresses or phone numbers of our users. We do NOT sell, share or transfer any data to third parties.`,
  },
  {
    title: "Use of Data",
    body: `Your data is used solely for the operation of the application — managing clients, scheduling and tracking revenue. Any analytics we may use are fully anonymous and contain no personal information.`,
  },
  {
    title: "Data Storage",
    body: `All data is stored locally on your device. We recommend that you back up your data regularly using your device's built-in backup tools or our export feature within the app.`,
  },
  {
    title: "Security",
    body: `Your data never leaves your device. We rely on the standard security mechanisms provided by your operating system (iOS / Android) to protect your information.`,
  },
  {
    title: "Data Deletion",
    body: `You can delete your data at any time through the app's settings or by uninstalling the application. For details, see our Account Deletion page.`,
  },
  {
    title: "Children",
    body: `Glow Manager is not intended for children under the age of 13. We do not knowingly collect data from children.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of any material changes through the application.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact us at support@glowmanager.app`,
  },
];

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[#999]">Effective date: March 2026</p>

        {sections.map((s) => (
          <section key={s.title} className="mt-10">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            {s.body.split("\n\n").map((p, i) => (
              <p key={i} className="mt-3 text-[#999] leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
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
