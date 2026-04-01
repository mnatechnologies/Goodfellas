import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goodfellas Barber | Premium Men's Haircuts Sydney",
  description:
    "Premium men's barbershop with 15+ locations across Sydney. Expert barbers with 21 years of experience. Visit Goodfellas Barber today.",
  keywords: ["barber", "haircut", "men's grooming", "Sydney", "Goodfellas"],
  authors: [{ name: "Goodfellas Barber" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a2e1a" />
        <link rel="icon" href="/assets/gb-favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
