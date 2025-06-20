import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import DraftModeToast from "@/app/components/DraftModeToast";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "AI Founder Hour",
  description: "Learn about AI and entrepreneurship",
  icons: {
    icon: "/arrow-icon.png",
    shortcut: "/arrow-icon.png",
    apple: "/arrow-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} scroll-smooth`}>
      <body className={`${archivo.className} antialiased font-sans`}>
        <main>
          {children}
        </main>
        <DraftModeToast />
        <SpeedInsights />
      </body>
    </html>
  );
}
