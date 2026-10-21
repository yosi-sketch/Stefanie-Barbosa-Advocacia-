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
  themeColor: "#faf8f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.franciellegoncalves.adv.br"),
  title:
    "Francielle Gonçalves | Advogada de Família & Sucessões · Patos de Minas - MG",
  description:
    "⚖️ Dra. Francielle Gonçalves Barbosa — Advogada especialista em Direito de Família, Divórcio, Partilha de Bens, Guarda, Pensão Alimentícia e Inventários em Patos de Minas - MG. Criadora do Método S.E.G.U.R.A. Nota máxima de 5,0 ★ com 13 avaliações no Google. 📍 R. Lagamar, 98 - Copacabana, Patos de Minas - MG.",
  keywords: [
    "Francielle Gonçalves Advogada",
    "Francielle Gonçalves Barbosa",
    "Barbosa Advocacia e Consultoria",
    "Advogada de Família Patos de Minas",
    "Advogada Patos de Minas MG",
    "Advocacia Patos de Minas",
    "Divórcio em Patos de Minas",
    "Pensão Alimentícia Patos de Minas",
    "Guarda de Filhos Patos de Minas",
    "Inventário em Cartório Patos de Minas",
    "Inventário Judicial Patos de Minas",
    "Partilha de Bens Divórcio",
    "Método SEGURA Advocacia",
    "Proteção Patrimonial Mulheres",
    "Advogada Direito de Família Minas Gerais",
  ],
  authors: [{ name: "Dra. Francielle Gonçalves Barbosa" }],
  creator: "Barbosa Advocacia e Consultoria",
  publisher: "Francielle Gonçalves Advocacia",
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
    url: "https://www.franciellegoncalves.adv.br",
    title:
      "Francielle Gonçalves | Advogada de Família & Sucessões · Patos de Minas - MG",
    description:
      "⚖️ Advocacia de excelência, acolhimento humano e rigor técnico em Patos de Minas - MG. Protegendo mulheres e seu patrimônio com o Método S.E.G.U.R.A. Avaliação máxima de 5,0 ★ no Google.",
    siteName: "Barbosa Advocacia e Consultoria",
    images: [
      {
        url: "/logo-barbosa-gold.png",
        width: 1024,
        height: 341,
        alt: "Barbosa Advocacia e Consultoria — Dra. Francielle Gonçalves",
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
    name: "Francielle Gonçalves | Advogada",
    alternateName: "Barbosa Advocacia e Consultoria — Dra. Francielle Gonçalves Barbosa",
    legalName: "Barbosa Advocacia e Consultoria",
    founder: [
      {
        "@type": "Person",
        name: "Dra. Francielle Gonçalves Barbosa",
        jobTitle:
          "Advogada Especialista em Direito de Família, Sucessões e Proteção Patrimonial",
      },
    ],
    telephone: "+55-34-99290-6297",
    email: "contato@franciellegoncalves.adv.br",
    url: "https://www.franciellegoncalves.adv.br",
    image: "https://www.franciellegoncalves.adv.br/logo-barbosa-gold.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Lagamar, 98 - Copacabana",
      addressLocality: "Patos de Minas",
      addressRegion: "MG",
      postalCode: "38701-184",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.5789,
      longitude: -46.5181,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
    },
    areaServed: [
      "Patos de Minas",
      "Presidente Olegário",
      "Lagoa Formosa",
      "Carmo do Paranaíba",
      "Guimarânia",
      "Alto Paranaíba",
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
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/franciellegoncalves.adv",
      "https://wa.me/message/74EKQ3CEL5UQH1",
      "https://wa.me/5534992906297",
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
      <body className="min-h-screen overflow-x-clip bg-[#faf8f5] font-sans text-[#14110e] antialiased selection:bg-[#f7e5a9] selection:text-[#14110e]">
        {children}
      </body>
    </html>
  );
}
