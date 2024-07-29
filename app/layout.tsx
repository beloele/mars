import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marsbahis - Güncel - Canlı Bahis, Spor Bahisleri ve Casino - Marsbahis Giriş",
  description: "Marsbahis, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar. Marsbahis, spor bahisleri ve casino oyunlarında eşsiz bir deneyim sunar.",
  keywords: "Marsbahis, canlı bahis, spor bahisleri, casino, yüksek oranlar, bonus, futbol bahisleri, basketbol bahisleri, tenis bahisleri",
  authors: [{ name: "Marsbahis", url: "https://marsbahis.netlify.app" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Marsbahis - Güncel - Canlı Bahis, Spor Bahisleri ve Casino - Marsbahis Giriş",
    description: "Marsbahis, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar.",
    url: "https://marsbahis.netlify.app",
    type: "website",
    images: [
      {
        url: "https://Marsbahis.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Marsbahis logo",
      },
    ],
    siteName: "Marsbahis",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Marsbahisguncels",
    creator: "@Marsbahisguncels",
    title: "Marsbahis - Güncel - Canlı Bahis, Spor Bahisleri ve Casino - Marsbahis Giriş",
    description: "Marsbahis, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar.",
    images: [
      {
        url: "https://marsbahis.netlify.app/logo.png",
        alt: "Marsbahis logo",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
