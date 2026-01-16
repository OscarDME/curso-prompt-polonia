export const imagePromptGuide = {
  title:
    "Szybki przewodnik: jak korzystać z promptów do obrazów (nawet jeśli nigdy wcześniej nie tworzyłeś obrazów z AI)",

  showLabel: "Pokaż przewodnik",
  hideLabel: "Ukryj przewodnik",

  intro:
    "Ten przewodnik pokaże Ci krok po kroku, jak generować obrazy za pomocą sztucznej inteligencji. Nie potrzebujesz doświadczenia w grafice ani fotografii. Wystarczy, że skopiujesz gotowe prompty z Tajnego Banku Promptów i lekko je dopasujesz.",

  blocks: [
    {
      type: "list",
      items: [
        "Otwórz ChatGPT lub Gemini.",
        "Włącz opcję generowania obrazów (jeśli to konieczne).",
        "Skopiuj prompt z Tajnego Banku Promptów.",
        "Zmień informacje w nawiasach [ ].",
        "Wygeneruj obraz."
      ]
    },

    /* ---------- KROK 1 ---------- */
    {
      type: "section",
      heading: "Krok 1: otwórz ChatGPT lub Gemini",
      content: [
        "Możesz użyć dowolnego z tych narzędzi.",
        "Oba pozwalają generować obrazy na podstawie tekstu.",
        "Wybierz to, które jest dla Ciebie wygodniejsze."
      ]
    },

    /* ---------- CHATGPT ---------- */
    {
      type: "subsection",
      heading: "Opcja A: ChatGPT",
      content: [
        "Otwórz przeglądarkę.",
        "Wyszukaj ChatGPT w Google lub wejdź bezpośrednio.",
        "Zobaczysz pole, w którym możesz pisać."
      ]
    },

    {
      type: "link",
      href: "https://chatgpt.com/",
      label: "Otwórz ChatGPT (chatgpt.com)"
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-login.webp",
      alt: "Ekran główny ChatGPT",
      caption:
        "Ekran główny ChatGPT — gotowy do wpisywania promptów."
    },

    {
      type: "section",
      heading: "Jak generować obrazy w ChatGPT",
      content: [
        "Kliknij przycisk narzędzi (ikona + lub menu).",
        "Wybierz opcję tworzenia obrazów (Twórz obrazy / Create image).",
        "Możesz też po prostu napisać: „Wygeneruj obraz…” — ChatGPT sam to rozpozna."
      ]
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-chatgpt-create-image.webp",
      alt: "ChatGPT tworzenie obrazów",
      caption:
        "ChatGPT potrafi automatycznie rozpoznać, że chcesz wygenerować obraz."
    },

    /* ---------- GEMINI ---------- */
    {
      type: "subsection",
      heading: "Opcja B: Gemini",
      content: [
        "Otwórz przeglądarkę.",
        "Wyszukaj Gemini w Google lub wejdź bezpośrednio.",
        "Zobaczysz pole do wpisywania tekstu oraz przycisk Narzędzia."
      ]
    },

    {
      type: "link",
      href: "https://gemini.google.com/",
      label: "Otwórz Gemini (gemini.google.com)"
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-main-search-gemini.webp",
      alt: "Ekran główny Gemini",
      caption:
        "Ekran główny Gemini."
    },

    {
      type: "section",
      heading: "Jak generować obrazy w Gemini",
      content: [
        "Kliknij przycisk „Narzędzia”.",
        "Wybierz opcję „Twórz obrazy”.",
        "Możesz też napisać bezpośrednio: „Wygeneruj obraz…” — Gemini samo to wykryje."
      ]
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-gemini-create-image.webp",
      alt: "Gemini tworzenie obrazów",
      caption:
        "W Gemini należy wybrać opcję „Twórz obrazy”."
    },

    /* ---------- PROMPTY ---------- */
    {
      type: "section",
      heading: "Krok 2: skopiuj prompt z Tajnego Banku Promptów",
      content: [
        "W tej bibliotece znajdziesz gotowe prompty do obrazów.",
        "Są one zaprojektowane tak, aby dawały wysoką jakość.",
        "Otwórz wybrany prompt.",
        "Kliknij przycisk Kopiuj."
      ]
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-copy-prompt-image.webp",
      alt: "Kopiowanie promptu obrazu",
      caption:
        "Prompty zawierają styl, światło, kompozycję i ograniczenia."
    },

    /* ---------- EDYCJA ---------- */
    {
      type: "section",
      heading: "Krok 3: zmodyfikuj prompt pod swoje potrzeby",
      content: [
        "Wklej prompt do ChatGPT lub Gemini.",
        "Znajdź fragmenty w nawiasach [ ].",
        "Zamień je na własne informacje.",
        "Reszty promptu nie musisz zmieniać."
      ]
    },

    {
      type: "image",
      src: "https://pub-fc7bc8001c00468599d59941325319d4.r2.dev/poland-guides/guide-paste-image-brackets.webp",
      alt: "Prompt z nawiasami",
      caption:
        "Zmieniaj tylko to, co znajduje się w nawiasach [ ]."
    },

    /* ---------- GENEROWANIE ---------- */
    {
      type: "section",
      heading: "Krok 4: wygeneruj obraz",
      content: [
        "Po wklejeniu i edycji promptu kliknij Wyślij.",
        "AI automatycznie wygeneruje obraz.",
        "Jeśli efekt Ci się nie podoba — poproś o kolejną wersję."
      ]
    },

    /* ---------- MINI PRZYKŁAD ---------- */
    {
      type: "section",
      heading: "Szybki mini-przykład (jak wypełnić nawiasy)",
      content: [
        "Masz taki prompt:",
        "Wygeneruj REALISTYCZNY portret studyjny z rim light.",
        "",
        "DANE:",
        "- Osoba: [osoba], [wiek], [cechy]",
        "- Ubiór: [ciemny lub neutralny]",
        "- Tło: [ciemnoszare lub bardzo subtelny granat nocny]",
        "",
        "Przykładowe wypełnienie:",
        "- Osoba: kobieta, 30 lat, naturalna uroda",
        "- Ubiór: czarny sweter",
        "- Tło: ciemnoszare",
        "",
        "Kliknij Wyślij i obraz zostanie wygenerowany."
      ]
    },

    /* ---------- PODSUMOWANIE ---------- */
    {
      type: "section",
      heading: "Rekomendacja końcowa",
      content: [
        "Traktuj prompty jak szablony.",
        "Zmieniaj tylko kluczowe informacje.",
        "Testuj różne wersje.",
        "Im więcej kontekstu, tym lepsze obrazy uzyskasz."
      ]
    }
  ]
};
