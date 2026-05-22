import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "ScrollTask | Turn Doomscrolling into Progress",
  description: "ScrollTask interrupts endless scrolling and turns it into tiny, AI-generated goal-based tasks that move you toward your goals. Willpower alone fails, ScrollTask works.",
  keywords: [
    "ScrollTask",
    "doomscrolling",
    "screen time blocker",
    "productivity app",
    "AI coach",
    "habit builder",
    "stay focused",
    "self control"
  ],
  authors: [{ name: "ScrollTask team" }],
  openGraph: {
    title: "ScrollTask | Turn Doomscrolling into Progress",
    description: "ScrollTask interrupts endless scrolling and turns it into tiny, AI-generated goal-based tasks that move you toward your goals.",
    type: "website",
    locale: "en_US",
    url: "https://scrolltask.com",
    siteName: "ScrollTask",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScrollTask | Turn Doomscrolling into Progress",
    description: "AI-powered focus app that converts doomscrolling into small goal-based progress steps.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
