import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QuoteModalProvider } from "@/components/QuoteModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Samatha Green Energy Solutions",
  description:
    "Customized solar solutions and expert energy consultation for a cleaner, smarter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
