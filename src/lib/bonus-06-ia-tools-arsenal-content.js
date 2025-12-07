// src/lib/bonus-06-ia-tools-arsenal-content.js

export const bonus06IAToolsArsenal = {
  title: "Arsenał z ponad 600 narzędziami AI",
  heroText:
    "Starannie wyselekcjonowana baza narzędzi AI do tworzenia, edycji, automatyzacji i skalowania Twojego biznesu cyfrowego bez niepotrzebnego zwiększania kosztów.",

  sections: [
    {
      id: "como-funciona",
      title: "1. Jak korzystać z tego arsenału, żeby się nie przytłoczyć",
      body: [
        `Ten bonus jest pomyślany jako **szybka baza referencyjna**, a nie coś, co masz zapamiętać. Chodzi o to, że kiedy pomyślisz: „czy istnieje narzędzie AI do tego?”, wracasz właśnie tutaj.`,
        `Zamiast próbować używać 50 narzędzi naraz, polecam takie podejście:`,
      ],
      bullets: [
        {
          label: "Zacznij od swojego wąskiego gardła",
          description:
            "Co dziś zabiera Ci najwięcej czasu? Pisanie, montaż wideo, projektowanie, ogarnianie zadań, odpowiadanie na wiadomości? Zacznij od tej strefy.",
        },
        {
          label: "Wybieraj 1–3 narzędzia na raz",
          description:
            "Nie potrzebujesz 20 aplikacji do wideo ani 10 do designu. Przetestuj kilka, zdecyduj i zostań przy tych, które pasują do Twojego workflow.",
        },
        {
          label: "Połącz wszystko z Twoim Tajnym Bankiem",
          description:
            "Używaj promptów do generowania pomysłów, scenariuszy i tekstów, a potem przenoś je do tych narzędzi, żeby dowieźć finalny efekt.",
        },
      ],
      highlight:
        "Praktyczna zasada: jeśli narzędzie nie „wywalczy” sobie miejsca w Twoim systemie w 1–2 tygodnie, odpuszczasz je. Cel to upraszczanie, nie komplikowanie.",
    },
    {
      id: "categorias",
      title: "2. Główne kategorie arsenału",
      body: [
        `Zamiast chaotycznej listy, pogrupowaliśmy narzędzia w duże kategorie, żebyś szybko znalazł(a) to, czego potrzebujesz.`,
        `To przykładowe kategorie, które zobaczysz w arsenale:`,
      ],
      bullets: [
        {
          label: "Wideo",
          description:
            "Montaż, automatyczne napisy, szybkie składanie, zamiana tekstu na wideo, avatary itd.",
        },
        {
          label: "Obraz i projektowanie",
          description:
            "Generowanie obrazów, okładki, miniatury, logotypy, banery, kreacje reklamowe itd.",
        },
        {
          label: "WWW i lejki",
          description:
            "Kreatory stron, landingów, lejków i witryn ze wsparciem AI.",
        },
        {
          label: "Automatyzacja",
          description:
            "Narzędzia do łączenia aplikacji, wyzwalania automatycznych akcji i eliminowania powtarzalnych zadań.",
        },
        {
          label: "Pisanie i copywriting",
          description:
            "Pisanie, przeredagowywanie, korekta, generowanie copy, maili, skryptów itd.",
        },
        {
          label: "Produktywność i organizacja",
          description:
            "Notion z AI, asystenci zadań, organizery pomysłów, streszczenia dokumentów.",
        },
      ],
      highlight:
        "Ten bonus nie polega na testowaniu aplikacji dla samego testowania, tylko na znalezieniu właściwego elementu do każdej części Twojego systemu opartego o AI.",
    },
    {
      id: "como-leer-fichas",
      title: "3. Jak czytać każdą „kartę” narzędzia",
      body: [
        `Każde narzędzie w arsenale ma standardową strukturę, żebyś nie tracił(a) czasu na research od zera:`,
      ],
      bullets: [
        {
          label: "Nazwa",
          description: "Jak nazywa się narzędzie na rynku.",
        },
        {
          label: "Kategoria",
          description:
            "Główny obszar, w którym narzędzie daje wartość (wideo, obraz, automatyzacja itd.).",
        },
        {
          label: "Opis",
          description:
            "Co robi i dla jakiego typu użytkownika lub zastosowania jest szczególnie przydatne.",
        },
        {
          label: "Jak połączyć je z Twoim Tajnym Bankiem",
          description:
            "Konkretne przykłady, jak użyć Twoich promptów i treści w danym narzędziu.",
        },
      ],
      highlight:
        "Traktuj to jak kuratorowany katalog: szybko czytasz, decydujesz, czy Ci się przyda, i działasz — bez wpadania w czarną dziurę losowego testowania aplikacji.",
    },
  ],

  // 🔧 Przykładowe narzędzia (później rozbudujesz listę do 600+)
  tools: [
    {
      id: "gamma",
      name: "Gamma",
      category: "Prezentacje i dokumenty",
      description:
        "Kreator prezentacji i wizualnych dokumentów napędzany AI. Zamienia tekst w slajdy i e-booki z profesjonalnym designem.",
      howToUseWithBank:
        "Użyj promptów do e-booków i prezentacji (Bonus #04), aby wygenerować strukturę w ChatGPT, a potem wklej tytuły i bullet-pointy do Gamma — narzędzie automatycznie złoży projekt.",
    },
    {
      id: "canva",
      name: "Canva",
      category: "Obraz i projektowanie",
      description:
        "Łatwe w użyciu narzędzie do projektowania wizualnego — idealne do okładek, karuzel, reklam i materiałów graficznych do social media.",
      howToUseWithBank:
        "Najpierw wygeneruj copy, nagłówki i struktury karuzel w Tajnym Banku Promptów. Potem przenieś je do szablonów w Canvie i dopracuj tylko fonty, kolory oraz elementy wizualne.",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Wideo",
      description:
        "Prosty edytor wideo z funkcjami AI: napisy, automatyczne cięcia i szybkie efekty — świetny do Reelsów i TikToka.",
      howToUseWithBank:
        "Użyj promptów do scenariuszy wideo, aby stworzyć skrypty do Reelsów. Nagraj (lub wygeneruj) materiał, a potem w CapCut dodaj automatyczne napisy i zmontuj cięcia pod rytm.",
    },
    {
      id: "descript",
      name: "Descript",
      category: "Wideo i audio",
      description:
        "Edytor audio i wideo oparty o transkrypcję — montujesz wideo tak, jakbyś edytował(a) dokument tekstowy.",
      howToUseWithBank:
        "Zrób transkrypcję dłuższego wideo w Descript, potem wklej ją do ChatGPT i użyj promptów do streszczania oraz repurposingu, aby wyciągnąć klipy, shortsy i pochodne scenariusze.",
    },
    {
      id: "figma",
      name: "Figma + wtyczki AI",
      category: "Design",
      description:
        "Narzędzie do projektowania zespołowego z wtyczkami AI do generowania layoutów, copy i szybkich komponentów.",
      howToUseWithBank:
        "Zrób szkice (wireframes) w Figma i użyj promptów UX/copy, by wypełnić teksty sekcji. Ręcznie dopracuj tylko to, co wymaga Twojego osobistego „szlifu”.",
    },
    {
      id: "framer",
      name: "Framer",
      category: "WWW i lejki",
      description:
        "Kreator stron i landingów z AI. Pozwala tworzyć nowoczesne strony na podstawie opisu tekstowego.",
      howToUseWithBank:
        "Wygeneruj strukturę strony (sekcje, bloki i teksty) promptami do stron sprzedażowych. Następnie wklej tę strukturę do Framer, aby wygenerował bazowy projekt strony.",
    },
    {
      id: "make",
      name: "Make (dawniej Integromat)",
      category: "Automatyzacja",
      description:
        "Wizualna platforma do budowania automatyzacji między wieloma aplikacjami — bardzo elastyczna.",
      howToUseWithBank:
        "Zaprojektuj idealny przepływ w ChatGPT: jakie aplikacje łączysz, jakie dane przechodzą i jakie wyzwalacze są potrzebne. Potem skonfiguruj to w Make na podstawie schematu wygenerowanego przez AI.",
    },
    {
      id: "zapier",
      name: "Zapier",
      category: "Automatyzacja",
      description:
        "Narzędzie automatyzacji, które łączy popularne aplikacje, aby uruchamiać akcje na podstawie konkretnych zdarzeń.",
      howToUseWithBank:
        "Użyj promptów do projektowania automatyzacji i opisz proces (np. „ktoś się zapisuje → dodaj do listy → wyślij mail”). Następnie przełóż to na konkretne „zapy” w Zapier.",
    },
    {
      id: "notion-ai",
      name: "Notion + AI",
      category: "Produktywność",
      description:
        "Notatki, bazy danych i organizacja — z wbudowaną AI do streszczania, przeredagowywania i generowania treści.",
      howToUseWithBank:
        "Zbuduj system dokumentów na najlepsze prompty, wyniki i szablony. Używaj promptów do streszczania i porządkowania, aby zamieniać chaotyczne notatki w klarowne systemy w Notion.",
    },
    {
      id: "scribehow",
      name: "Scribe",
      category: "Dokumentacja",
      description:
        "Narzędzie, które automatycznie dokumentuje procesy podczas ich wykonywania, tworząc instrukcje krok po kroku.",
      howToUseWithBank:
        "Nagraj proces raz w Scribe, a potem przenieś instrukcję do ChatGPT, żeby dopracować tekst, poprawić jasność i przerobić to na SOP-y lub mini podręczniki wewnętrzne.",
    },
    {
      id: "mubert",
      name: "Mubert",
      category: "Audio i muzyka",
      description:
        "Generator muzyki AI do podkładów wideo, podcastów i treści social media.",
      howToUseWithBank:
        "W ChatGPT zdefiniuj klimat dźwiękowy (energetyczny, spokojny, kinowy) i przełóż te wskazówki na parametry do generowania ścieżek w Mubert.",
    },
    {
      id: "tldv",
      name: "tl;dv",
      category: "Spotkania i podsumowania",
      description:
        "Narzędzie do nagrywania spotkań, generowania transkrypcji i automatycznych podsumowań.",
      howToUseWithBank:
        "Po spotkaniu wyeksportuj transkrypcję i użyj jej z promptami do streszczeń, wyciągania insightów oraz generowania konkretnych działań.",
    },
  ],
};
