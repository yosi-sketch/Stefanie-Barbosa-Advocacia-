"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  FileCheck2,
  HeartHandshake,
  Lock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5534992906297";
const PHONE_DISPLAY = "(34) 99290-6297";
const WHATSAPP_DIRECT_LINK = "https://wa.me/message/74EKQ3CEL5UQH1";
const EMAIL_CONTACT = "contato@franciellegoncalves.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/franciellegoncalves.adv";
const INSTAGRAM_HANDLE = "@franciellegoncalves.adv";

const ADDRESS_TEXT = "R. Lagamar, 98 - Copacabana, Patos de Minas - MG, 38701-184";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Francielle+Gon%C3%A7alves+%E2%80%94+Advogada+Patos+de+Minas+%C2%B7+MG";

const LOGO_FULL_SRC = "/logo-barbosa-gold.png";
const FOTO_HERO_SRC = "/francielle-portrait.png";
const FOTO_SOBRE_SRC = "/francielle-full.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Francielle Gonçalves! Gostaria de agendar uma consulta jurídica e tirar dúvidas sobre o meu caso.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "divorcio-partilha-bens",
    title: "Divórcio Humanizado & Partilha de Bens",
    icon: Scale,
    tag: "Consensual em Cartório · Litigioso · Partilha de Bens · Empresas & Imóveis",
    summary:
      "Condução estratégica e acolhedora de divórcios, priorizando acordos céleres em cartório e blindando seu patrimônio contra divisões injustas ou ocultações.",
    details:
      "O divórcio marca o encerramento de um ciclo e não precisa se transformar em uma guerra de desgaste emocional e prejuízo financeiro. A Dra. Francielle Gonçalves Barbosa atua com técnica apurada e sensibilidade para conduzir divórcios consensuais com rapidez diretamente em cartório ou ações contenciosas firmes perante o Poder Judiciário. Com olhar investigativo, identificamos manobras patrimoniais, blindamos cotas empresariais e asseguramos a partilha justa de cada conquista do casal.",
    topics: [
      "Divórcio consensual ágil em cartório (extrajudicial) com economia tributária e sigilo absoluto",
      "Divórcio contencioso estratégico com pedidos liminares urgentes de separação de corpos e afastamento do lar",
      "Partilha equilibrada de patrimônio complexo: imóveis urbanos e rurais, veículos, empresas e cotas societárias",
      "Bloqueio judicial preventivo de contas bancárias e investimentos para evitar dilapidação e ocultação de bens",
      "Reconhecimento e dissolução de união estável com resguardo patrimonial integral",
      "Arbitramento de aluguel em favor do cônjuge prejudicado pelo uso exclusivo do imóvel comum",
    ],
    whatsAppText:
      "Olá, Dra. Francielle! Gostaria de agendar uma consulta sobre divórcio e partilha de bens.",
  },
  {
    id: "guarda-filhos-convivencia",
    title: "Guarda dos Filhos & Regime de Convivência",
    icon: HeartHandshake,
    tag: "Guarda Compartilhada · Convivência Saudável · Proteção dos Filhos · Alienação Parental",
    summary:
      "Proteção irrestrita dos vínculos de afeto e do bem-estar dos filhos, estruturando planos de convivência harmoniosos e combatendo a alienação parental.",
    details:
      "Os filhos nunca devem ser instrumentos de disputa ou chantagem entre os genitores. A Dra. Francielle Gonçalves atua com olhar acolhedor e humanizado para defender o melhor interesse da criança ou adolescente, estabelecendo rotinas claras, definição equilibrada do lar de referência e regras transparentes de convivência em férias e datas comemorativas. Havendo situações de risco ou alienação parental, ingressamos com medidas judiciais imediatas.",
    topics: [
      "Regulamentação de guarda compartilhada com definição segura do lar de referência e rotinas saudáveis",
      "Elaboração de planos minuciosos de convivência para fins de semana, férias escolares, aniversários e feriados",
      "Ações judiciais de urgência para alteração de guarda em virtude de negligência, risco moral ou violência",
      "Combate enérgico a atos de alienação parental e restrições indevidas de contato com as crianças",
      "Autorização judicial para viagens internacionais ou mudança definitiva de cidade/estado",
      "Mediação preventiva para pacificação de divergências entre os pais e preservação da saúde emocional dos filhos",
    ],
    whatsAppText:
      "Olá, Dra. Francielle! Gostaria de uma avaliação jurídica sobre guarda dos meus filhos e regulamentação de convivência.",
  },
  {
    id: "pensao-alimenticia-execucao",
    title: "Pensão Alimentícia Justa & Cobrança Rápida",
    icon: ShieldCheck,
    tag: "Fixação Justa · Revisão Proporcional · Execução de Atrasados · Prisão & Penhora",
    summary:
      "Garantia do sustento digno e do padrão de vida dos seus filhos, com fixação realista e cobrança incisiva de pensões atrasadas por prisão civil ou penhora.",
    details:
      "A pensão alimentícia é um direito inegociável para garantir alimentação, educação, saúde e dignidade aos seus filhos. A Dra. Francielle analisa meticulosamente as reais necessidades das crianças e a capacidade financeira real do genitor — inclusive investigando sinais exteriores de riqueza em casos de renda oculta ou empresas em nome de terceiros. Atuamos também com extrema agilidade na cobrança de valores em atraso sob rito de prisão e bloqueio patrimonial.",
    topics: [
      "Ação de alimentos: fixação de pensão provisória imediata e definitiva conforme o padrão de vida real da família",
      "Execução de alimentos célere sob pena de prisão civil do devedor e penhora de veículos, contas e imóveis",
      "Investigação de sinais exteriores de riqueza em redes sociais e empresas para comprovação de renda informal",
      "Ação revisional de pensão alimentícia para majoração ou minoração diante de alterações financeiras comprovadas",
      "Fixação de alimentos gravídicos durante o período gestacional para assegurar assistência médica e parto",
      "Exoneração legítima de pensão alimentícia quando atingida a maturidade civil e independência financeira",
    ],
    whatsAppText:
      "Olá, Dra. Francielle! Gostaria de ajuda jurídica para fixar, revisar ou cobrar pensão alimentícia atrasada.",
  },
  {
    id: "inventario-cartorio-sucessoes",
    title: "Inventário Extrajudicial em Cartório & Judicial",
    icon: FileCheck2,
    tag: "Cartório Rápido em até 3 Meses · Economia de ITCD · Partilha Amigável · Desconto Tributário",
    summary:
      "Regularização e partilha ágil de heranças, reduzindo burocracias e economizando milhares de reais em impostos (ITCD) para que a família receba seus bens em paz.",
    details:
      "A perda de um familiar é um momento doloroso e não deve ser agravada por disputas ou inventários que se arrastam por anos nos tribunais. Com experiência comprovada — concluindo inventários em cartório em até 3 meses e conquistando descontos expressivos no imposto estadual (ITCD em Minas Gerais) —, a Dra. Francielle Gonçalves Barbosa conduz partilhas com extrema agilidade técnica, garantindo a cota legítima de cada herdeiro com segurança documental total.",
    topics: [
      "Inventário Extrajudicial em Cartório: procedimento célere finalizado em até 3 meses havendo consenso",
      "Planejamento fiscal estratégico com obtenção de descontos legítimos no imposto sobre herança (ITCD Minas Gerais)",
      "Inventário Judicial ágil para casos com herdeiros menores, testamento ou patrimônios complexos",
      "Expedição rápida de alvarás judiciais para levantamento de saldos em contas bancárias, FGTS e previdências",
      "Cessão formal de direitos hereditários, sobrepartilhas e regularização registral de imóveis herdados",
      "Mediação pacificadora entre herdeiros para eliminar atritos e viabilizar a divisão amigável do patrimônio",
    ],
    whatsAppText:
      "Olá, Dra. Francielle! Gostaria de uma avaliação para dar entrada em um inventário em cartório ou judicial.",
  },
  {
    id: "uniao-estavel-planejamento",
    title: "União Estável & Planejamento Familiar",
    icon: Users2,
    tag: "Pactos Antenupciais · Contratos de Convivência · Blindagem Patrimonial · Testamentos",
    summary:
      "Segurança jurídica preventiva para casais, estruturando pactos antenupciais, formalização de união estável e planejamento sucessório antecipado.",
    details:
      "Casais conscientes protegem sua relação e seu patrimônio antes que surjam divergências. Elaboramos pactos antenupciais personalizados, escrituras de união estável com escolha fundamentada do regime de bens mais vantajoso (comunhão parcial, separação total com pacto de aquestos) e contratos de namoro qualificados, além de estruturas de doação em vida com usufruto que evitam desgastes entre sucessores.",
    topics: [
      "Formalização e registro de união estável em cartório com cláusulas protetivas personalizadas",
      "Elaboração de pactos antenupciais estratégicos para proteção de patrimônio familiar e empresarial",
      "Contratos de namoro qualificados para prevenir reconhecimento indevido de união estável e partilha retroativa",
      "Planejamento sucessório antecipado: doação de imóveis em vida com cláusula de reserva de usufruto vitalício",
      "Elaboração e validação formal de testamentos públicos perante tabelião de notas",
      "Dissolução amigável de união estável com partilha clara e imediata de bens",
    ],
    whatsAppText:
      "Olá, Dra. Francielle! Gostaria de consultar sobre união estável, pacto antenupcial ou planejamento sucessório.",
  },
  {
    id: "violencia-patrimonial-segura",
    title: "Proteção Patrimonial da Mulher & Método S.E.G.U.R.A",
    icon: Lock,
    tag: "Método Exclusivo · Defesa das Mulheres · Bloqueio de Ocultação · Medidas Protetivas",
    summary:
      "Aplicação da metodologia exclusiva S.E.G.U.R.A para proteger mulheres contra abusos econômicos, desvios de patrimônio e fraudes conjugais.",
    details:
      "Muitas mulheres enfrentam abusos econômicos silenciosos durante o casamento ou no término da união: controle abusivo do dinheiro, empresas registradas em nome de parentes ou 'laranjas', esvaziamento premeditado de contas e ameaças veladas. Através do método exclusivo S.E.G.U.R.A, a Dra. Francielle atua com rapidez jurídica e medidas cautelares para quebrar blindagens fraudulentas, restituir a independência financeira e assegurar tudo o que a mulher construiu com sua dedicação.",
    topics: [
      "Aplicação de medidas protetivas judiciais urgentes contra a violência patrimonial e chantagens econômicas",
      "Investigação aprofundada de blindagens patrimoniais, laranjas e empresas ocultas para fins de partilha",
      "Desconsideração da personalidade jurídica para incluir bens da empresa do cônjuge na divisão do casal",
      "Garantia imediata de fixação de alimentos provisórios para manutenção da mulher e dos filhos",
      "Acolhimento jurídico humanizado, empático e totalmente confidencial do início ao fim do processo",
      "Reivindicação de indenizações compensatórias por perdas patrimoniais decorrentes de abusos na união",
    ],
    whatsAppText:
      "Olá, Dra. Francielle! Gostaria de uma avaliação confidencial sobre proteção patrimonial e o método S.E.G.U.R.A.",
  },
];

