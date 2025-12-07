// src/lib/prompts/viral-text/hooks.js
// Unikalny obszar i kategoria dla CAŁEGO tego pliku:
const AREA = "Hooki";
const CATEGORY = "Zaskoczenie";

export const viralTextPromptsHooks = [
  {
    id: "viral-hook-sorpresa-001",
    title: "Błąd, który wszyscy popełniają (i nie zauważają)",
    summary: "Zaskoczenie + obietnica szybkiej poprawy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Działaj jak scenarzysta Reels/TikTok. Stwórz 10 hooków w 1 zdaniu (maks. 9 słów) dla niszy: [NISZA].
Format: Hook → (dlaczego wciąga w 1 linijce).
Zasady:
- Musi zaczynać się od „Robisz to źle…”
- Ma obiecać konkretny efekt w 7 dni.
- Bez pustego clickbaitu: wskaż realną przyczynę.
- Neutralny polski.`,
  },
  {
    id: "viral-hook-sorpresa-002",
    title: "Okłamują cię tym „tipem”",
    summary: "Lekka kontradykcja wobec popularnej porady.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 12 viralowych hooków atakujących popularną poradę z [TEMAT].
Obowiązkowa struktura:
1) „Okłamują cię tym…” + [PORADA]
2) mini-dowód w 6–10 słowach
3) obietnica: „w 20 sekund ci to wyjaśnię”
Dla odbiorcy: [ODBIORCA].`,
  },
  {
    id: "viral-hook-sorpresa-003",
    title: "Spróbowałem i wyszło na odwrót",
    summary: "Eksperyment, który nie wyszedł — zostawia ciekawość.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków w stylu „eksperyment” dla [CEL].
Każdy hook ma:
- zaczynać się od „Spróbowałem i…”
- zawierać nieoczekiwany zwrot
- kończyć się pytaniem
Ton: bezpośredni, uliczny, ale profesjonalny.`,
  },
  {
    id: "viral-hook-sorpresa-004",
    title: "Nikt nie mówi o tej części",
    summary: "Hook o pomijanym elemencie, bez przesady.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków dla [TEMAT] z frazą „Nikt ci nie mówi…”.
Zasady:
- 6–10 słów.
- Ma sugerować „niewygodną” lub niedocenianą część.
- Unikaj obietnic nielegalnych lub gwarantowanych.
- Dodaj 5 łagodniejszych wariantów (mniej konfrontacyjnych).`,
  },
  {
    id: "viral-hook-sorpresa-005",
    title: "Niewygodna prawda w 1 zdaniu",
    summary: "Krótko, mocno, otwiera pętlę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 25 hooków (maks. 8 słów) dla [NISZA] brzmiących jak „niewygodne prawdy”.
Struktura:
- Mocne stwierdzenie + konkretny detal.
- Bez obrażania.
- Mają wywołać myśl „okej, to co robić?”.
Podaj w numerowanej liście.`,
  },
  {
    id: "viral-hook-sorpresa-006",
    title: "Najdziwniejszy trik, który naprawdę działa",
    summary: "Dziwność + walidacja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków dla [REZULTAT] używając „Najdziwniejszy trik, który…”.
Uwzględnij:
- 5 hooków dla początkujących
- 5 dla średnio zaawansowanych
- 5 dla zaawansowanych
Na końcu każdego hooka dodaj: (co obiecuje w 3 słowach).`,
  },
  {
    id: "viral-hook-sorpresa-007",
    title: "Co bym zrobił, gdybym zaczynał od zera",
    summary: "Restart z zaskoczeniem i jasnością.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 hooków w pierwszej osobie dla [CEL] zaczynając od:
„Gdybym zaczynał od zera, zrobiłbym to:”
Zasady:
- 1 zdanie.
- Wspomnij krok, który przeczy powszechnej intuicji.
- Ton: bliski mentor.`,
  },
  {
    id: "viral-hook-sorpresa-008",
    title: "To brzmi źle, ale jest najlepsze",
    summary: "Gra napięciem moralnym/„dziwnością” bez szkody.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 18 hooków dla [TEMAT] wg szablonu:
„To brzmi źle, ale… [korzyść]”
Warunki:
- „Brzmi źle” ma być etyczne (bez oszustw/szkody).
- Korzyść ma być konkretna i namacalna.
- Maks. 9–11 słów.`,
  },
  {
    id: "viral-hook-sorpresa-009",
    title: "Twój problem nie jest tym, co myślisz",
    summary: "Reframing z zaskoczeniem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków zaczynających się od:
„Twój problem to nie [X], tylko [Y]”
Dla branży: [BRANŻA].
Dodaj 5 przykładów dla każdego podtematu: [PODTEMAT1], [PODTEMAT2], [PODTEMAT3], [PODTEMAT4].`,
  },
  {
    id: "viral-hook-sorpresa-010",
    title: "Zaoszczędzę ci 6 miesięcy",
    summary: "Obietnica oszczędności czasu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 15 hooków dla [REZULTAT] zaczynających się od:
„Zaoszczędzę ci 6 miesięcy…”
Zasady:
- Wskaż konkretny błąd, którego unikniesz.
- Zero „gwarantowane”.
- Ton pilny, ale realistyczny.`,
  },

  {
    id: "viral-hook-sorpresa-011",
    title: "Porada, która kosztowała mnie pieniądze",
    summary: "Droga lekcja (zaskoczenie + historia).",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 12 hooków-historii (1 zdanie) dla [NISZA] zaczynających się od:
„Porada, która kosztowała mnie pieniądze, to…”
Musi kończyć się „i powiem ci, co zrobić.”
Ma być wiarygodnie i konkretnie.`,
  },
  {
    id: "viral-hook-sorpresa-012",
    title: "Nie rób tego, jeśli chcesz wyniki",
    summary: "Zakaz + konkretny zwrot.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków zaczynających się od:
„Nie rób tego, jeśli chcesz [REZULTAT]”
„Tego” ma być bardzo konkretne (konkretna akcja).
Maks. 10 słów na hook.`,
  },
  {
    id: "viral-hook-sorpresa-013",
    title: "Minimalny detal, który zmienia wszystko",
    summary: "Mikro-detal + duży wpływ.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 hooków o mikro-detalach dla [TEMAT].
Szablon:
„Minimalny detal, który zmienia wszystko: [DETAL]”
[DETAL] ma być do zrobienia w 2 minuty.`,
  },
  {
    id: "viral-hook-sorpresa-014",
    title: "Przestań stosować tę zasadę",
    summary: "Anti-zasada (zaskoczenie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków dla [ODBIORCA] używając:
„Przestań stosować tę zasadę: [ZASADA]”
Potem dodaj 1 mini-argument (maks. 8 słów).
Bez agresji. Prosto i mocno.`,
  },
  {
    id: "viral-hook-sorpresa-015",
    title: "To rozwalało moje wyniki (aż do dziś)",
    summary: "Kontrolowany dramat z bliską ulgą.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 hooków dla [CEL] z:
„To rozwalało moje wyniki… aż do dziś”
Dodaj wskazówkę „naprawy”, ale nie zdradzaj jej wprost.
Ton: szczery, bez przesady.`,
  },
  {
    id: "viral-hook-sorpresa-016",
    title: "Skrót nie jest skrótem",
    summary: "Paradoks, który otwiera pętlę.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 20 paradoksalnych hooków o [TEMAT].
Struktura:
„Skrót to nie [X], tylko [Y]”
Spraw, żeby [Y] było trafne i intrygujące.`,
  },
  {
    id: "viral-hook-sorpresa-017",
    title: "Twoja formuła jest niepełna",
    summary: "„Brakuje ci elementu”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków zaczynających się od:
„Twoja formuła jest niepełna: brakuje ci [ELEMENT]”
Dla: [ODBIORCA].
Każdy [ELEMENT] ma być konkretną akcją lub jasnym pojęciem.`,
  },
  {
    id: "viral-hook-sorpresa-018",
    title: "Jeśli robisz to, sam siebie blokujesz",
    summary: "Konkretny autosabotaż.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 hooków o autosabotażu dla [TEMAT].
Zasady:
- Zaczynają się od „Jeśli robisz to…”
- Kończą się jasną konsekwencją.
- Bez ogólników (żadnego „negatywnego myślenia”).`,
  },
  {
    id: "viral-hook-sorpresa-019",
    title: "To nie brak talentu, tylko to",
    summary: "Emocjonalny reframing + rozwiązanie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków:
„To nie brak talentu, tylko [PRZYCZYNA]”
Dla [NISZA].
[PRZYCZYNA] ma być konkretna i do poprawy w tydzień.`,
  },
  {
    id: "viral-hook-sorpresa-020",
    title: "Źle to mierzysz",
    summary: "Zła metryka (zaskoczenie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 15 hooków dla [TEMAT] jako korekta metryk.
Szablon:
„Źle to mierzysz: patrz na [PRAWDZIWA_METRYKA]”
[PRAWDZIWA_METRYKA] ma być konkretna i użyteczna.`,
  },

  {
    id: "viral-hook-sorpresa-021",
    title: "To brzmi oczywiście, ale nikt tego nie robi",
    summary: "Oczywistość ignorowana.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 25 hooków dla [CEL] zaczynających się od:
„To brzmi oczywiście, ale…”
Dodaj prostą akcję, której prawie nikt nie wykonuje.
Maks. 11 słów.`,
  },
  {
    id: "viral-hook-sorpresa-022",
    title: "Powód, dla którego to ci nie działa",
    summary: "Hook przyczynowy z nieoczywistą prawdą.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 20 hooków:
„Powód, dla którego [X] ci nie działa…”
Dopisz nieoczekiwaną, ale realną przyczynę.
Skup się na: [TEMAT].`,
  },
  {
    id: "viral-hook-sorpresa-023",
    title: "Porada, która daje odwrotne efekty",
    summary: "Odwrócenie oczekiwań.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 hooków o „radach, które działają na odwrót” dla [NISZA].
Struktura każdego hooka:
- Typowa rada
- Odwrotny efekt w 4–7 słowach
Wszystko w jednym zdaniu.`,
  },
  {
    id: "viral-hook-sorpresa-024",
    title: "Zrób odwrotnie (ale tak)",
    summary: "Kontrariańsko + instrukcja.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 18 hooków:
„Zrób odwrotnie: zamiast [X], zrób [Y]”
Dla [ODBIORCA].
[X] i [Y] muszą być konkretne i realistyczne.`,
  },
  {
    id: "viral-hook-sorpresa-025",
    title: "Brakuje ci jednej linijki (dosłownie)",
    summary: "Mikro-zmiana w tekście.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków dla copy/marketingu, gdzie zwrotem jest „jedna linijka”.
Szablon:
„Brakuje ci jednej linijki: [LINIJKA]”
[LINIJKA] ma być gotowym zdaniem do skopiowania.`,
  },
  {
    id: "viral-hook-sorpresa-026",
    title: "Trik jest nudny (dlatego działa)",
    summary: "Anti-hype, wiarygodne.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków z ideą:
„Trik jest nudny… dlatego działa.”
Dla [TEMAT].
Każdy hook ma kończyć się „Pokażę ci jak.”`,
  },
  {
    id: "viral-hook-sorpresa-027",
    title: "To nie jest dla wszystkich",
    summary: "Łagodne wykluczenie (segmentacja).",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków zaczynających się od:
„To nie jest dla wszystkich — to dla…”
Zdefiniuj ultra-konkretny profil [ODBIORCA].
Bez agresywnego elitaryzmu.`,
  },
  {
    id: "viral-hook-sorpresa-028",
    title: "Część, którą najbardziej ignorujesz (a najbardziej waży)",
    summary: "Zły fokus.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków dla [CEL]:
„To, co najbardziej ignorujesz, waży najwięcej: [CZĘŚĆ]”
[CZĘŚĆ] ma być konkretna (np. „twój finisz”, „twoja oferta”, „pierwszy akapit”).`,
  },
  {
    id: "viral-hook-sorpresa-029",
    title: "Jeśli dziś zrobisz tylko 1 rzecz",
    summary: "Jedna dźwignia (zaskoczenie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 25 hooków zaczynających się od:
„Jeśli dziś zrobisz tylko 1 rzecz…”
Dla [TEMAT].
Ma to być działanie o dużym wpływie i niskim tarciu.`,
  },
  {
    id: "viral-hook-sorpresa-030",
    title: "Zasada 3-1-1",
    summary: "Mini-framework liczbowy.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 12 hooków z wymyślonymi (ale użytecznymi) frameworkami liczbowymi dla [TEMAT].
Przykład: „Zasada 3-1-1: [obietnica]”
Potem wyjaśnij nazwę w 6 słowach w obrębie hooka.`,
  },

  {
    id: "viral-hook-sorpresa-031",
    title: "Mówię z doświadczenia (i boli)",
    summary: "Wyznanie + napięcie.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków dla [NISZA] zaczynających się od:
„Mówię z doświadczenia…”
Dodaj mały „ból” i obietnicę rozwiązania.
Maks. 12 słów.`,
  },
  {
    id: "viral-hook-sorpresa-032",
    title: "Ten nawyk kradnie ci wyniki",
    summary: "Niewidzialny nawyk.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków o niewidzialnych nawykach w [TEMAT].
Szablon:
„Ten nawyk kradnie ci [REZULTAT]: [NAWYK]”
[NAWYK] ma być codzienny i konkretny.`,
  },
  {
    id: "viral-hook-sorpresa-033",
    title: "Nie potrzebujesz więcej info, potrzebujesz tego",
    summary: "Przeciążenie informacją.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków dla [ODBIORCA] przeciążonego informacjami.
Szablon:
„Nie potrzebujesz więcej info, potrzebujesz [X]”
[X] ma być prostą akcją lub systemem.`,
  },
  {
    id: "viral-hook-sorpresa-034",
    title: "To, czego nikt nie robi w pierwszej sekundzie",
    summary: "Pierwsza sekunda — konkret.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków o „pierwszej sekundzie” dla [TEMAT].
Musi wspomnieć coś wizualnego lub słownego na start.
Zakończ: „i dlatego trzyma uwagę.”`,
  },
  {
    id: "viral-hook-sorpresa-035",
    title: "Wrogiem nie jest algorytm",
    summary: "Anty-mit.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 12 hooków z ideą:
„Wrogiem nie jest algorytm, tylko [X]”
Dla twórców na [PLATFORMA].
[X] ma być błędem treści lub oferty.`,
  },
  {
    id: "viral-hook-sorpresa-036",
    title: "Twoje treści padają przez to (nie przez jakość)",
    summary: "Nieoczywista przyczyna.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków:
„Twoje treści padają przez [X], nie przez jakość.”
[X] zmieniaj: struktura, jasność, oferta, tarcie, kontekst, timing.
Dla [NISZA].`,
  },
  {
    id: "viral-hook-sorpresa-037",
    title: "To sprawia, że wyglądasz jak amator (i nie wiesz)",
    summary: "„Amatorski detal”.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 25 hooków o „amatorskim detalu” dla [TEMAT].
Szablon:
„To sprawia, że wyglądasz jak amator: [DETAL]”
[DETAL] ma być konkretny i łatwy do poprawy.`,
  },
  {
    id: "viral-hook-sorpresa-038",
    title: "Zdanie, które zmienia odpowiedź",
    summary: "Formuła tekstowa.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 15 hooków opartych na „JEDNYM konkretnym zdaniu”.
Szablon:
„Powiedz to zdanie i wszystko się zmienia: ‘[ZDANIE]’”
[ZDANIE] ma być gotowe do kopiuj-wklej dla [ODBIORCA].`,
  },
  {
    id: "viral-hook-sorpresa-039",
    title: "Nie rób tego trudniej",
    summary: "Upraszcza z twistem.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków zaczynających się od:
„Nie rób tego trudniej…”
Potem dodaj nieoczekiwane uproszczenie dla [CEL].
Maks. 10 słów.`,
  },
  {
    id: "viral-hook-sorpresa-040",
    title: "Trik to odejmować, nie dodawać",
    summary: "Sztuka odejmowania (zaskoczenie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 15 hooków:
„Trik to odejmować [X], nie dodawać [Y].”
Dla [TEMAT].
[X] i [Y] muszą być realne (kroki, słowa, nawyki).`,
  },

  {
    id: "viral-hook-sorpresa-041",
    title: "Ta zmiana kolejności poprawia wszystko",
    summary: "Przestawienie kroków.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 18 hooków o „zmianie kolejności” dla [PROCES].
Szablon:
„Zmień kolejność: najpierw [A], potem [B].”
[A]/[B] mają być jasnymi akcjami.`,
  },
  {
    id: "viral-hook-sorpresa-042",
    title: "To, co robisz dla „bezpieczeństwa”, cię hamuje",
    summary: "Zachowanie ochronne jako hamulec.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 15 hooków:
„To, co robisz dla bezpieczeństwa… hamuje cię.”
Dopisz typowe zachowanie [ODBIORCA].
Dodaj mini „dlaczego” w 5 słowach.`,
  },
  {
    id: "viral-hook-sorpresa-043",
    title: "Pomijasz niewidzialny krok",
    summary: "Pominięty etap.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 20 hooków zawierających ideę:
„niewidzialny krok”
Szablon:
„Pomijasz niewidzialny krok: [KROK]”
Dla [TEMAT]. [KROK] ma być do zrobienia.`,
  },
  {
    id: "viral-hook-sorpresa-044",
    title: "Jeśli to ci się zdarza, to dobry znak",
    summary: "Pozytywne przeformułowanie (zaskoczenie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków:
„Jeśli masz [OBJAW], to dobry znak.”
Dla [ODBIORCA].
[OBJAW] ma być częsty i niegroźny (np. stres, wątpliwości, spadek motywacji).`,
  },
  {
    id: "viral-hook-sorpresa-045",
    title: "Tego bym nie zrobił za nic",
    summary: "Mocna opinia bez agresji.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 15 hooków w stylu stanowczej opinii:
„Tego nie zrobiłbym za nic: [X]”
Dla [NISZA].
[X] ma być częstą strategią, ale złą w pewnym kontekście.
Zakończ: „powiem, co bym zrobił.”`,
  },
  {
    id: "viral-hook-sorpresa-046",
    title: "Zmiana w 5 słowach",
    summary: "Mikro-edycja tekstu.",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 20 hooków:
„Zmiana w 5 słowach, która poprawia [REZULTAT]”
W hooku podaj dokładne 5 słów w cudzysłowie.
Dla [TEMAT].`,
  },
  {
    id: "viral-hook-sorpresa-047",
    title: "Powód, dla którego cię ignorują",
    summary: "Uderza w realny ból.",
    area: AREA,
    category: CATEGORY,
    prompt: `Napisz 18 hooków dla [PLATFORMA] z:
„Powód, dla którego cię ignorują, to…”
Dopisz błąd w skupieniu (bez obelg).
Ma być prosto i użytecznie.`,
  },
  {
    id: "viral-hook-sorpresa-048",
    title: "To jest ważniejsze niż strategia",
    summary: "Zaskakujący priorytet.",
    area: AREA,
    category: CATEGORY,
    prompt: `Stwórz 20 hooków:
„To jest ważniejsze niż strategia: [X]”
Dla [TEMAT].
[X] = fundament (jasność, oferta, konsekwencja, energia itd.), ale opisany konkretnie.`,
  },
  {
    id: "viral-hook-sorpresa-049",
    title: "Co robię przed publikacją",
    summary: "Rytuał „sekret” (zaskoczenie).",
    area: AREA,
    category: CATEGORY,
    prompt: `Daj 15 hooków o „przed publikacją” dla twórców w [NISZA].
Szablon:
„Przed publikacją robię to: [AKCJA]”
[AKCJA] ma być prosta i mało oczywista.`,
  },
  {
    id: "viral-hook-sorpresa-050",
    title: "Sekret jest w zakończeniu, nie w początku",
    summary: "Odwrócenie: finisz > start.",
    area: AREA,
    category: CATEGORY,
    prompt: `Wygeneruj 12 hooków o scenariuszach, gdzie kluczem jest domknięcie.
Szablon:
„Sekret jest w zakończeniu: [KLUCZ]”
[KLUCZ] ma być konkretny (CTA, payoff, puenta, dowód, przykład itd.).
Dla [TEMAT].`,
  },
];
