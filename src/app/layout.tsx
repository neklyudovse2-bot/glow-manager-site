import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Manager: Smart Cash CRM",
  description:
    "Glow Manager helps nail, lash, brow and barber professionals manage clients, appointments and income. All in one app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