const clientReviews = [
  {
    name: "Indalecio Gonçalves",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Inventário em 3 Meses & Economia de R$ 4k",
    content:
      "Ela fez o inventário do meu pai e mãe em 2026, disse que ficaria pronto com 6 meses e finalizou tudo em 3 meses, fiquei muito satisfeito, ainda conseguiu 4 mil de desconto no imposto, sempre explicando tudo, muito educada e atenciosa Dra Francielle, só tenho agradecer a ela e sua equipe.",
  },
  {
    name: "Tatiana Jesus",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Divórcio Conduzido com Sucesso",
    content:
      "Uma excelente profissional, advogada de muita competência! Super indico! Trabalhou muito no meu processo de divórcio! Resultado positivo super indico Dra Francielle Gonçalves.",
  },
  {
    name: "Denise Martins Santos",
    reviewsCount: "3 avaliações no Google (5,0 ★)",
    badge: "Agilidade, Prazos & Total Confiança",
    content:
      "A Dra. Franciele é uma profissional extremamente competente, atenciosa e comprometida. Sempre foi muito clara nas orientações, cumpriu todos os prazos estabelecidos e conduziu tudo com agilidade e eficiência. Além de ser muito resolutiva, demonstra cuidado e atenção em cada atendimento, transmitindo segurança e confiança. Recomendo seu trabalho com certeza!",
  },
  {
    name: "Luciene Santos",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Guarda, Pensão & Regulamentação de Visitas",
    content:
      "Sempre indicarei a Dra Franciele Gonçalves, ela é uma pessoa dedicada com sua profissão e um carinho com o que faz, no meu caso foi guarda pensão alimentícia, regularizar das visitas. Sou muito grata com cada orientação e paciência que teve comigo.",
  },
  {
    name: "Marlei Teresinha",
    reviewsCount: "2 avaliações no Google (5,0 ★)",
    badge: "Pensão de Filho Resolvida Rápido",
    content:
      "Muito boa advogada, indiquei ela pra uma amiga pedir a pensão do seu filho, ela foi muito atenciosa, resolveu o caso dela muito rápido, indico de olhos fechados.",
  },
  {
    name: "Diuly Cruz",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Melhor Advogada de Família da Região",
    content:
      "Melhor advogada de família da região! Muito competente e dedicada.",
  },
  {
    name: "Marcela Leandro Ribeiro",
    reviewsCount: "3 avaliações no Google (5,0 ★)",
    badge: "Retorno Rápido & Disponibilidade",
    content:
      "Excelente profissional! Está sempre disponível para esclarecimentos, retorna rapidamente quando contactada.",
  },
  {
    name: "Junior Pereira",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Notável Saber Jurídico",
    content:
      "Excelente advogada, extremamente competente e com notável saber jurídico!",
  },
  {
    name: "Larissa Gonçalves",
    reviewsCount: "3 avaliações no Google (5,0 ★)",
    badge: "Paciente, Inteligente & Educada",
    content:
      "Excelente advogada. Super paciente, inteligente e sempre muito educada com os clientes.",
  },
  {
    name: "Lorrane Cristina",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Atenciosa & Muito Dedicada",
    content:
      "Excelente profissional! Muito atenciosa, competente e dedicada. Recomendo muito o trabalho dela.",
  },
  {
    name: "Victor Soares",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Recomendação 5 Estrelas",
    content:
      "Ótima advogada. Recomendo!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-[#14110e]" : "text-[#14110e]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#4c433a] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#faf8f5] text-[#14110e] selection:bg-[#f7e5a9] selection:text-[#14110e]">
        {/* Navigation Bar - Refined Light Luxury with Polished Gold Accents */}
        <header className="sticky top-0 z-40 border-b border-[#e8dfd2] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between gap-4 px-5 sm:h-[88px] sm:px-8 lg:h-[94px] lg:gap-6 lg:px-12">
            <a
              href="#inicio"
              aria-label="Barbosa Advocacia e Consultoria — Dra. Francielle Gonçalves"
              onClick={closeMenu}
              className="flex items-center transition-transform hover:scale-[1.01] shrink-0"
            >
              <div className="relative h-10 w-32 sm:h-12 sm:w-36 lg:h-[58px] lg:w-[176px] shrink-0">
                <Image
                  src={LOGO_FULL_SRC}
                  alt="Barbosa Advocacia e Consultoria — Dra. Francielle Gonçalves"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 176px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-5 xl:gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Dra. Francielle
              </a>
              <a className="nav-link" href="#metodo-segura">
                Método S.E.G.U.R.A
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Avaliações da Dra. Francielle Gonçalves no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title="5,0 ★ no Google (13 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Francielle Gonçalves"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE} (10,5k seguidores)`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Francielle Gonçalves Advogada"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Francielle Gonçalves"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#4c433a] transition-all hover:border-[#deb753] hover:bg-white hover:text-[#14110e] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Francielle! Gostaria de agendar uma consulta e receber orientação jurídica para o meu caso."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                Agendar Consulta <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#14110e] lg:hidden shadow-xs"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-[#e8dfd2] bg-white px-6 text-[#14110e] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Francielle", "#sobre"],
                    ["Método S.E.G.U.R.A", "#metodo-segura"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#4c433a] hover:text-[#8e6318]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#8e6318] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-105"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Francielle! Gostaria de falar sobre o meu caso e receber orientação jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8dfd2] bg-[#faf7f2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#14110e] transition-all hover:border-[#deb753]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (13 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Warm Ivory & Travertine Canvas with Polished Gold Lighting */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e8dfd2] bg-gradient-to-b from-white via-[#faf8f5] to-[#f4efe6]"
        >
          {/* Subtle warm gold ambient aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#deb753]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#c59a3f]/10 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#deb753]/40 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
                <span>FRANCIELLE GONÇALVES | ADVOGADA · PATOS DE MINAS - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-[#14110e] sm:text-5xl lg:text-[3.75rem]"
              >
                Proteção Jurídica Especializada para Mulheres, Famílias e Patrimônio:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#5a3c08]">
                  Atuação Estratégica, Humanizada e Resolutiva.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4c433a] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-[#14110e]">
                  Dra. Francielle Gonçalves Barbosa
                </strong>
                , advogada especialista em Direito de Família e Sucessões em Patos de Minas - MG e criadora do{" "}
                <strong className="font-semibold text-[#14110e]">
                  Método S.E.G.U.R.A
                </strong>
                . Atuação resolutiva em{" "}
                <strong className="font-semibold text-[#14110e]">
                  Divórcio, Partilha de Bens, Guarda, Pensão Alimentícia e Inventários Rápidos em Cartório
                </strong>
                , oferecendo orientação jurídica transparente, acolhimento empático e firmeza técnica para defender você e seus filhos.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Francielle! Gostaria de agendar uma consulta sobre Direito de Família / Divórcio / Pensão / Inventário."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Francielle
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e8dfd2] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#14110e] shadow-xs transition-all hover:border-[#deb753] hover:bg-[#faf7f2]"
                >
                  Conhecer Especialidades{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e8dfd2] pt-6 text-xs text-[#5c5042]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <Star size={15} className="fill-[#deb753] text-[#deb753]" /> 5,0 estrelas no Google (13 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-[#8e6318]" /> Método S.E.G.U.R.A
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#8e6318]" /> R. Lagamar, 98 · Copacabana · Patos de Minas
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <InstagramIcon size={15} className="text-[#8e6318]" /> {INSTAGRAM_HANDLE} (10,5k seguidores)
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Francielle Gonçalves Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-xl ring-1 ring-[#deb753]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Francielle Gonçalves Barbosa — Advogada em Patos de Minas - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#14110e] via-[#14110e]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Francielle Gonçalves Barbosa
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#deb753]">
                      Família · Divórcio · Guarda · Inventários
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#deb753]/40 bg-[#14110e]/85 text-[#f7e5a9] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#deb753]/40 bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#8e6318] shadow-md backdrop-blur-md sm:-left-5">
                PATOS DE MINAS - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#deb753]/40 bg-white/95 p-3.5 shadow-md backdrop-blur-md transition-all hover:border-[#8e6318] hover:bg-white sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={17} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#deb753]">
                      <Star size={13} className="fill-[#deb753] text-[#deb753]" />
                    </div>
                    <span className="font-serif text-base font-bold text-[#14110e]">
                      5,0
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8e6318]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#5c5042]">
                  13 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e8dfd2] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima com 13 avaliações autênticas destacando competência, agilidade e acolhimento",
              ],
              [
                "Método S.E.G.U.R.A",
                "metodologia exclusiva para proteger mulheres, filhos e patrimônio em divórcios e partilhas",
              ],
              [
                "Inventário Célere",
                "casos concluídos em até 3 meses em cartório e economia tributária de R$ 4 mil em impostos",
              ],
              [
                "Patos de Minas - MG",
                "sede acolhedora no bairro Copacabana e atendimento digital estruturado para todo o Brasil",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e8dfd2]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#8e6318] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5c5042]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Francielle Gonçalves Barbosa - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Francielle Full Portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl border-2 border-[#e8dfd2] bg-white shadow-2xl ring-1 ring-[#deb753]/20">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Francielle Gonçalves Barbosa — Advocacia e Consultoria"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#14110e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-xl font-medium">Dra. Francielle Gonçalves Barbosa</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#deb753]">Advogada de Família · Patos de Minas - MG</p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#deb753]/40 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#8e6318]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6318]">
                    Dedicação · Ética · Acolhimento
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#14110e]">
                  Dra. Francielle Gonçalves Barbosa
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8e6318]">
                  Especialista em Família · Método S.E.G.U.R.A
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#5c5042]">
                  R. Lagamar, 98 - Copacabana · Patos de Minas - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#deb753]/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#deb753]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
                <span>QUEM É A DRA. FRANCIELLE GONÇALVES</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#14110e] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia que acolhe, protege e resolve:{" "}
                <span className="italic text-[#8e6318]">
                  segurança real para a sua família e firmeza técnica para proteger seu patrimônio.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4c433a]"
              >
                Com sede no bairro Copacabana em{" "}
                <strong className="font-bold text-[#14110e]">
                  Patos de Minas - MG
                </strong>{" "}
                e atuação on-line em todo o Brasil, a Dra. Francielle Gonçalves Barbosa é referência em Direito de Família e Sucessões. Criadora do método{" "}
                <strong className="font-bold text-[#14110e]">
                  S.E.G.U.R.A
                </strong>
                , ela construiu uma carreira sólida pautada na proteção integral das mulheres, das crianças e do patrimônio construído com anos de dedicação.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4c433a]"
              >
                Reconhecida com nota máxima{" "}
                <strong className="font-bold text-[#14110e]">
                  5,0 ★ no Google Meu Negócio
                </strong>
                , seu trabalho se destaca pela clareza, empatia e velocidade. Em vez de jargões jurídicos confusos ou processos que se arrastam indefinidamente, ela oferece um acompanhamento próximo e transparente, explicando cada etapa com didática e buscando sempre a via mais rápida, econômica e segura para você.
              </motion.p>

              {/* Client Quote Card from real reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#14110e]">
                  &ldquo;Ela fez o inventário do meu pai e mãe em 2026, disse que ficaria pronto com 6 meses e finalizou tudo em 3 meses, fiquei muito satisfeito, ainda conseguiu 4 mil de desconto no imposto, sempre explicando tudo, muito educada e atenciosa Dra Francielle, só tenho agradecer a ela e sua equipe.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8e6318]">
                  — Indalecio Gonçalves · Avaliação Verificada no Google (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#14110e]">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    13 avaliações 100% positivas
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#14110e]">Método S.E.G.U.R.A</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Proteção de mulheres e patrimônio
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dfd2] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#14110e]">10,5k Seguidores</p>
                  <p className="mt-0.5 text-[11px] text-[#6b5d50]">
                    Autoridade digital no Instagram
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#14110e] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Sede na R. Lagamar, 98 - Copacabana · Patos de Minas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Inventários em cartório concluídos em tempo recorde</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Contato direto pelo WhatsApp, sem robôs ou intermediários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                  <span>Atendimento presencial em Minas Gerais e digital para o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Francielle! Gostaria de agendar uma consulta para conversar diretamente sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Francielle
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14110e] transition-colors hover:text-[#8e6318]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Seção Exclusiva: Método S.E.G.U.R.A */}
        <section
          id="metodo-segura"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-gradient-to-b from-[#f8f5ee] to-[#f4efe6] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="METODOLOGIA EXCLUSIVA"
                description="Como a Dra. Francielle Gonçalves protege mulheres, filhos e patrimônio através de uma abordagem estratégica desenvolvida na prática forense."
              >
                Conheça o Método{" "}
                <span className="italic text-[#8e6318]">
                  S.E.G.U.R.A
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Francielle! Gostaria de entender como o método S.E.G.U.R.A pode ser aplicado para proteger meu caso."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Consultar Meu Caso no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  letter: "S",
                  title: "Sensibilidade & Escuta Humanizada",
                  description:
                    "Acolhimento empático para ouvir seu relato sem julgamentos morais, compreendendo as nuances emocionais e as dores reais da sua família antes de qualquer medida processual.",
                },
                {
                  letter: "E",
                  title: "Estratégia Jurídica Blindada",
                  description:
                    "Investigação aprofundada de contas, imóveis, empresas e sinais exteriores de riqueza para impedir fraudes, dilapidação de patrimônio ou ocultação de ativos na partilha.",
                },
                {
                  letter: "G",
                  title: "Garantia dos Direitos dos Filhos",
                  description:
                    "Proteção integral das crianças e adolescentes: pensão alimentícia justa que condiz com o padrão de vida real e convivência saudável livre de alienação parental.",
                },
                {
                  letter: "U",
                  title: "Urgência & Celeridade Resolutiva",
                  description:
                    "Prioridade absoluta na busca por acordos céleres em cartório (divórcios e inventários) ou pedidos liminares imediatos na Justiça quando há risco ou desrespeito a direitos.",
                },
                {
                  letter: "R",
                  title: "Resolução Firme & Combate a Abusos",
                  description:
                    "Postura técnica intransigente contra a violência patrimonial, chantagens financeiras e tentativas de diminuir o papel da mulher na construção do patrimônio familiar.",
                },
                {
                  letter: "A",
                  title: "Acolhimento & Suporte Continuado",
                  description:
                    "Comunicação direta pelo WhatsApp com retorno ágil e sem 'juridiquês'. Você acompanha cada andamento com segurança, sabendo exatamente o que esperar.",
                },
              ].map((step) => (
                <article
                  key={step.letter}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#deb753] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#deb753]/40 bg-gradient-to-br from-[#f8f5ee] to-white font-serif text-2xl font-bold text-[#8e6318] shadow-xs">
                        {step.letter}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8e6318]">
                        MÉTODO S.E.G.U.R.A
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-[#14110e]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#4c433a]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e8dfd2] bg-[#f8f5ee] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="ÁREAS DE ESPECIALIZAÇÃO"
                description="Clique em cada especialidade para abrir os detalhes, demandas atendidas e tirar suas dúvidas diretamente pelo WhatsApp."
              >
                Atuação Jurídica{" "}
                <span className="italic text-[#8e6318]">
                  Especializada em Direito de Família e Sucessões.
                </span>
              </Heading>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_DIRECT_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#deb753]/40 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#8e6318] shadow-xs transition-all hover:border-[#8e6318] hover:bg-[#faf7f2]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp Oficial
                </a>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#deb753] hover:shadow-md sm:p-8"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="grid size-12 place-items-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] text-[#8e6318] shadow-xs transition-colors group-hover:border-[#deb753] group-hover:bg-white group-hover:text-[#14110e]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-md border border-[#deb753]/30 bg-[#f4efe6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#322003]">
                          Família & Sucessões
                        </span>
                      </div>

                      <h3 className="mt-6 font-serif text-2xl leading-tight text-[#14110e] transition-colors group-hover:text-[#8e6318]">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#8e6318]">
                        {area.tag}
                      </p>

                      <p className="mt-4 text-[13px] leading-relaxed text-[#4c433a]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-[#e8dfd2] pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8e6318] transition-colors hover:text-[#14110e] cursor-pointer"
                      >
                        Ver detalhes & pedidos <ArrowRight size={13} />
                      </button>
                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Consultar sobre ${area.title}`}
                        className="grid size-9 place-items-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] text-[#14110e] transition-colors hover:border-[#8e6318] hover:bg-[#8e6318] hover:text-white"
                        title="Tirar dúvidas no WhatsApp"
                      >
                        <WhatsAppIcon size={15} />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher a Dra. Francielle Gonçalves - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="Seu patrimônio, sua família e seus filhos são preciosos demais para ficarem em mãos desatentas ou presos em burocracias sem resposta."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#8e6318]">
                  Dra. Francielle Gonçalves Barbosa?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Francielle! Gostaria de uma avaliação para a minha situação jurídica familiar."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Comunicação Clara e Empática */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#deb753] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#deb753]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#322003]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Empático
                    </span>
                    <span className="text-xs font-semibold text-[#8e6318]">
                      Sem Juridiquês
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14110e] sm:text-[1.75rem]">
                    Você Entende Cada Passo do Seu Processo com Tranquilidade
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4c433a]">
                    Muitas pessoas chegam com receio da complexidade das leis ou medo de julgamentos morais. Aqui, a Dra. Francielle explica cada detalhe com paciência e didática, garantindo que você tenha plena ciência dos seus direitos e participe com confiança de cada decisão.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14110e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Explicação clara e acessível em linguagem que qualquer pessoa compreende</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Empatia profunda com as dores e ansiedades em momentos delicados da vida</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Transparência total sobre chances, riscos reais e prazos prováveis</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Francielle! Gostaria de tirar dúvidas sobre o meu caso em uma conversa sem burocracia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#deb753]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14110e] transition-all hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Francielle
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Agilidade e Soluções Extrajudiciais */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#deb753] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#deb753]/30 bg-[#f4efe6] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#322003]">
                      <Users2 size={14} /> Foco em Resultados & Celeridade
                    </span>
                    <span className="text-xs font-semibold text-[#8e6318]">
                      Cartório & Acordos Rápidos
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#14110e] sm:text-[1.75rem]">
                    Prioridade em Soluções Rápidas em Cartório Sem Demora Judicial
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4c433a]">
                    Sabemos que tempo é dinheiro e desgaste emocional. Sempre que os requisitos legais estão presentes, priorizamos inventários, divórcios e dissoluções de união estável em cartório, resolvendo partilhas em semanas com economia e paz.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#14110e]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Inventários extrajudiciais céleres concluídos em até 3 meses sem arrastar processos por anos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Acompanhamento direto pelo WhatsApp com retornos ágeis e esclarecimentos pontuais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e6318]" />
                      <span>Planejamento financeiro e tributário para reduzir custos com ITCD e taxas cartorárias</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dfd2] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Francielle! Gostaria de consultar sobre a possibilidade de um inventário ou divórcio rápido em cartório."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#deb753]/40 bg-[#faf7f2] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#14110e] transition-all hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Solução em Cartório no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#e8dfd2] bg-[#faf7f2] py-20 text-[#14110e] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#deb753]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#deb753]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, técnico e humanizado para analisar sua situação e aplicar a solução jurídica mais rápida e segura."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#8e6318]">
                  proteger seu patrimônio e defender seus filhos.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dfd2] bg-white p-6 font-serif text-base italic leading-7 text-[#14110e] shadow-xs">
                &ldquo;Cada caso envolve vidas, famílias e expectativas reais. Meu compromisso é garantir que você se sinta acolhida e segura, sabendo que sua causa está sendo cuidada com o máximo rigor técnico e atenção pessoal.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#8e6318]">
                  — Dra. Francielle Gonçalves Barbosa · Advogada
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e8dfd2]"
            >
              {[
                [
                  "01",
                  "Escuta Atenta & Diagnóstico Documental",
                  "Conversa inicial presencial no escritório em Patos de Minas ou via WhatsApp para compreender a fundo seu relato, recolher os documentos necessários e avaliar detalhadamente os fatos.",
                ],
                [
                  "02",
                  "Definição da Estratégia Mais Rápida e Econômica",
                  "Análise minuciosa para verificar se a causa pode ser resolvida de maneira extrajudicial (acordo ou cartório) com menor custo e tempo, ou se é indispensável uma ação judicial com pedido liminar de urgência.",
                ],
                [
                  "03",
                  "Acompanhamento Firme & Feedback Constante",
                  "Protocolo técnico com forte fundamentação jurisprudencial, diligência constante perante juízos e cartórios e retorno contínuo para mantê-la sempre informada sobre cada andamento.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#8e6318]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#14110e]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4c433a]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-[#f4efe6] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas deixadas por clientes no Google sobre o atendimento e a dedicação da Dra. Francielle Gonçalves Barbosa em Patos de Minas - MG."
              >
                Avaliada com nota máxima 5,0 ★ com{" "}
                <span className="italic text-[#8e6318]">
                  13 avaliações no Google pela dedicação, empatia e excelência profissional.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dfd2] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#14110e]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#deb753]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#deb753] text-[#deb753]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4c433a]">
                    Francielle Gonçalves — Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#8e6318] transition-colors hover:text-[#14110e]"
                  >
                    13 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dfd2] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#deb753] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#deb753]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#deb753] text-[#deb753]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#deb753]/30 bg-[#faf7f2] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8e6318] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#14110e]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd2] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#deb753]/30 bg-[#faf7f2] font-serif text-sm font-semibold text-[#8e6318] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#14110e]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#786b5e]">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e8dfd2] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Patos de Minas - MG",
                  "Atendimento Digital para Todo o Brasil",
                  "Nota 5,0 ★ no Google (13 avaliações)",
                  "Método S.E.G.U.R.A Exclusivo",
                  "Divórcio, Guarda & Pensão Alimentícia",
                  "Inventário Extrajudicial em até 3 Meses",
                  "Economia Comprovada no ITCD Minas Gerais",
                  "Mais de 10,5k Seguidores no Instagram",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dfd2] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#14110e] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#8e6318]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8e6318] transition-colors hover:text-[#14110e]"
              >
                Ver Todas as Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização da Sede em Patos de Minas - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#deb753]/30 bg-[#faf7f2] py-20 text-[#14110e] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM PATOS DE MINAS"
                description="Agende uma consulta presencial no escritório no bairro Copacabana ou inicie seu atendimento imediatamente pelo WhatsApp para relatar seu caso com sigilo absoluto e rapidez."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#8e6318]">
                  escutar sua situação e proteger seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Francielle! Gostaria de agendar um atendimento para análise jurídica do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4c433a]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#14110e]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4c433a]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8e6318]"
                  />
                  <div>
                    <p className="font-semibold text-[#14110e]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#14110e]">
                      Aberto 24 horas · Atendimento com agendamento prévio e plantão de acolhimento
                    </p>
                    <p className="text-[11px] text-[#786b5e]">
                      Atendimento presencial em Patos de Minas - MG e atendimento digital para clientes em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#8e6318]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#14110e] transition-colors hover:text-[#8e6318]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#8e6318]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8e6318] text-[#14110e]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial · 10,5k seguidores)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#8e6318]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8e6318] text-[#14110e]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8e6318]"
                  />
                  <div>
                    <span className="text-[#14110e]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#8e6318] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Profile Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dfd2] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#8e6318] to-[#deb753]" />

              <div className="relative h-16 w-52 sm:h-20 sm:w-64">
                <Image
                  src={LOGO_FULL_SRC}
                  alt="Barbosa Advocacia e Consultoria"
                  fill
                  sizes="260px"
                  className="object-contain object-left"
                />
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6318]">
                  Sede do Escritório
                </p>
                <p className="mt-0.5 font-cinzel text-xl font-bold text-[#14110e] sm:text-2xl">
                  BARBOSA ADVOCACIA E CONSULTORIA
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8e6318]">
                  Dra. Francielle Gonçalves Barbosa · Patos de Minas - MG
                </p>
              </div>

              <address className="mt-7 max-w-md text-[14px] not-italic leading-7 text-[#4c433a]">
                <strong className="font-semibold text-[#14110e]">
                  Dra. Francielle Gonçalves Barbosa
                </strong>
                <br />
                Advogada Especialista em Direito de Família e Sucessões
                <br />
                Criadora do Método S.E.G.U.R.A
                <br />
                Divórcio · Guarda · Pensão · Inventários
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dfd2] bg-[#faf7f2] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8e6318]">
                  Atendimento & Informações
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4c433a]">
                  <span>Funcionamento</span>
                  <span className="text-right font-semibold text-[#14110e]">
                    Aberto 24 horas
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#8e6318]">
                    Patos de Minas - MG
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#14110e]">R. Lagamar, 98 - Copacabana</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#8e6318]">5,0 ★ (13 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#14110e]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dfd2]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#786b5e]">
                  Atendimento humanizado, ético e com total sigilo profissional
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Francielle! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#deb753]/40 bg-[#f4efe6] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#14110e] transition-colors hover:border-[#8e6318] hover:bg-[#14110e] hover:text-[#f7e5a9]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#deb753]/30 bg-gradient-to-r from-[#f4efe6] via-[#faf7f2] to-[#f4efe6] px-5 py-14 text-[#14110e] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                <Sparkles size={13} /> FRANCIELLE GONÇALVES ADVOGADA · PATOS DE MINAS & MINAS GERAIS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#14110e] sm:text-4xl">
                Precisa de uma advogada que realmente ouve você e defende sua família com firmeza e sensibilidade?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Francielle! Gostaria de uma avaliação para a minha situação jurídica familiar."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#8e6318] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Light Luxury */}
        <footer className="border-t border-[#e8dfd2] bg-[#f4efe6] px-5 py-14 text-[#14110e] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Francielle Gonçalves Advogada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-16 w-60 sm:h-20 sm:w-72 lg:h-24 lg:w-80">
                  <Image
                    src={LOGO_FULL_SRC}
                    alt="Barbosa Advocacia e Consultoria — Dra. Francielle Gonçalves"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c5042]">
                ⚖️ Advocacia de excelência com atendimento humanizado, ética e rigor técnico. Protegendo mulheres e seu patrimônio com o Método S.E.G.U.R.A em Patos de Minas - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#8e6318]">
                Dra. Francielle Gonçalves Barbosa · Advogada
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5c5042]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Francielle
                </a>
                <a className="footer-link" href="#metodo-segura">
                  Método S.E.G.U.R.A
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e6318]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5c5042]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Francielle! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#14110e]"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#8e6318]">
                  <Clock size={14} className="shrink-0" /> Aberto 24 horas · Plantão & Agendamento
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e8dfd2] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} BARBOSA ADVOCACIA E CONSULTORIA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Francielle! Gostaria de consultar sobre meu caso e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Francielle Gonçalves"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#14110e] border border-[#deb753]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Francielle Gonçalves
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e8dfd2] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#14110e]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e8dfd2] bg-[#faf7f2] text-[#14110e] transition-colors hover:border-[#deb753] hover:text-[#8e6318] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#14110e] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#4c433a]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e8dfd2] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6318]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#2b241c]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#8e6318]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#14110e] cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
