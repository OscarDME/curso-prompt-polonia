// src/lib/bonus-04-ebooks-presentaciones-content.js

export const bonus04EbooksPresentaciones = {
  id: "bonus-04",

  // HERO
  title: "Generator e-booków i prezentacji (Gamma + AI)",
  subtitle:
    "Naucz się tworzyć dopracowane materiały z Gamma + AI: prosto, szybko i bez umiejętności graficznych.",
  heroText: `W tym bonusie dostajesz gotowy proces, dzięki któremu zrobisz **prezentację albo e-book** szybciej niż większość ludzi zdąży otworzyć Canvę.

Gamma to narzędzie, które świetnie łączy się z AI — ale najlepsze efekty wychodzą wtedy, gdy **nie prosisz o „ładny dokument”**, tylko dostarczasz:
- jasny konspekt (outline),
- konkretne sekcje/slajdy,
- krótkie bloki tekstu,
- oraz prosty cel: *dla kogo to jest i co ma dać*.

Ten proces jest zaprojektowany tak, żeby:
1) najpierw wygenerować logiczną strukturę w ChatGPT (z promptów z kursu),  
2) a potem użyć Gamma jako **silnika składu i designu**, który nada całości formę premium w kilka minut.

Najważniejsze: nie musisz być perfekcjonistą. Twój cel to „solidna wersja 1.0”, którą potem dopracujesz w 10–20 minut, zamiast dłubać 6 godzin od zera.`,

  // GAMMA
  gammaUrl: "https://gamma.app",
  gammaButtonLabel: "Otwórz Gamma",
  gammaButtonSecondaryLabel: "gamma.app",

  // UI
  backToCourseLabel: "Wróć do strony głównej kursu",

  // BLOK: co umiesz po wdrożeniu
  videoBlock: {
    title: "Co będziesz umieć po wdrożeniu tego procesu",
    bullets: [
      "Tworzyć prezentacje i e-booki w 30–60 minut: od zera do wersji gotowej do wysłania.",
      "Składać materiały wizualnie bez designu: układ, typografia i hierarchia robią się automatycznie.",
      "Wyciągać z jednego pomysłu kilka formatów: e-book → prezentacja → mini lead magnet → posty.",
      "Budować biblioteczkę szablonów: raz tworzysz styl, potem tylko podmieniasz treść.",
      "Oszczędzać czas na formatowaniu: skupiasz się na treści, a Gamma ogarnia resztę."
    ]
  },

  // STEP BY STEP (DŁUŻSZE)
  stepByStep: {
    title: "Instrukcja krok po kroku: jak używać Gamma z AI (wersja praktyczna)",
    intro: `Traktuj ten proces jak „taśmę produkcyjną”: najpierw treść, potem skład.  
Jeśli chcesz efekt premium — **nie zaczynaj od designu**. Zacznij od struktury.`,

    steps: [
      {
        title: "1) Ustal cel i format (2 minuty, ale ratuje godzinę pracy)",
        body: `Zanim cokolwiek wygenerujesz, odpowiedz sobie na 3 pytania:
- **Dla kogo** jest ten materiał? (1 zdanie)
- **Jaki efekt** ma dać? (np. zrozumienie, decyzja, zapis, zakup, wdrożenie)
- **Jaki format** jest najlepszy?  
  - Prezentacja: gdy chcesz „przeprowadzić” kogoś przez temat szybko.  
  - E-book/dokument: gdy chcesz dać materiał do czytania i zapisania (PDF).

✅ Mini-checklista:  
- Temat w 1 zdaniu  
- Grupa docelowa w 1 zdaniu  
- Jedno CTA na końcu (co ma zrobić odbiorca)`
      },

      {
        title: "2) Wygeneruj konspekt (outline) w ChatGPT – to jest Twój „szkielet”",
        body: `Najlepsze wyniki w Gamma wychodzą z konspektu, nie z lania wody.

Poproś AI o:
- tytuł,
- krótki opis (2–3 zdania),
- 8–14 sekcji (dla e-booka) lub 6–12 slajdów (dla prezentacji),
- do każdej sekcji: 3–6 punktów,
- na końcu: podsumowanie + CTA.

Ważne: **krótkie bloki** → lepszy layout. Jeśli AI daje długie akapity, poproś o skrócenie i rozbicie na punkty.`
      },

      {
        title: "3) Otwórz Gamma i wybierz sposób tworzenia",
        body: `W Gamma utwórz nowy projekt i wybierz tworzenie na bazie treści:
- jeśli masz konspekt → wklej tekst,
- jeśli masz tylko temat → poproś Gamma o szkic, a potem i tak go popraw.

Pro tip: jeżeli robisz e-book do PDF, często lepiej działa tryb dokumentu (dłuższa forma), a prezentacja sprawdzi się jako wersja skrócona.`
      },

      {
        title: "4) Wklej konspekt i dopilnuj „higieny treści”",
        body: `Po wklejeniu konspektu sprawdź:
- czy nagłówki są jasne i krótkie,
- czy nie ma ścian tekstu,
- czy każda sekcja ma sensowne 3–6 punktów.

Jeśli coś jest za długie:
- rozbij na 2 slajdy/sekcje,
- przerób akapit na checklistę,
- usuń powtórzenia.

✅ Zasada premium: 1 główna myśl na slajd/sekcję.`
      },

      {
        title: "5) Ustaw styl: motyw, klimat, typografia (bez perfekcjonizmu)",
        body: `Wybierz motyw i styl pasujący do Twojej marki:
- minimal/premium (czysto i jasno),
- tech/nowocześnie,
- edukacyjnie (czytelne nagłówki, dużo oddechu).

Nie spędzaj tu 30 minut. Cel na tym etapie: „wygląda dobrze i równo”.  
Dopiero później robisz polishing.`
      },

      {
        title: "6) Zmień treści w „bardziej użyteczne”: przykłady, ramki, mini-ćwiczenia",
        body: `To krok, który odróżnia „ładny PDF” od materiału, który ludzie zapisują.

Dodaj (tam gdzie pasuje):
- mini przykład (1–2 linie),
- ramkę „Najczęstszy błąd”,
- checklistę „Zrób teraz”,
- krótkie ćwiczenie (pytania do odbiorcy),
- proste podsumowanie po większej sekcji.

Jeśli robisz e-book: dodaj stronę „Szybki start” na początku i „Plan wdrożenia” na końcu.`
      },

      {
        title: "7) Grafiki i elementy wizualne: tylko gdy wspierają przekaz",
        body: `Grafiki są po to, żeby **pomagały zrozumieć**, a nie „żeby było ładnie”.

Najlepsze elementy:
- proste diagramy,
- schemat procesu,
- tabelka porównawcza,
- wykres/ramka „3 kroki”.

Unikaj przesytu stockami. Jedna sensowna grafika jest lepsza niż pięć przypadkowych.`
      },

      {
        title: "8) Polishing: spójność, skracanie, rytm (10–15 minut)",
        body: `Zrób szybki przegląd i:
- skróć zbyt długie punkty,
- ujednolić styl nagłówków (czasownik albo rzeczownik),
- popraw CTA na końcu,
- dodaj sekcję: „Dla kogo to jest” i „Co zrobisz po przeczytaniu”.

✅ Test jakości:  
Jeśli ktoś przewinie całość w 30 sekund — czy nadal zrozumie główne tezy?`
      },

      {
        title: "9) Eksport i „multiplikacja” (największy zysk czasu)",
        body: `Wyeksportuj materiał do PDF albo linku. Następnie zrób multiplikację:
- E-book → wersja skrócona jako lead magnet (5–7 stron),
- Prezentacja → skrypt do wideo,
- Każda sekcja → 1 post lub 1 mail.

To jest moment, kiedy 1 temat zamienia się w tygodnie treści.`
      }
    ],

    promptTitle: "Prompt (PL) do wygenerowania idealnego konspektu pod Gamma",
    prompt: `Działaj jak ekspert od tworzenia e-booków i prezentacji.  
Chcę przygotować materiał do złożenia w Gamma.

Temat: [WSTAW TEMAT]  
Odbiorca: [KTO?]  
Cel: [EDUKACJA / LEADY / SPRZEDAŻ / WDROŻENIE]  
Format: [PREZENTACJA lub E-BOOK]  
Ton: [PRO / PRZYJAZNY / PREMIUM / BEZPOŚREDNI]  
Poziom: [PODSTAWOWY / ŚREDNI / ZAAWANSOWANY]

Wygeneruj:
1) Tytuł + podtytuł (krótkie, konkretne).  
2) Spis treści: 8–14 sekcji (e-book) lub 6–12 slajdów (prezentacja).  
3) Dla każdej sekcji/slajdu: 3–6 punktów w formie krótkich zdań (bez długich akapitów).  
4) Co najmniej 2 ramki: „Najczęstszy błąd” i „Zrób teraz”.  
5) Podsumowanie + 1 jasne CTA na końcu.

Ważne: maksymalna czytelność, krótko, bez lania wody.`,

    tipsTitle: "Wskazówki, które robią efekt „premium”",
    tips: [
      "Mniej tekstu = lepszy design. Zawsze tnij o 20–30%.",
      "Nagłówki: krótkie, mocne, jednoznaczne.",
      "Używaj ramek: „Błąd”, „Zasada”, „Przykład”, „Zrób teraz”.",
      "Zostaw dużo „oddechu” (puste miejsce). To wygląda drożej.",
      "Na końcu dodaj: podsumowanie + następny krok. Bez tego materiał traci moc."
    ]
  },

  sections: []
};
