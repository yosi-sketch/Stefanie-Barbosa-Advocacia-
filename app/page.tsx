"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Coins,
  FileSearch,
  GraduationCap,
  HeartHandshake,
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

const WHATSAPP_NUMBER = "5535999506434";
const PHONE_DISPLAY = "(35) 99950-6434";
const EMAIL_CONTACT = "sb.advocacia@hotmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/sb.advogada";
const INSTAGRAM_HANDLE = "@sb.advogada";
const OAB_REGISTRY = "OAB/MG 184.682";

const ADDRESS_TEXT = "R. das Acácias, 267 - Jacutinga, MG, 37590-000, Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Stefanie+Barbosa+%E2%80%94+Advocacia+Previdenci%C3%A1ria%0AJacutinga+%C2%B7+MG";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+das+Ac%C3%A1cias,+267+-+Jacutinga,+MG,+37590-000";

const LOGO_FULL_SRC = "/logo.png";
const FOTO_HERO_SRC = "/dra-stefanie-barbosa.png";
const FOTO_SOBRE_SRC = "/dra-stefanie-barbosa.png";
const FOTO_FACHADA_SRC = "/sede-fachada-jacutinga.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Stefanie Barbosa! Gostaria de agendar uma consulta jurídica e tirar dúvidas sobre a minha situação previdenciária / aposentadoria.";
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
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário Estratégico",
    icon: FileSearch,
    tag: "Simulação de Aposentadoria · Análise do CNIS · Regras de Transição · Maior Valor",
    summary:
      "Estudo detalhado de toda a sua vida contributiva para garantir que você se aposente na melhor data possível e receba o valor máximo a que tem direito.",
    details:
      "A Reforma da Previdência (EC 103/2019) criou dezenas de regras de transição complexas. Quem dá entrada sem um planejamento detalhado corre o sério risco de se aposentar cedo demais com perdas de até 40% no valor mensal pelo resto da vida. A Dra. Stefanie Barbosa realiza uma auditoria rigorosa de cada vínculo no CNIS, carteiras de trabalho antigas, carnês e guias, projetando cenários futuros para identificar exatamente quando pedir o benefício e quanto investir para obter o melhor retorno financeiro.",
    topics: [
      "Auditoria completa do CNIS (Cadastro Nacional de Informações Sociais) com correção de pendências e vínculos extintos",
      "Simulação comparativa entre todas as regras de transição: pedágio 50%, pedágio 100%, pontos e idade mínima",
      "Cálculo do ROI Previdenciário: vale a pena continuar contribuindo sobre o teto ou manter o recolhimento mínimo?",
      "Prevenção contra 'buracos' no tempo de serviço e complementação estratégica de contribuições em atraso",
      "Planejamento personalizado para autônomos, empresários, servidores públicos e trabalhadores com múltiplos vínculos",
      "Parecer jurídico completo por escrito com o mapa da sua aposentadoria segura e rentável",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria de agendar uma consulta para fazer meu Planejamento Previdenciário.",
  },
  {
    id: "aposentadorias-inss",
    title: "Aposentadorias do INSS (Idade, Tempo & Rural)",
    icon: CalendarCheck,
    tag: "Aposentadoria por Idade · Tempo de Contribuição · Aposentadoria Rural · Regime Especial",
    summary:
      "Concessão célere e segura da sua aposentadoria, com resgate de períodos rurais, trabalho informal e períodos especiais não reconhecidos pelo INSS.",
    details:
      "Muitos trabalhadores têm seus pedidos de aposentadoria indevidamente negados ou concedidos com valores inferiores porque o INSS não reconhece períodos trabalhados na juventude, trabalho na roça (rural) ou atividades especiais. Com profunda experiência prática, a Dra. Stefanie Barbosa reúne o acervo probatório necessário perante cartórios, sindicatos e órgãos públicos para fazer valer cada ano trabalhado, seja pela via administrativa ou judicial.",
    topics: [
      "Aposentadoria por Idade Urbana e Híbrida (combinação de tempo urbano com tempo rural trabalhado na infância/juventude)",
      "Aposentadoria do Trabalhador Rural e Segurado Especial com comprovação testemunhal e documental robusta",
      "Aposentadoria por Tempo de Contribuição pelas regras de transição mais vantajosas",
      "Reconhecimento de vínculos empregatícios sem registro na carteira ou empresas que faliram sem recolher o INSS",
      "Cômputo de período de serviço militar obrigatório e tempo como aluno-aprendiz em escolas técnicas",
      "Desbloqueio de processos travados e pedidos parados há meses na fila do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria de tirar dúvidas e dar entrada na minha aposentadoria no INSS.",
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS (Idoso 65+ & Pessoa com Deficiência)",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo Mensal · Sem Contribuição Prévia · Idosos · Deficiências & Autismo (TEA)",
    summary:
      "Garantia de 1 salário mínimo mensal para idosos com mais de 65 anos e pessoas com impedimentos de longo prazo que vivem em vulnerabilidade social.",
    details:
      "O Benefício de Prestação Continuada (BPC/LOAS) é um direito fundamental assegurado pela Constituição, que não exige nenhuma contribuição anterior ao INSS. É destinado a idosos a partir de 65 anos e pessoas de qualquer idade com deficiência ou impedimentos físicos, mentais, intelectuais ou sensoriais de longo prazo (incluindo Transtorno do Espectro Autista - TEA, sequelas graves e doenças crônicas). A Dra. Stefanie, que possui formação pedagógica e neuropsicopedagógica, acolhe cada família com didática e sensibilidade, estruturando laudos e comprovações de renda para reverter negativas frequentes do INSS.",
    topics: [
      "BPC Idoso: concessão direta a partir dos 65 anos de idade com análise da composição do grupo familiar",
      "BPC Pessoa com Deficiência: suporte completo para crianças, jovens e adultos com deficiência ou TEA (Autismo)",
      "Superação de limites de renda per capita através da exclusão legal de gastos contínuos com remédios, fraldas e tratamentos",
      "Reversão de indeferimentos indevidos do INSS em ações judiciais perante a Justiça Federal",
      "Preparação minuciosa para a avaliação social e perícia médica do INSS",
      "Restabelecimento imediato de BPC/LOAS bloqueado ou cancelado por divergências no CadÚnico",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria de uma avaliação para solicitar o BPC/LOAS para mim ou para um familiar.",
  },
  {
    id: "beneficios-por-incapacidade",
    title: "Benefícios por Incapacidade (Auxílio-Doença & Invalidez)",
    icon: ShieldCheck,
    tag: "Auxílio por Incapacidade Temporária · Invalidez Permanente · Adicional de 25% · Auxílio-Acidente",
    summary:
      "Proteção financeira quando um problema de saúde impede você de trabalhar: preparação médica, recursos e ações contra perícias injustas do INSS.",
    details:
      "Receber 'Não Concedido' na perícia do INSS quando você está doente e incapaz de trabalhar é uma das maiores injustiças que um cidadão pode enfrentar. A Dra. Stefanie Barbosa orienta a organização estratégica de laudos, prontuários, receitas e atestados médicos, formulando quesitos periciais específicos para demonstrar ao perito ou ao Juiz Federal a impossibilidade real de exercer sua atividade profissional, além de pleitear o adicional de 25% na aposentadoria por invalidez para quem necessita de acompanhante.",
    topics: [
      "Auxílio por Incapacidade Temporária (antigo Auxílio-Doença) para problemas ortopédicos, psiquiátricos, oncológicos e cirúrgicos",
      "Aposentadoria por Incapacidade Permanente (Invalidez) com pedido liminar na Justiça Federal",
      "Adicional de 25% na aposentadoria para segurados que necessitam da assistência permanente de cuidadores ou familiares",
      "Auxílio-Acidente: benefício indenizatório mensal pago pelo INSS que permite continuar trabalhando após sequela",
      "Reativação de benefícios cortados na 'Operação Pente-Fino' do INSS",
      "Isenção de carência para doenças graves previstas na legislação previdenciária",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Tive meu auxílio-doença negado pelo INSS e preciso de ajuda para recorrer.",
  },
  {
    id: "pensao-por-morte",
    title: "Pensão por Morte & Direitos dos Dependentes",
    icon: Users2,
    tag: "Viúvos e Cônjuges · União Estável · Filhos Menores · Auxílio-Reclusão",
    summary:
      "Concessão ágil de pensão por morte para proteger financeiramente sua família após a perda de quem garantia o sustento do lar.",
    details:
      "O falecimento de um cônjuge ou pai/mãe de família já impõe uma dor imensa, que não pode ser agravada pela falta de renda. Muitas vezes, o INSS nega a pensão alegando perda da qualidade de segurado do falecido ou falta de provas de união estável. Atuamos com extrema agilidade para comprovar documentalmente a convivência e restabelecer o amparo econômico dos dependentes legítimos.",
    topics: [
      "Comprovação rigorosa de união estável mesmo sem certidão formal de casamento em cartório",
      "Habilitação e concessão de pensão por morte para filhos menores de 21 anos ou filhos inválidos de qualquer idade",
      "Resgate da 'qualidade de segurado' do falecido através do período de graça e contribuições pretéritas",
      "Divisão justa de cotas entre dependentes legais e tutela dos direitos de menores",
      "Auxílio-Reclusão para os dependentes do segurado de baixa renda recolhido à prisão",
      "Cobrança integral de valores retroativos desde a data do falecimento ou da entrada do pedido",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria de assistência jurídica para dar entrada em pensão por morte no INSS.",
  },
  {
    id: "revisao-beneficios-atrasados",
    title: "Revisão de Benefícios & Cobrança de Atrasados",
    icon: Coins,
    tag: "Revisão da Vida Toda · Erro de Cálculo · Período Especial · RPV e Precatórios Retroativos",
    summary:
      "Identificação de falhas no cálculo do seu benefício para aumentar o valor recebido mensalmente e cobrar todos os atrasados devidos pelo INSS.",
    details:
      "Milhares de aposentados e pensionistas recebem todo mês um valor bem menor do que deveriam simplesmente porque o INSS desconsiderou períodos com salários mais altos, não aplicou a regra mais vantajosa ou cometeu erros na conversão de moeda. Analisamos minuciosamente a Carta de Concessão e a Memória de Cálculo do seu benefício para buscar o reajuste mensal e a expedição de RPV (Requisição de Pequeno Valor) com os retroativos dos últimos 5 anos.",
    topics: [
      "Revisão da Vida Toda e Revisão das Melhores Contribuições para inclusão de salários anteriores a julho de 1994",
      "Revisão para inclusão de períodos trabalhados em condições insalubres ou perigosas não convertidos",
      "Revisão com base em Reclamatória Trabalhista com reconhecimento de horas extras e diferenças salariais",
      "Revisão do Teto Previdenciário e do Buraco Negro",
      "Cobrança judicial de parcelas atrasadas retroativas devidas desde a Data de Entrada do Requerimento (DER)",
      "Correção monetária e juros legítimos sobre valores que o INSS demorou para pagar",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria que você analisasse a concessão da minha aposentadoria para verificar se tenho direito a revisão.",
  },
  {
    id: "ciencias-criminais-puc",
    title: "Direito Criminal & Ciências Criminais (Especialista PUC-MG)",
    icon: Scale,
    tag: "Especialista PUC-MG · Audiências de Custódia · Defesa Estratégica · Inquéritos e Recursos",
    summary:
      "Defesa intransigente da liberdade e garantias individuais com rigor técnico, presença célere em audiências de custódia e tribunal do júri.",
    details:
      "Com pós-graduação e especialização em Ciências Criminais pela conceituada PUC-MG, a Dra. Stefanie Barbosa oferece atuação combativa, discreta e fundamentada para assegurar o devido processo legal, combater prisões ilegais, produzir provas em favor do cliente e sustentar defesas técnicas perante o Poder Judiciário estadual e federal.",
    topics: [
      "Atuação urgente em Audiências de Custódia e pedidos liminares de liberdade provisória",
      "Acompanhamento em flagrantes, delegacias e inquéritos policiais com preservação de direitos",
      "Defesa estratégica em ações penais, instrução probatória e sustentação oral",
      "Impetração célere de Habeas Corpus perante Tribunais de Justiça e Tribunais Superiores",
      "Crimes contra o patrimônio, honra, ambientais, trânsito e execução penal",
      "Atendimento humanizado, ético e totalmente confidencial à família do assistido",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria de consultar sobre um caso na área criminal com urgência.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: GraduationCap,
    tag: "Pós-Graduada em Família e Sucessões · Divórcios · Guarda & Pensão · Inventários em Cartório",
    summary:
      "Acolhimento sensível e resolução jurídica pacífica em inventários ágeis, divórcios, partilha de bens e proteção dos direitos dos seus filhos.",
    details:
      "Conflitos familiares e a perda de entes queridos exigem uma advogada que alie conhecimento técnico profundo com empatia e equilíbrio emocional. A Dra. Stefanie conduz inventários extrajudiciais rápidos diretamente em cartório, divórcios e regulamentações de guarda e pensão alimentícia, priorizando sempre a pacificação das relações e a segurança patrimonial da família.",
    topics: [
      "Inventário Extrajudicial em Cartório com agilidade e redução de custos cartorários e tributários",
      "Divórcio Consensual e Litigioso com partilha justa de bens e proteção patrimonial",
      "Fixação, revisão e execução de pensão alimentícia para garantia do sustento dos filhos",
      "Regulamentação de guarda compartilhada e plano de convivência saudável",
      "Planejamento sucessório prévio e elaboração de testamentos",
      "Dissolução de união estável com separação amigável de patrimônio",
    ],
    whatsAppText:
      "Olá, Dra. Stefanie! Gostaria de agendar uma consulta sobre inventário / direito de família.",
  },
];

const clientReviews = [
  {
    name: "Ana Claudia Moreira",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Transparência & Profissionalismo",
    content:
      "Uma excelente profissional, com muita transparência e profissionalismo no seu trabalho eu e minha família somos muito gratos pela Dra Stefanie.",
    response: "Gratidão",
  },
  {
    name: "Edna Santiago",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Ótima Advogada Nota 10",
    content: "Ótimo advogada maravilhosa nota 10",
    response: "Obrigada pela avaliação",
  },
  {
    name: "Luciana Becaletto",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Maravilhosa, Atenciosa & Dedicada",
    content:
      "Uma profissional maravilhosa atenciosa. Quem dera eu tivesse conhecido a Dr. Stefanie antes não tinha passado oq passei no fórum tá de parabéns Dr. Deus abençoe sempre 🙏🙌",
    response: "Eu agradeço a confiança no meu trabalho !",
  },
  {
    name: "Otacilio Albino da silva",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Trabalho Nota Mil",
    content:
      "Uma excelente profissional parabéns dra seu trabalho e nota mil obrigado por tudo que a dra fez por mim que Deus te abençoe sempre",
    response: "Obrigada ! Grande abraço !",
  },
  {
    name: "Nice Puccini",
    reviewsCount: "Avaliação Verificada no Google (5,0 ★)",
    badge: "Competência em Caso Complexo",
    content:
      "Ótima advogada criminalista. Ganhamos um caso que perante os olhos humanos parecia impossível. Mas a sua competência juntamente com o Dr.Emerson e Deus saímos vitoriosos 🙏",
    response: "Obrigada Nice ! Agradecemos a confiança !",
  },
  {
    name: "Flavia Alves",
    reviewsCount: "2 avaliações no Google (5,0 ★)",
    badge: "Agilidade, Clareza & Simpatia",
    content:
      "Muito atenciosa e prestativa. Serviço com muita agilidade e clareza. Simpática. Recomendo",
    response: "Eu agradeço demais Flávia ! Estamos a disposição !",
  },
  {
    name: "Caroline Correa",
    reviewsCount: "2 avaliações no Google (5,0 ★)",
    badge: "Excelente Profissional",
    content: "Excelente profissional! Recomendo!",
    response: "Obrigada !",
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
          light ? "text-[#141316]" : "text-[#141316]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-[#4b4650] sm:text-base">
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
      <main className="overflow-hidden bg-[#faf7f8] text-[#141316] selection:bg-[#f5d3d8] selection:text-[#26060e]">
        {/* Navigation Bar - Refined Silk & Marsala Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#e8dde0] bg-white/95 backdrop-blur-xl shadow-xs">
          <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between gap-4 px-5 sm:h-[96px] sm:px-8 lg:h-[104px] lg:gap-6 lg:px-12">
            <a
              href="#inicio"
              aria-label="Stefanie Barbosa Advocacia Previdenciária"
              onClick={closeMenu}
              className="flex items-center transition-transform hover:scale-[1.01] shrink-0"
            >
              <div className="relative h-[58px] w-[180px] sm:h-[73px] sm:w-[225px] lg:h-[81px] lg:w-[250px] shrink-0">
                <Image
                  src={LOGO_FULL_SRC}
                  alt="Stefanie Barbosa Advocacia Previdenciária"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 225px, 250px"
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
                Dra. Stefanie
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link" href="#como-funciona">
                Como Funciona
              </a>
              <a className="nav-link" href="#diferenciais">
                Por Que Escolher
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (4,8 ★)
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
                aria-label="Avaliações da Dra. Stefanie Barbosa no Google"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dde0] bg-[#faf7f8] text-[#4b4650] transition-all hover:border-[#b5455f] hover:bg-white hover:text-[#741f34] shadow-xs"
                title="4,8 ★ no Google (12 avaliações)"
              >
                <GoogleIcon size={16} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Stefanie Barbosa"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dde0] bg-[#faf7f8] text-[#4b4650] transition-all hover:border-[#b5455f] hover:bg-white hover:text-[#741f34] shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE} (1.743 seguidores)`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para Stefanie Barbosa Advocacia"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dde0] bg-[#faf7f8] text-[#4b4650] transition-all hover:border-[#b5455f] hover:bg-white hover:text-[#741f34] shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Dra. Stefanie Barbosa"
                className="grid size-10 place-items-center rounded-lg border border-[#e8dde0] bg-[#faf7f8] text-[#4b4650] transition-all hover:border-[#b5455f] hover:bg-white hover:text-[#741f34] shadow-xs"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Stefanie! Gostaria de agendar uma consulta para analisar a minha aposentadoria / benefício no INSS."
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
              className="grid size-11 place-items-center rounded-lg border border-[#e8dde0] bg-[#faf7f8] text-[#141316] lg:hidden shadow-xs"
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
                className="overflow-hidden border-t border-[#e8dde0] bg-white px-6 text-[#141316] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Dra. Stefanie", "#sobre"],
                    ["Especialidades", "#atuacao"],
                    ["Como Funciona", "#como-funciona"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações (4,8 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#4b4650] hover:text-[#741f34]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#571424] via-[#8c2a41] to-[#571424] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:brightness-110"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Stefanie! Gostaria de falar sobre o meu caso e receber orientação jurídica para meu benefício."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8dde0] bg-[#faf7f8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#141316] transition-all hover:border-[#b5455f]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 4,8 ★ no Google (12 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Silk Pearl & Deep Velvet Marsala Ambience */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#e8dde0] bg-gradient-to-b from-white via-[#faf7f8] to-[#f4eef0]"
        >
          {/* Velvet Marsala ambient aura matching Stefanie's makeup and executive palette */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#8c2a41]/8 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#571424]/6 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-[#ecadb7] bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#741f34] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#741f34]" />
                <span>DRA. STEFANIE BARBOSA · {OAB_REGISTRY} · JACUTINGA - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-[#141316] sm:text-5xl lg:text-[3.75rem]"
              >
                Advocacia Especializada em Direito Previdenciário:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#741f34] via-[#9c354e] to-[#4e1322]">
                  Conquiste Sua Aposentadoria e Benefícios do INSS com Segurança e Rapidez.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#4b4650] sm:text-base sm:leading-8"
              >
                Liderado pela{" "}
                <strong className="font-semibold text-[#141316]">
                  Dra. Stefanie Barbosa ({OAB_REGISTRY})
                </strong>
                , advogada especialista em Direito Previdenciário, Ciências Criminais (PUC-MG) e Família/Sucessões, pedagoga e neuropsicopedagoga. Atuação técnica, humanizada e firme em{" "}
                <strong className="font-semibold text-[#141316]">
                  Planejamento Previdenciário, Aposentadorias (Idade, Tempo, Especial e Rural), BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS
                </strong>
                , garantindo o benefício correto e o valor máximo que você construiu durante toda a sua vida de trabalho.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Stefanie! Gostaria de agendar uma consulta sobre Direito Previdenciário / Aposentadoria / BPC / Benefício do INSS."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp com a Dra. Stefanie
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#e8dde0] bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#141316] shadow-xs transition-all hover:border-[#b5455f] hover:bg-[#fdf7f8]"
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
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#e8dde0] pt-6 text-xs text-[#5c5560]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#141316] transition-colors hover:text-[#741f34]"
                >
                  <Star size={15} className="fill-[#f59e0b] text-[#f59e0b]" /> 4,8 estrelas no Google (12 avaliações autênticas)
                </a>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-[#741f34]" /> {OAB_REGISTRY}
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-[#741f34]" /> R. das Acácias, 267 · Jacutinga - MG
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#141316] transition-colors hover:text-[#741f34]"
                >
                  <InstagramIcon size={15} className="text-[#741f34]" /> {INSTAGRAM_HANDLE} (1.743 seguidores)
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Stefanie Barbosa Portrait */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#e8dde0] bg-white shadow-xl ring-1 ring-[#b5455f]/20">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Stefanie Barbosa — Advogada Previdenciária em Jacutinga - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#141316] via-[#141316]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Stefanie Barbosa
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#ecadb7]">
                      {OAB_REGISTRY} · Advocacia Previdenciária
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#b5455f]/40 bg-[#141316]/85 text-[#fdf7f8] backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-6 z-10 rounded-lg border border-[#ecadb7] bg-white/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#741f34] shadow-md backdrop-blur-md sm:-left-5">
                JACUTINGA - MG · ATENDIMENTO ON-LINE EM TODO O BRASIL
              </div>

              {/* Floating Google 4.8 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-5 -right-3 z-10 rounded-xl border border-[#ecadb7] bg-white/95 p-3.5 shadow-md backdrop-blur-md transition-all hover:border-[#741f34] hover:bg-white sm:-right-5"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={17} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#f59e0b]">
                      <Star size={13} className="fill-[#f59e0b] text-[#f59e0b]" />
                    </div>
                    <span className="font-serif text-base font-bold text-[#141316]">
                      4,8
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#741f34]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#5c5560]">
                  12 Avaliações no Google
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#e8dde0] bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "4,8 ★ no Google",
                "nota excelente com 12 avaliações comprovando transparência, clareza e dedicação",
              ],
              [
                "Previdenciário & INSS",
                "atuação técnica focada em aposentadorias, BPC/LOAS, auxílios e planejamento detalhado",
              ],
              [
                "PUC-MG & Interdisciplinar",
                "especialização em Ciências Criminais PUC-MG, Pós em Família e Neuropsicopedagoga",
              ],
              [
                "Sede em Jacutinga - MG",
                "escritório estruturado na R. das Acácias, 267 e atendimento digital para todo o país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#e8dde0]"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#741f34] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#5c5560]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Stefanie Barbosa - Editorial Canvas */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#e8dde0] bg-[#faf7f8] py-20 text-[#141316] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Stefanie Full Portrait with Facade preview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl border-2 border-[#e8dde0] bg-white shadow-2xl ring-1 ring-[#b5455f]/20">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Stefanie Barbosa — Advocacia Previdenciária"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#141316]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-xl font-medium">Dra. Stefanie Barbosa</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#ecadb7]">
                    Advogada Previdenciária · {OAB_REGISTRY} · Jacutinga - MG
                  </p>
                </div>
              </div>

              {/* Sede física photo badge */}
              <div className="absolute -bottom-8 -left-3 flex items-center gap-3 rounded-xl border border-[#ecadb7] bg-white p-3 shadow-xl sm:-left-6">
                <div className="relative h-16 w-14 overflow-hidden rounded-lg border border-[#e8dde0] bg-stone-100 shrink-0">
                  <Image
                    src={FOTO_FACHADA_SRC}
                    alt="Fachada do Escritório Stefanie Barbosa em Jacutinga - MG"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="pr-2">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#741f34]">
                    Sede Própria Oficial
                  </p>
                  <p className="font-serif text-xs font-bold text-[#141316]">
                    R. das Acácias, 267
                  </p>
                  <p className="text-[10px] text-[#5c5560]">
                    Jacutinga, MG · 37590-000
                  </p>
                </div>
              </div>

              {/* Authority badge card */}
              <div className="absolute -top-6 right-3 max-w-[280px] rounded-xl border border-[#ecadb7] bg-white px-4 py-3 shadow-xl sm:-right-6 sm:px-5">
                <div className="flex items-center gap-2 text-[#741f34]">
                  <Sparkles size={15} />
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#741f34]">
                    Formação Interdisciplinar
                  </p>
                </div>
                <p className="mt-1 font-serif text-sm font-semibold text-[#141316]">
                  Esp. Ciências Criminais PUC-MG
                </p>
                <p className="text-[10px] text-[#6b6270]">
                  Pedagoga & Neuropsicopedagoga
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#ecadb7] sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#ecadb7] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#741f34] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#741f34]" />
                <span>QUEM É A DRA. STEFANIE BARBOSA</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#141316] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia transparente, humana e resolutiva:{" "}
                <span className="italic text-[#741f34]">
                  a garantia do seu benefício com rigor técnico e respeito à sua história.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#4b4650]"
              >
                Com sede estabelecida na Rua das Acácias, 267 em{" "}
                <strong className="font-bold text-[#141316]">
                  Jacutinga - MG
                </strong>{" "}
                e atendimento digital para segurados em todo o Brasil, a{" "}
                <strong className="font-bold text-[#141316]">
                  Dra. Stefanie Barbosa ({OAB_REGISTRY})
                </strong>{" "}
                dedica sua atuação a proteger o futuro de trabalhadores, idosos, segurados especiais e pessoas em situação de vulnerabilidade.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#4b4650]"
              >
                Sua trajetória reúne uma combinação formativa singular: especialista em{" "}
                <strong className="font-semibold text-[#141316]">Direito Previdenciário</strong>, pós-graduada em{" "}
                <strong className="font-semibold text-[#141316]">Ciências Criminais pela conceituada PUC-MG</strong>, pós-graduada em{" "}
                <strong className="font-semibold text-[#141316]">Direito de Família e Sucessões</strong>, e com formação em{" "}
                <strong className="font-semibold text-[#141316]">Pedagogia e Neuropsicopedagogia</strong>. Essa bagagem confere à Dra. Stefanie uma sensibilidade ímpar para escutar, acolher e explicar direitos complexos sem termos técnicos herméticos, garantindo que você compreenda com tranquilidade cada passo do seu pedido.
              </motion.p>

              {/* Client Quote Card from real reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#e8dde0] bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#141316]">
                  &ldquo;Uma excelente profissional, com muita transparência e profissionalismo no seu trabalho eu e minha família somos muito gratos pela Dra Stefanie.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#741f34]">
                  — Ana Claudia Moreira · Avaliação Verificada no Google (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#e8dde0] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#141316]">4,8 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-[#6b6270]">
                    12 avaliações autênticas
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dde0] bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#141316]">{OAB_REGISTRY}</p>
                  <p className="mt-0.5 text-[11px] text-[#6b6270]">
                    Registro Oficial na OAB/MG
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8dde0] bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#141316]">1.743 Seguidores</p>
                  <p className="mt-0.5 text-[11px] text-[#6b6270]">
                    Instagram @sb.advogada
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#141316] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                  <span>Sede física na R. das Acácias, 267 - Jacutinga · MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                  <span>Análise detalhada do CNIS e simulação do maior valor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                  <span>Atendimento direto pelo WhatsApp, sem intermediários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                  <span>Atendimento presencial no Sul de Minas e on-line para o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Stefanie! Gostaria de agendar uma consulta para conversar diretamente sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Stefanie
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141316] transition-colors hover:text-[#741f34]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#e8dde0] bg-[#f4eef0] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="ÁREAS DE ATUAÇÃO E ESPECIALIDADES"
                description="Clique em cada especialidade para abrir os detalhes, demandas atendidas e tirar suas dúvidas diretamente pelo WhatsApp com a Dra. Stefanie."
              >
                Atuação Jurídica{" "}
                <span className="italic text-[#741f34]">
                  Especializada em Direito Previdenciário & Benefícios do INSS.
                </span>
              </Heading>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ecadb7] bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#741f34] shadow-xs transition-all hover:border-[#741f34] hover:bg-[#faf7f8]"
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
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex flex-col justify-between rounded-xl border border-[#e8dde0] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#b5455f] hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="grid size-12 place-items-center rounded-lg border border-[#ecadb7] bg-[#fdf7f8] text-[#741f34] shadow-xs transition-colors group-hover:border-[#741f34] group-hover:bg-[#741f34] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-md border border-[#f5d3d8] bg-[#fbebed] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#571424]">
                          {area.id.includes("criminal")
                            ? "Ciências Criminais"
                            : area.id.includes("familia")
                            ? "Família & Sucessões"
                            : "Previdenciário"}
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold leading-tight text-[#141316] transition-colors group-hover:text-[#741f34]">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#741f34]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-[13px] leading-relaxed text-[#4b4650]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#e8dde0] pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#741f34] transition-colors hover:text-[#141316] cursor-pointer"
                      >
                        Ver detalhes <ArrowRight size={13} />
                      </button>
                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Consultar sobre ${area.title}`}
                        className="grid size-9 place-items-center rounded-lg border border-[#ecadb7] bg-[#faf7f8] text-[#141316] transition-colors hover:border-[#741f34] hover:bg-[#741f34] hover:text-white"
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

        {/* Como Funciona o Atendimento Previdenciário em 3 Passos */}
        <section
          id="como-funciona"
          className="relative overflow-hidden border-t border-[#e8dde0] bg-[#faf7f8] py-20 text-[#141316] sm:py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#8c2a41]/6 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#571424]/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="COMO ATUAMOS NO SEU BENEFÍCIO"
                description="Um método transparente, metódico e humanizado para analisar sua situação contributiva e conquistar o benefício mais rápido e vantajoso."
              >
                Três etapas claras para{" "}
                <span className="italic text-[#741f34]">
                  conquistar sua aposentadoria sem burocracias desnecessárias.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#e8dde0] bg-white p-6 font-serif text-base italic leading-7 text-[#141316] shadow-xs">
                &ldquo;Cada benefício previdenciário representa anos de suor, trabalho e sacrifício. Meu compromisso é garantir que cada cliente seja ouvido com respeito, transparência e que receba exatamente cada centavo a que tem direito.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#741f34]">
                  — Dra. Stefanie Barbosa · Advogada Previdenciária ({OAB_REGISTRY})
                </footer>
              </blockquote>

              <div className="mt-7">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Stefanie! Gostaria de fazer uma análise prévia do meu extrato CNIS para aposentadoria."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} /> Enviar Meu Caso no WhatsApp
                </GlowingButton>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#e8dde0]"
            >
              {[
                [
                  "01",
                  "Diagnóstico e Coleta de Documentos",
                  "Análise preliminar do seu extrato CNIS, carteiras de trabalho (CTPS), carnês, laudos médicos ou documentos rurais. Atendimento no escritório em Jacutinga ou de forma 100% digital e segura pelo WhatsApp.",
                ],
                [
                  "02",
                  "Cálculo Rigoroso e Estratégia Mais Vantajosa",
                  "Simulação minuciosa entre as regras de transição da Reforma. Verificamos se há períodos não computados pelo INSS (rural, militar, especial) para elevar a média dos seus proventos mensais.",
                ],
                [
                  "03",
                  "Requerimento, Diligência e Ação Judicial",
                  "Protocolo técnico com petição fundamentada no INSS. Se houver demora abusiva, exigência indevida ou negativa injusta, ingressamos imediatamente com Ação perante a Justiça Federal para destravar seu benefício.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#741f34]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#141316]">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#4b4650]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher a Dra. Stefanie Barbosa - Diferenciais */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#e8dde0] bg-[#faf7f8] py-20 text-[#141316] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="NOSSOS PILARES DE EXCELÊNCIA"
                description="O sustento da sua velhice e a segurança da sua família são preciosos demais para ficarem à mercê de erros do INSS ou atendimentos impessoais."
              >
                Por que confiar seu caso à{" "}
                <span className="italic text-[#741f34]">
                  Dra. Stefanie Barbosa Advocacia?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Stefanie! Gostaria de uma avaliação para a minha situação previdenciária."
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
              {/* Card 1: Comunicação Didática e Acolhimento */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dde0] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#b5455f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#f5d3d8] bg-[#fbebed] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#571424]">
                      <HeartHandshake size={14} /> Didática, Paciência & Acolhimento
                    </span>
                    <span className="text-xs font-semibold text-[#741f34]">
                      Sem Juridiquês
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#141316] sm:text-[1.75rem]">
                    Você Entende Cada Detalhe do Seu Benefício com Clareza
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4b4650]">
                    Graças à sua formação interdisciplinar como pedagoga e neuropsicopedagoga, a Dra. Stefanie possui uma capacidade diferenciada de explicar regras previdenciárias difíceis de forma simples, humana e acessível, acolhendo idosos, pessoas com deficiência e famílias com atenção irrestrita.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#141316]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                      <span>Comunicação transparente e acolhedora em linguagem clara para você e sua família</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                      <span>Empatia com a ansiedade de quem espera a concessão do sustento mensal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                      <span>Transparência total sobre prazos, documentos e expectativas reais de valores</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dde0] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Stefanie! Gostaria de tirar dúvidas sobre o meu caso em uma conversa sem burocracia."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#ecadb7] bg-[#fdf7f8] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#141316] transition-all hover:border-[#741f34] hover:bg-[#141316] hover:text-[#fdf7f8]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp com a Dra. Stefanie
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Firmeza Técnica e Combate a Erros do INSS */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#e8dde0] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#b5455f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#f5d3d8] bg-[#fbebed] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#571424]">
                      <Scale size={14} /> Firmeza Técnica & Combate a Negativas
                    </span>
                    <span className="text-xs font-semibold text-[#741f34]">
                      Justiça Federal & INSS
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#141316] sm:text-[1.75rem]">
                    Atuação Incisiva para Destravar Processos e Reverter Decisões
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#4b4650]">
                    Com sólida especialização jurídica (Ciências Criminais PUC-MG e Previdenciário), a Dra. Stefanie não se conforma com respostas automáticas do INSS. Quando o órgão comete erros ou nega um benefício justo, recorremos imediatamente perante a Justiça Federal, garantindo o retroativo integral.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#141316]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                      <span>Ações judiciais perante a Justiça Federal com pedidos de tutela de urgência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                      <span>Resgate de períodos rurais, insalubres e não computados no CNIS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#741f34]" />
                      <span>Recebimento de valores atrasados retroativos com juros e correção monetária</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#e8dde0] pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Stefanie! Tive um problema com o INSS e preciso de orientação jurídica para reverter."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#ecadb7] bg-[#fdf7f8] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#141316] transition-all hover:border-[#741f34] hover:bg-[#141316] hover:text-[#fdf7f8]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Problema do INSS no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#e8dde0] bg-[#f4eef0] py-20 text-[#141316] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                light
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja avaliações autênticas e espontâneas registradas por clientes no Google sobre o atendimento e a competência da Dra. Stefanie Barbosa em Jacutinga - MG."
              >
                Avaliada com nota 4,8 ★ no Google com{" "}
                <span className="italic text-[#741f34]">
                  depoimentos que destacam transparência, agilidade e excelência profissional.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#e8dde0] bg-white p-5 shadow-xs sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#ecadb7] bg-[#fdf7f8] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#141316]">
                      4,8
                    </span>
                    <div className="flex gap-0.5 text-[#f59e0b]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#f59e0b] text-[#f59e0b]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#4b4650]">
                    Stefanie Barbosa Advocacia Previdenciária
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#741f34] transition-colors hover:text-[#141316]"
                  >
                    12 avaliações no Google <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#e8dde0] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b5455f] hover:shadow-md sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#f59e0b]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#f59e0b] text-[#f59e0b]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#f5d3d8] bg-[#fbebed] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#741f34] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#141316]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {/* Response from Dra. Stefanie */}
                    {review.response && (
                      <div className="mt-4 rounded-lg border-l-2 border-[#741f34] bg-[#fdf7f8] p-2.5 text-[11px] text-[#5c5560]">
                        <p className="font-semibold text-[#741f34]">Resposta do escritório:</p>
                        <p className="italic text-[#141316]">{review.response}</p>
                      </div>
                    )}
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#e8dde0] pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#ecadb7] bg-[#fdf7f8] font-serif text-sm font-semibold text-[#741f34] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#141316]">
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
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#e8dde0] pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada em Jacutinga - MG",
                  "Atendimento Digital para Todo o Brasil",
                  "Nota 4,8 ★ no Google (12 avaliações)",
                  "Especialista em Direito Previdenciário",
                  "Especialista em Ciências Criminais PUC-MG",
                  "Pós em Família e Sucessões",
                  "Pedagoga e Neuropsicopedagoga",
                  "Registro OAB/MG 184.682",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8dde0] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#141316] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#741f34]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#741f34] transition-colors hover:text-[#141316]"
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

        {/* Contato & Localização da Sede em Jacutinga - MG */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#e8dde0] bg-[#faf7f8] py-20 text-[#141316] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                light
                eyebrow="CONTATO & ATENDIMENTO EM JACUTINGA"
                description="Agende uma consulta presencial no escritório na Rua das Acácias ou inicie seu atendimento imediatamente pelo WhatsApp para relatar seu caso com sigilo absoluto e rapidez."
              >
                Estamos prontos para{" "}
                <span className="italic text-[#741f34]">
                  analisar seus documentos e defender seus direitos previdenciários.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Stefanie! Gostaria de agendar um atendimento para análise jurídica do meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#4b4650]">
                  Telefone e WhatsApp direto:{" "}
                  <strong className="text-[#141316]">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#4b4650]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#741f34]"
                  />
                  <div>
                    <p className="font-semibold text-[#141316]">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#141316]">
                      Segunda a Sexta a partir das 08:00 · Atendimento com agendamento prévio
                    </p>
                    <p className="text-[11px] text-[#6b6270]">
                      Atendimento presencial em Jacutinga - MG e atendimento digital para segurados em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#741f34]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-[#141316] transition-colors hover:text-[#741f34]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#741f34]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#741f34] text-[#141316]"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial · 1.743 seguidores)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#741f34]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#741f34] text-[#141316]"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#741f34]"
                  />
                  <div>
                    <span className="text-[#141316]">{ADDRESS_TEXT}</span>
                    <br />
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-semibold text-[#741f34] hover:underline"
                    >
                      Ver no Google Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Profile Card with Physical Facade Photo */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8dde0] bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#571424] via-[#8c2a41] to-[#b5455f]" />

              <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] items-start">
                <div>
                  <div className="relative h-16 w-52 sm:h-20 sm:w-64">
                    <Image
                      src={LOGO_FULL_SRC}
                      alt="Stefanie Barbosa Advocacia Previdenciária"
                      fill
                      sizes="260px"
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#741f34]">
                      Sede do Escritório
                    </p>
                    <p className="mt-0.5 font-cinzel text-xl font-bold text-[#141316] sm:text-2xl">
                      STEFANIE BARBOSA ADVOCACIA
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#741f34]">
                      Dra. Stefanie Barbosa · {OAB_REGISTRY} · Jacutinga - MG
                    </p>
                  </div>
                </div>

                {/* Office photo in card */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#e8dde0] shadow-xs">
                  <Image
                    src={FOTO_FACHADA_SRC}
                    alt="Placa e Fachada do Escritório em Jacutinga - MG"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#141316]/85 p-2 text-center text-[10px] font-medium text-white">
                    Sede · Jacutinga / MG
                  </div>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#4b4650]">
                <strong className="font-semibold text-[#141316]">
                  Dra. Stefanie Barbosa
                </strong>
                <br />
                Advogada Especialista em Direito Previdenciário ({OAB_REGISTRY})
                <br />
                Pós-Graduada em Ciências Criminais (PUC-MG) & Família/Sucessões
                <br />
                Pedagoga e Neuropsicopedagoga
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#e8dde0] bg-[#faf7f8] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#741f34]">
                  Atendimento & Informações Oficiais
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#4b4650]">
                  <span>Funcionamento</span>
                  <span className="text-right font-semibold text-[#141316]">
                    Segunda a Sexta a partir das 08:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-[#741f34]">
                    Jacutinga - MG (Sede Própria)
                  </span>
                  <span>Endereço</span>
                  <span className="text-right text-[#141316]">R. das Acácias, 267</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#741f34]">4,8 ★ (12 avaliações)</span>
                  <span>Atendimento Digital</span>
                  <span className="text-right text-[#141316]">Todo o Brasil</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#e8dde0]" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#6b6270]">
                  Atendimento transparente, ético e em estrita conformidade com a OAB/MG
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Stefanie! Gostaria de agendar um atendimento no escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ecadb7] bg-[#fbebed] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#571424] transition-colors hover:border-[#741f34] hover:bg-[#741f34] hover:text-white"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#ecadb7] bg-gradient-to-r from-[#f4eef0] via-[#faf7f8] to-[#f4eef0] px-5 py-14 text-[#141316] shadow-xs sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#741f34]">
                <Sparkles size={13} /> STEFANIE BARBOSA ADVOCACIA PREVIDENCIÁRIA · {OAB_REGISTRY}
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#141316] sm:text-4xl">
                Pronto para conquistar a sua aposentadoria ou benefício do INSS com quem realmente entende do assunto?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Stefanie! Gostaria de uma avaliação para a minha situação jurídica previdenciária."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-[#571424] via-[#8c2a41] to-[#571424] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Silk & Marsala Luxury */}
        <footer className="border-t border-[#e8dde0] bg-[#f4eef0] px-5 py-14 text-[#141316] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Stefanie Barbosa Advocacia Previdenciária"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-16 w-60 sm:h-20 sm:w-72 lg:h-24 lg:w-80">
                  <Image
                    src={LOGO_FULL_SRC}
                    alt="Stefanie Barbosa Advocacia Previdenciária"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#5c5560]">
                ⚖️ Advocacia previdenciária de excelência, transparência e rigor técnico. Defesa firme do seu direito à aposentadoria, BPC/LOAS e benefícios do INSS em Jacutinga - MG e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#741f34]">
                Dra. Stefanie Barbosa · Advogada · {OAB_REGISTRY}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#741f34]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#5c5560]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Dra. Stefanie
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades
                </a>
                <a className="footer-link" href="#como-funciona">
                  Como Funciona
                </a>
                <a className="footer-link" href="#diferenciais">
                  Por Que Escolher
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (4,8 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#741f34]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#5c5560]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Stefanie! Gostaria de falar com o escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-[#141316]"
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
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </a>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#741f34]">
                  <Clock size={14} className="shrink-0" /> Seg. a Sex. a partir das 08:00 · Agendamento flexível
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#e8dde0] pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} STEFANIE BARBOSA ADVOCACIA PREVIDENCIÁRIA ({OAB_REGISTRY}). Todos os direitos reservados.
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
              "Olá, Dra. Stefanie! Gostaria de consultar sobre meu benefício e tirar dúvidas pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Stefanie Barbosa"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#141316] border border-[#b5455f]/30 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar com a Dra. Stefanie Barbosa
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#e8dde0] bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#141316]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#e8dde0] bg-[#faf7f8] text-[#141316] transition-colors hover:border-[#b5455f] hover:text-[#741f34] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light">ÁREA DE ATUAÇÃO</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-[#141316] sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#4b4650]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#e8dde0] pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#741f34]">
                    Demandas e Pedidos Atendidos pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#141316]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#741f34]" />
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
                    className="px-5 py-3 text-xs font-semibold text-stone-500 transition-colors hover:text-[#141316] cursor-pointer"
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
