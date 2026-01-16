export const textPromptGuide = {
  title:
    "Szybki przewodnik: jak korzystać z tych promptów (nawet jeśli nigdy nie używałeś AI)",
  showLabel: "Pokaż przewodnik",
  hideLabel: "Ukryj przewodnik",

  intro:
    "Ta biblioteka to tajny bank promptów gotowych do skopiowania i wklejenia. Prompt to instrukcja, którą dajesz sztucznej inteligencji (np. ChatGPT lub Gemini), aby wygenerowała tekst, pomysły lub scenariusze. Nie potrzebujesz żadnego doświadczenia. Wystarczy, że wykonasz kolejne kroki.",

  blocks: [
    {
      type: "list",
      items: [
        "Otwórz ChatGPT lub Gemini.",
        "Skopiuj prompt z biblioteki.",
        "Wklej prompt.",
        "Zmień to, co jest w nawiasach [ ].",
        "Kliknij Wyślij.",
      ],
    },

    {
      type: "section",
      heading: "Krok 1: otwórz narzędzie (ChatGPT lub Gemini)",
      content: [
        "Masz dwie opcje. Wybierz tę, która Ci odpowiada.",
        "Oba narzędzia działają w bardzo podobny sposób.",
        "Możesz wyszukać je w Google lub wejść bezpośrednio przez link.",
      ],
    },

    /* ---------- CHATGPT ---------- */
    {
      type: "subsection",
      heading: "Opcja A: ChatGPT",
      content: [
        "Otwórz przeglądarkę (Chrome, Safari, Edge itp.).",
        "W wyszukiwarce wpisz: ChatGPT.",
        "Wejdź na oficjalną stronę.",
      ],
    },

    {
      type: "link",
      href: "https://chatgpt.com/",
      label: "Otwórz ChatGPT (chatgpt.com)",
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-search-chatgpt.webp",
      alt: "Wyszukiwanie ChatGPT w Google",
      caption:
        "Wpisz „ChatGPT” w wyszukiwarce lub skorzystaj z bezpośredniego linku.",
    },

    /* ---------- GEMINI ---------- */
    {
      type: "subsection",
      heading: "Opcja B: Gemini",
      content: [
        "Otwórz przeglądarkę.",
        "W wyszukiwarce wpisz: Gemini.",
        "Wejdź na oficjalną stronę.",
      ],
    },

    {
      type: "link",
      href: "https://gemini.google.com/",
      label: "Otwórz Gemini (gemini.google.com)",
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-search-gemini.webp",
      alt: "Wyszukiwanie Gemini w Google",
      caption:
        "Wpisz „Gemini” w wyszukiwarce lub skorzystaj z bezpośredniego linku.",
    },

    {
      type: "paragraph",
      text: "Ważne: nie musisz być ekspertem. Po wejściu zobaczysz pole do wpisywania tekstu — to wszystko, czego potrzebujesz.",
    },

    /* ---------- KONTO ---------- */
    {
      type: "section",
      heading: "Krok 2 (opcjonalne, ale zalecane): utwórz konto",
      content: [
        "Możesz korzystać z ChatGPT lub Gemini bez konta, ale założenie konta daje duże korzyści.",
        "Twoja historia rozmów jest zapisywana.",
        "Możesz wracać do starych czatów i je ulepszać.",
        "Nie tracisz pracy po zamknięciu przeglądarki.",
        "Jest to szczególnie przydatne do pracy lub nauki.",
      ],
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-login.webp",
      alt: "Tworzenie konta w ChatGPT lub Gemini",
      caption: "Konto pozwala zapisywać historię i wracać do rozmów.",
    },

    /* ---------- KOPIOWANIE ---------- */
    {
      type: "section",
      heading: "Krok 3: skopiuj prompt z Banku Promptów",
      content: [
        "W tej bibliotece znajdziesz prompty podzielone na kategorie.",
        "Wejdź do kategorii, której potrzebujesz.",
        "Otwórz wybrany prompt.",
        "Kliknij przycisk Kopiuj.",
      ],
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-copy-prompt.webp",
      alt: "Kopiowanie promptu z biblioteki",
      caption: "Otwórz prompt i kliknij Kopiuj.",
    },

    /* ---------- WKLEJANIE ---------- */
    {
      type: "section",
      heading: "Krok 4: wklej prompt w ChatGPT lub Gemini",
      content: [
        "Wróć do ChatGPT lub Gemini.",
        "Wklej prompt w pole tekstowe.",
        "Sprawdź, czy w tekście są fragmenty w nawiasach [ ].",
        "Zamień je na swoje prawdziwe informacje.",
        "Kliknij Wyślij.",
      ],
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-paste-brackets.webp",
      alt: "Wklejony prompt z zaznaczonymi nawiasami",
      caption: "Zmień tekst w nawiasach [ ] na swoje dane.",
    },

    /* ---------- ITERACJA ---------- */
    {
      type: "section",
      heading: "Krok 5: jeśli wynik nie jest idealny — popraw go",
      content: [
        "Pierwsza odpowiedź nie musi być idealna.",
        "AI działa lepiej, gdy dajesz jej więcej kontekstu.",
        "Możesz napisać na przykład:",
        "Zrób to krócej i bardziej konkretnie.",
        "Zrób to bardziej przekonująco.",
        "Daj mi 3 różne wersje.",
        "Dostosuj to do social mediów, e-maila lub strony internetowej.",
      ],
    },

    /* ---------- MINI PRZYKŁAD ---------- */
    {
      type: "section",
      heading: "Szybki mini-przykład",
      content: [
        "Tam, gdzie jest [twój biznes], wpisz: kawiarnia w Warszawie.",
        "Tam, gdzie jest [cel], wpisz: zwiększyć sprzedaż w godzinach porannych.",
        "Kliknij Wyślij i gotowe.",
      ],
    },

    /* ---------- FINAL ---------- */
    {
      type: "section",
      heading: "Końcowa rekomendacja",
      content: [
        "Traktuj prompty jak szablony.",
        "Zmieniaj tylko to, co jest w nawiasach [ ].",
        "Dodaj więcej kontekstu, aby uzyskać lepsze wyniki.",
        "Poproś o 2–3 wersje i wybierz najlepszą.",
      ],
    },
  ],
};
