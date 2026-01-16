// src/lib/bonus-04-ebooks-presentaciones-content.js

export const bonus04EbooksPresentaciones = {
  id: "bonus-04",

  // UI
  backToCourseLabel: "Wróć do strony głównej kursu",

  // LINKS
  gammaUrl: "https://gamma.app",
  gammaButtonLabel: "Otwórz Gamma",
  gammaButtonSecondaryLabel: "gamma.app",

  // HERO (dinamiczny układ bloków)
  hero: {
    title: "Generator e-booków i prezentacji (Gamma + AI)",
    subtitle:
      "Naucz się tworzyć materiały premium z Gamma + AI: szybko, prosto i bez umiejętności graficznych.",
    blocks: [
      {
        type: "paragraph",
        text:
          "W tym bonusie dostajesz gotowy proces, dzięki któremu stworzysz **prezentację lub e-book** szybciej, niż większość ludzi zdąży otworzyć Canvę.",
      },
      {
        type: "paragraph",
        text:
          "Gamma działa najlepiej, gdy NIE prosisz „zrób to ładnie”, tylko dajesz:",
      },
      {
        type: "list",
        items: [
          "jasny zarys (outline),",
          "konkretne sekcje lub slajdy,",
          "krótkie bloki tekstu,",
          "oraz prosty cel: dla kogo to jest i jaki ma dać efekt.",
        ],
      },
      {
        type: "paragraph",
        text: "Ten proces jest zaprojektowany tak, żeby:",
      },
      {
        type: "list",
        items: [
          "1) najpierw wygenerować strukturę w ChatGPT (z promptów z kursu),",
          "2) a potem użyć Gamma jako **silnika składu i designu**, żeby całość wyglądała premium w kilka minut.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Twoim celem nie jest perfekcja: to **solidna wersja 1.0**, którą potem dopracujesz w 10–20 minut, zamiast dłubać 6 godzin od zera.",
      },
      {
        type: "paragraph",
        text:
          "Dzięki temu flow możesz mieć prezentację gotową w **10–15 minut** (wersja 1.0), a potem tylko dopracować detale.",
      },
      {
        type: "link",
        href: "https://gamma.app",
        label: "Otwórz Gamma (gamma.app)",
      },
    ],
  },

  // BLOK: co osiągniesz
  outcomes: {
    title: "Co będziesz umieć po wdrożeniu tego procesu",
    blocks: [
      {
        type: "list",
        items: [
          "Tworzyć prezentacje w 10–15 minut (wersja 1.0) i e-booki w 30–60 minut.",
          "Składać materiały bez designu: układ, typografia i hierarchia robią się praktycznie same.",
          "Multiplikować jeden temat na formaty: prezentacja → e-book → lead magnet → posty.",
          "Wykorzystywać style i szablony: raz ustawiasz wygląd, potem tylko podmieniasz treść.",
          "Oszczędzać godziny na formatowaniu: skupiasz się na treści i przekazie.",
        ],
      },
    ],
  },

  // KROK PO KROKU (bloki)
  stepByStep: {
    title: "Instrukcja krok po kroku: Gamma + AI (wersja ultra praktyczna)",
    intro:
      "Potraktuj to jak linię produkcyjną: najpierw treść, potem design. Jeśli chcesz efekt premium, **nie zaczynaj od wyglądu**. Zacznij od struktury.",
    blocks: [
      /* ---------- KROK 1: KONTO ---------- */
      {
        type: "section",
        heading: "1) Załóż darmowe konto w Gamma (1 minuta)",
        content: [
          "Wejdź do Gamma z przycisku powyżej (gamma.app).",
          "Załóż darmowe konto przez e-mail lub Google.",
          "Po zalogowaniu zobaczysz ekran główny Gamma.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-home.png",
        alt: "Gamma - ekran główny",
        caption: "To jest ekran główny Gamma (start).",
      },

      /* ---------- KROK 2: NOWY PROJEKT ---------- */
      {
        type: "section",
        heading: "2) Zacznij nowy projekt (wybierz, co tworzysz)",
        content: [
          "Na ekranie startowym zobaczysz kilka opcji rozpoczęcia.",
          "W tym procesie użyjemy opcji tworzenia z AI (Generuj).",
          "To najszybszy sposób, żeby zrobić wersję 1.0 w kilka minut.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-start-options.png",
        alt: "Gamma - opcje startu",
        caption:
          "Wybierz tworzenie z AI: (Generuj / Generować).",
      },

      /* ---------- KROK 3: GENERUJ ---------- */
      {
        type: "section",
        heading: "3) Kliknij „Generuj” (AI), żeby zacząć szybko",
        content: [
          "Wybierz opcję Generuj (tworzenie z AI).",
          "Otworzy się panel, gdzie wybierasz format (prezentacja/dokument) i język.",
          "W tym bonusie priorytetem jest PREZENTACJA, bo Gamma zwykle daje tu najlepsze efekty wizualne.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-generate-screen.png",
        alt: "Gamma - ekran generowania",
        caption:
          "Ekran „Generuj”: tutaj wybierasz rodzaj materiału, który tworzysz.",
      },

      /* ---------- KROK 4: PREZENTACJA (NIE ZMIENIAĆ) ---------- */
      {
        type: "section",
        heading: "4) Wybierz „Prezentacja” i wygeneruj treść",
        content: [
          "Na ekranie generowania wybierz: Prezentacja.",
          "W polu tekstowym wklej prosty prompt, taki jak poniżej.",
          "Im bardziej konkretny temat, tym lepszy efekt (możesz dopisać tyle szczegółów, ile chcesz).",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-generate-presentation.png",
        alt: "Gamma - wybór prezentacji",
        caption: "Wybierz „Prezentacja” i wpisz prompt w tym polu.",
      },

      /* --- PROSTY PROMPT (PL) (NIE ZMIENIAĆ) --- */
      {
        type: "section",
        heading: "Prompt prosty (PL) – skopiuj i wklej",
        content: [
          "Użyj tego prostego promptu. Zmień tylko temat — resztę możesz zostawić tak jak jest.",
        ],
      },
      {
        type: "code",
        language: "text",
        text: `Wygeneruj prezentację na temat: [TEMAT PREZENTACJI].`,
      },

      /* =========================================================
         OD TEGO MOMENTU: CO DALEJ (KROK 5+)
         ========================================================= */

      /* ---------- KROK 5: SEKCJE / MODUŁY ---------- */
      {
        type: "section",
        heading:
          "5) Gamma automatycznie tworzy sekcje (a Ty możesz je zmienić w kilka sekund)",
        content: [
          "Po wygenerowaniu Gamma pokaże **szkic z sekcjami/modułami** (outline).",
          "To świetne, bo masz gotową strukturę bez długiego myślenia.",
          "Jeśli nie pasuje Ci tytuł lub kolejność: możesz to **szybko edytować, przenieść albo podmienić**.",
          "Tip: jeśli coś wygląda na zbędne albo powtarzalne — usuń i jedziesz dalej.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-outline.png",
        alt: "Gamma - struktura i sekcje",
        caption:
          "Gamma tworzy outline automatycznie. Możesz edytować tytuły, kolejność i sekcje w kilka sekund.",
      },

      /* ---------- KROK 6: LICZBA MODUŁÓW (DARMOWY PLAN) ---------- */
      {
        type: "section",
        heading: "6) Liczba modułów: plan darmowy vs płatny",
        content: [
          "W darmowym planie zwykle wygenerujesz maksymalnie **10 modułów**.",
          "Jeśli potrzebujesz więcej modułów (dłuższa prezentacja), zazwyczaj wymaga to planu płatnego.",
          "Dobra wiadomość: możesz też iść w drugą stronę — jeśli modułów jest za dużo, po prostu usuń część.",
          "Prosta zasada: więcej modułów = dłużej; mniej modułów = bardziej konkretnie.",
        ],
      },

      /* ---------- KROK 7: DŁUGOŚĆ TEKSTU ---------- */
      {
        type: "section",
        heading: "7) Ustaw długość tekstu (krótko vs szczegółowo)",
        content: [
          "Gamma pozwala kontrolować, ile tekstu pojawi się na każdej karcie/slajdzie.",
          "Jeśli chcesz wersję wizualną i szybką: wybierz **Minimalny / Zwięzły**.",
          "Jeśli chcesz bardziej „lekcję”: wybierz **Szczegółowy**.",
          "Rekomendacja: zacznij od **Zwięzły** i rozbuduj tylko te sekcje, które są kluczowe.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-text-length.png",
        alt: "Gamma - długość tekstu",
        caption:
          "Możesz wybrać, czy tekst ma być minimalny, zwięzły czy szczegółowy na slajd.",
      },

      /* ---------- KROK 8: MOTYW + STYL OBRAZÓW ---------- */
      {
        type: "section",
        heading: "8) Wybierz motyw i ustaw styl obrazów",
        content: [
          "To moment, w którym Twoja prezentacja zaczyna wyglądać „pro”.",
          "Wybierz **motyw** (Theme) zgodnie z klimatem: ciemny, jasny, nowoczesny itd.",
          "Następnie ustaw **styl obrazów** (zdjęcie, ilustracja, 3D, line art…).",
          "Tip premium: trzymaj **jeden styl** w całej prezentacji (spójność = wygląda drożej).",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-themes.png",
        alt: "Gamma - motywy",
        caption:
          "Wybierz motyw, żeby całość była spójna (typografia + kolory + układ).",
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-image-style.png",
        alt: "Gamma - styl obrazów",
        caption:
          "Ustaw styl obrazów (zdjęcie/ilustracja/3D). Jeden styl = premium efekt.",
      },

      /* ---------- KROK 9: E-BOOK ---------- */
      {
        type: "section",
        heading: "9) A jeśli chcę e-book? (gdzie kliknąć)",
        content: [
          "Jeśli chcesz zrobić e-book bezpośrednio, w tym samym miejscu wybierz: Dokument.",
          "Dokument jest lepszy pod dłuższy PDF i czytanie.",
          "Rekomendacja: jeśli dopiero zaczynasz, zacznij od Prezentacji (prościej), a potem przerób/rozszerz do Dokumentu.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-generate-document.png",
        alt: "Gamma - wybór Dokumentu",
        caption:
          "Do e-booka: wybierz „Dokument”. Dla szybkiego efektu: „Prezentacja”.",
      },

      /* ===========================
         KONTYNUACJA (CO JESZCZE)
         =========================== */

      /* ---------- KROK 10: GENERUJ + CZEKAJ ---------- */
      {
        type: "section",
        heading: "10) Teraz: kliknij „Generuj” i poczekaj",
        content: [
          "Gdy wszystko jest gotowe (temat, moduły, styl), kliknij **Generować / Generuj**.",
          "Gamma może generować przez kilka minut — to normalne.",
          "Ważne: nie zamykaj zakładki podczas generowania.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-generate-button.png",
        alt: "Gamma - przycisk generowania",
        caption: "Tutaj widzisz „10 kart ogółem” oraz przycisk „Generować”.",
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-generating.png",
        alt: "Gamma - generowanie",
        caption: "Podczas generowania Gamma informuje, aby nie zamykać zakładki.",
      },

      /* ---------- KROK 11: GOTOWE (EDYTOR) ---------- */
      {
        type: "section",
        heading: "11) Gotowe: przejrzyj prezentację w edytorze",
        content: [
          "Gdy Gamma skończy, zobaczysz gotową prezentację.",
          "Po lewej masz listę slajdów/kart: przechodź i poprawiaj szybko.",
          "Jeśli coś nie pasuje, zmień tytuły lub usuń fragmenty. Nie komplikuj: najpierw wersja 1.0.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-editor.png",
        alt: "Gamma - edytor",
        caption: "To jest edytor Gamma z gotową prezentacją.",
      },

      /* ---------- KROK 12: EKSPORT (UDZIAŁ → EKSPORT) ---------- */
      {
        type: "section",
        heading: "12) Wyeksportuj prezentację (Udział → Eksport)",
        content: [
          "Żeby eksportować lub udostępnić, kliknij **Udział**.",
          "Następnie wybierz **Eksport**.",
          "Tam wybierasz format, jaki chcesz.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-share-menu.png",
        alt: "Gamma - Udział",
        caption: "Kliknij „Udział”, a potem wybierz „Eksport”.",
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-export-options.png",
        alt: "Gamma - eksport",
        caption: "Eksport do PDF, PowerPoint, Google Slides lub PNG.",
      },

      /* ---------- KROK 13: ZNAK WODNY (DARMOWE KONTO) ---------- */
      {
        type: "section",
        heading: "13) Ważne: znak wodny w darmowym planie",
        content: [
          "W darmowym planie może pojawić się etykieta **„Made with Gamma”**.",
          "To zależy od planu.",
          "Jeśli chcesz ją usunąć do użytku profesjonalnego, zwykle potrzebujesz planu płatnego.",
        ],
      },
      {
        type: "image",
        src: "/guide/gamma/gamma-watermark.png",
        alt: "Made with Gamma",
        caption: "W darmowym planie może pojawić się „Made with Gamma”.",
      },
    ],
  },

  sections: [],
};
