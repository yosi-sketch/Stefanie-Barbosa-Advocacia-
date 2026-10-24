import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf7f8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stefaniebarbosa.adv.br"),
  title:
    "Stefanie Barbosa Advocacia Previdenciária | Aposentadorias & Benefícios INSS · Jacutinga - MG",
  description:
    "⚖️ Dra. Stefanie Barbosa (OAB/MG 184.682) — Advogada Especialista em Direito Previdenciário em Jacutinga - MG. Conquiste sua Aposentadoria, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Planejamento Previdenciário com segurança e rapidez. Avaliação 4,8 ★ com 12 avaliações no Google. 📍 R. das Acácias, 267 - Jacutinga, MG.",
  keywords: [
    "Stefanie Barbosa Advogada",
    "Stefanie Barbosa Advocacia Previdenciária",
    "Advogada Previdenciária Jacutinga",
    "Advogada Jacutinga MG",
    "Advogado em Jacutinga Minas Gerais",
    "Aposentadoria Jacutinga MG",
    "Aposentadoria por Idade Jacutinga",
    "Aposentadoria Especial INSS",
    "BPC LOAS Jacutinga",
    "Auxílio Doença Jacutinga",
    "Pensão por Morte INSS",
    "Planejamento Previdenciário Sul de Minas",
    "Revisão de Benefício INSS",
    "OAB MG 184682",
    "Advocacia Previdenciária Minas Gerais",
  ],
  authors: [{ name: "Dra. Stefanie Barbosa" }],
  creator: "Stefanie Barbosa Advocacia Previdenciária",
  publisher: "Stefanie Barbosa Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.stefaniebarbosa.adv.br",
    title:
      "Stefanie Barbosa Advocacia Previdenciária | Especialista em INSS · Jacutinga - MG",
    description:
      "⚖️ Advocacia previdenciária de excelência, transparência e rigor técnico em Jacutinga - MG e todo o Brasil. Defesa firme do seu direito à aposentadoria e benefícios do INSS. Avaliação 4,8 ★ no Google.",
    siteName: "Stefanie Barbosa Advocacia Previdenciária",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Stefanie Barbosa Advocacia Previdenciária — Dra. Stefanie Barbosa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Stefanie Barbosa Advocacia Previdenciária",
    alternateName: "Stefanie Barbosa — Advocacia e Consultoria",
    legalName: "Stefanie Barbosa Advocacia Previdenciária",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Stefanie Barbosa",
        jobTitle:
          "Advogada Especialista em Direito Previdenciário, Ciências Criminais e Família / OAB/MG 184.682",
      },
    ],
    telephone: "+55-35-99950-6434",
    email: "sb.advocacia@hotmail.com",
    url: "https://www.stefaniebarbosa.adv.br",
    image: "https://www.stefaniebarbosa.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. das Acácias, 267",
      addressLocality: "Jacutinga",
      addressRegion: "MG",
      postalCode: "37590-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.2858,
      longitude: -46.6111,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "12",
    },
    areaServed: [
      "Jacutinga",
      "Albertina",
      "Monte Sião",
      "Ouro Fino",
      "Andradas",
      "Sul de Minas Gerais",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sb.advogada",
      "https://wa.me/5535999506434",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#faf7f8] font-sans text-[#141316] antialiased selection:bg-[#f5d3d8] selection:text-[#26060e]">
        {children}
      </body>
    </html>
  );
}
