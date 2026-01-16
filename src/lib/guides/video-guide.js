export const videoPromptGuide = {
  title:
    "Szybki przewodnik: jak korzystać z promptów do wideo (Sora 2 i Flow)",

  showLabel: "Pokaż przewodnik",
  hideLabel: "Ukryj przewodnik",

  intro:
    "Ten przewodnik pokaże Ci, jak korzystać z Tajnego Banku Promptów do tworzenia wideo z pomocą AI, używając Sora (Sora 2) lub Flow. Proces jest prosty: wybierasz narzędzie, wklejasz prompt, zmieniasz to, co jest w nawiasach [ ], i generujesz wideo.",

  blocks: [
    {
      type: "list",
      items: [
        "Otwórz Sora 2 lub Flow.",
        "Skopiuj prompt z Tajnego Banku Promptów (wideo).",
        "Wklej prompt i zmień to, co jest w nawiasach [ ].",
        "Wygeneruj wideo.",
        "Jeśli efekt Ci się nie podoba, poproś o 2–3 wersje i popraw wynik."
      ]
    },

    /* ---------- KROK 1 ---------- */
    {
      type: "section",
      heading: "Krok 1: wejdź do narzędzia (Sora 2 lub Flow)",
      content: [
        "Masz dwie opcje do generowania wideo z AI.",
        "Sora 2 (OpenAI) oraz Flow (Google Labs).",
        "Proces pracy jest bardzo podobny w obu narzędziach."
      ]
    },

    /* ---------- SORA 2 ---------- */
    {
      type: "subsection",
      heading: "Opcja A: Sora 2",
      content: [
        "Wejdź do Sora 2 przez poniższy link.",
        "Tutaj wkleisz prompt do wideo i wygenerujesz rezultat.",
        "Limity użycia zależą od planu oraz aktualnego obciążenia."
      ]
    },

    {
      type: "link",
      href: "https://sora.chatgpt.com/",
      label: "Otwórz Sora 2 (sora.chatgpt.com)"
    },

    {
      type: "image",
      src: "/guide/guide-sora-main.png",
      alt: "Interfejs Sora 2",
      caption:
        "Główny interfejs Sora 2 — tutaj wklejasz prompt i generujesz wideo."
    },

    {
      type: "paragraph",
      text:
        "Kredyty w Sora 2: liczba generacji wideo zależy od Twojego planu i może się zmieniać w czasie. Jeśli planujesz regularnie generować wideo, zalecany jest plan płatny."
    },

    /* ---------- FLOW ---------- */
    {
      type: "subsection",
      heading: "Opcja B: Flow (Google Labs)",
      content: [
        "Flow to eksperymentalne narzędzie Google Labs.",
        "Działa w oparciu o system kredytów.",
        "Liczba dostępnych kredytów zależy od planu."
      ]
    },

    {
      type: "link",
      href: "https://labs.google/fx/tools/flow",
      label: "Otwórz Flow (Google Labs)"
    },

    {
      type: "image",
      src: "/guide/guide-flow-main.png",
      alt: "Interfejs Flow",
      caption:
        "Główny interfejs Flow do generowania wideo z AI."
    },

    {
      type: "paragraph",
      text:
        "Kredyty w Flow: liczba wideo, które możesz wygenerować, zależy od planu i dostępnych kredytów. Przy regularnym użyciu zalecany jest plan płatny."
    },

    /* ---------- KROK 2 ---------- */
    {
      type: "section",
      heading: "Krok 2: skopiuj prompt z Tajnego Banku Promptów (wideo)",
      content: [
        "W tej bibliotece znajdziesz prompty do Shorts, Reels, TikToków, reklam i UGC.",
        "Wybierz prompt najlepiej pasujący do Twojego celu.",
        "Kliknij przycisk Kopiuj."
      ]
    },

    {
      type: "image",
      src: "/guide/guide-copy-prompt-video.png",
      alt: "Kopiowanie promptu do wideo",
      caption:
        "Skopiuj prompt z Tajnego Banku Promptów."
    },

    /* ---------- KROK 3 ---------- */
    {
      type: "section",
      heading: "Krok 3: wklej prompt i zmień elementy w nawiasach [ ]",
      content: [
        "Wklej prompt do Sora 2 lub Flow.",
        "Zmieniaj tylko to, co znajduje się w nawiasach [ ].",
        "Przykłady: styl, długość, platforma, klimat, kamera."
      ]
    },

    {
      type: "image",
      src: "/guide/guide-paste-brackets-video.png",
      alt: "Edycja promptu wideo",
      caption:
        "Zmieniaj wyłącznie elementy w nawiasach [ ]."
    },

    /* ---------- KROK 4 ---------- */
    {
      type: "section",
      heading: "Krok 4: wygeneruj wideo",
      content: [
        "Kliknij Generuj.",
        "Czas oczekiwania zależy od planu i obciążenia systemu.",
        "Jeśli efekt nie spełnia oczekiwań, wygeneruj kolejną wersję."
      ]
    },

    {
      type: "paragraph",
      text:
        "Wskazówka: generowanie kilku wersji często daje lepsze rezultaty niż poprawianie jednej."
    },

    /* ---------- KROK 5 ---------- */
    {
      type: "section",
      heading: "Krok 5: popraw wynik krótką instrukcją",
      content: [
        "Przykłady poprawek:",
        "– Zrób to bardziej dynamiczne.",
        "– Zmień styl na bardziej filmowy.",
        "– Zachowaj pomysł, ale zmień scenografię."
      ]
    },

    /* ---------- FINAL ---------- */
    {
      type: "section",
      heading: "Rekomendacja końcowa",
      content: [
        "Traktuj prompty jak szablony.",
        "Generuj warianty.",
        "Jeśli często tworzysz wideo, rozważ plan płatny.",
        "Wybierz najlepszą wersję i opublikuj ją."
      ]
    }
  ]
};
