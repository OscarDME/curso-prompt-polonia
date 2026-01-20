import { heroCopy, bonusesSectionCopy } from "./copy";

/* =========================
   HERO
========================= */

export const courseHero = {
  title: "Kompletny Arsenał AI",
  subtitle: "Tajna Baza Promptów",
  description: heroCopy.description,
  backgroundImage: "/hero-arsenal.png",
  ctaLabel: "ZACZNIJ TERAZ",
};

/* =========================
   ROWS (NETFLIX STYLE)
========================= */

export const courseModuleRows = [
  /* ---------------------------------
     GŁÓWNA ŚCIEŻKA
  ---------------------------------- */
  {
    id: "main",
    title: "Główna ścieżka — Tajna Baza Promptów",
    modules: [
      {
        id: "home",
        title: "Start",
        subtitle:
          "Szybkie wprowadzenie: jak poruszać się po platformie i wycisnąć maksimum z Tajnej Bazy Promptów.",
        image: "/modules/inicio.png",
        href: "/curso/inicio",
        tag: "Podsumowanie",
      },
      {
        id: "text-prompts",
        title: "Prompty tekstowe",
        subtitle:
          "Biblioteka promptów do copy, scenariuszy, e-maili, postów, skryptów sprzedażowych i wielu innych.",
        image: "/modules/prompts-texto.png",
        href: "/curso/prompts/texto",
        tag: "AI • Tekst",
      },
      {
        id: "viral-prompts-text",
        title: "Virale — prompty",
        subtitle:
          "Gotowe prompty na hooki, scenariusze, viralowe struktury, CTA, nagłówki i treści zwiększające retencję.",
        image: "/modules/prompts-virales.png",
        href: "/curso/prompts/virales",
        tag: "AI • Tekst",
      },
      {
        id: "hyperrealism-pack-text",
        title: "Pakiet hiperrealizmu",
        subtitle:
          "Prompty i frameworki do ultra-realistycznych opisów, spójności, detali i kontroli stylu (wersja tekstowa).",
        image: "/modules/hiperrealismo-pro.png",
        href: "/curso/prompts/hiperrealismo",
        tag: "AI • Tekst",
      },
      {
        id: "image-prompts",
        title: "Prompty do obrazów",
        subtitle:
          "Gotowe prompty do generowania obrazów, okładek, reklam i profesjonalnych zdjęć z AI.",
        image: "/modules/prompts-imagen.png",
        href: "/curso/prompts/imagen",
        tag: "AI • Obraz",
      },
      {
        id: "video-prompts",
        title: "Prompty do wideo",
        subtitle:
          "Prompty do tworzenia viralowych wideo, reklam, reelsów i krótkich formatów z użyciem AI.",
        image: "/modules/prompts-video.png",
        href: "/curso/prompts/video",
        tag: "AI • Wideo",
      },
      {
        id: "ia-tools",
        title: "Narzędzia AI",
        subtitle:
          "Poradniki i rekomendacje narzędzi do tworzenia stron, edycji wideo i automatyzacji biznesu.",
        image: "/modules/herramientas-ia.png",
        href: "/curso/herramientas-ia",
        tag: "Narzędzia",
      },
      {
        id: "gpt-assistants",
        title: "Asystenci GPT",
        subtitle:
          "Ponad 30 wirtualnych asystentów: copywriter, social media, programista, konsultant i więcej.",
        image: "/modules/asistentes-gpts.png",
        href: "/curso/asistentes-gpts",
        tag: "Asystenci",
      },
      {
        id: "trainings",
        title: "Szkolenia",
        subtitle:
          "Lekcje i szkolenia, aby opanować ChatGPT, budować systemy z AI i wdrożyć to w swojej sytuacji.",
        image: "/modules/entrenamientos.png",
        href: "/curso/entrenamientos",
        tag: "Lekcje",
      },
    ],
  },

  /* ---------------------------------
     ⭐ KURSY PRO (OSOBNA SEKCJA)
  ---------------------------------- */
  {
    id: "pro-courses",
    title: "Kursy PRO",
    variant: "pro", // 👈 kluczowe: render premium w UI
    modules: [
      {
        id: "prompt-engineering-pro",
        title: "AI Prompt Engineering PRO",
        subtitle:
          "Profesjonalny kurs od fundamentów do workflow. Nauczysz się myśleć jak ekspert, tworzyć skuteczne prompty i pracować w sposób powtarzalny.",
        image: "/modules/prompt-engineering-pro.png",
        href: "/curso/prompt-engineering-pro",
        tag: "PRO • Kurs",
        locked: false,
      },
    ],
  },

  /* ---------------------------------
     BONUSY
  ---------------------------------- */
  {
    id: "bonuses",
    title: bonusesSectionCopy.title,
    modules: bonusesSectionCopy.items.map((bonus) => ({
      id: bonus.id.toLowerCase(),
      title: bonus.title,
      subtitle: bonus.description,
      image: bonus.imageSrc || "/modules/bonus-placeholder.jpg",
      href: bonus.href || "/curso/bonos",
      tag: bonus.label,
      locked: false,
    })),
  },
];

/* =========================
   (OPCJONALNE) LEGACY COPY
   możesz to potem usunąć,
   jeśli już nie używasz
========================= */

export const promptEngineeringCourseCopy = {
  rowId: "prompt-engineering",
  rowTitle: "Inżynieria Promptów",
  module: {
    id: "prompt-engineering-course",
    label: "Kurs",
    title: "Kurs Inżynierii Promptów",
    description:
      "Opanuj, jak dopasowywać, optymalizować i tworzyć prompty, aby uzyskiwać profesjonalne rezultaty.",
    imageSrc: "/modules/ingenieria-prompts.png",
    href: "/curso/ingenieria-de-prompts",
    locked: false,
  },
};
